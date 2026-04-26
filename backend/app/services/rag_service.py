import faiss
import numpy as np
import pandas as pd
from sentence_transformers import SentenceTransformer

from app.services.analyzer import get_campaign_diagnostics

_model = SentenceTransformer("all-MiniLM-L6-v2")
_index = None
_documents = []


def build_documents():
    diagnostics = get_campaign_diagnostics()
    tickets = pd.read_csv("app/data/tickets.csv")

    docs = []

    for item in diagnostics:
        docs.append(
            f"""
            Type: Campaign Diagnostics
            Campaign ID: {item['campaign_id']}
            Campaign Name: {item['campaign_name']}
            Platform: {item['platform']}
            Spend: {item['spend']}
            CTR: {item['ctr']}%
            CPC: {item['cpc']}
            Conversion Rate: {item['conversion_rate']}%
            ROAS: {item['roas']}
            Health Score: {item['health_score']}
            Issues: {'; '.join(item['issues'])}
            """
        )

    for _, row in tickets.iterrows():
        docs.append(
            f"""
            Type: Support Ticket
            Ticket ID: {row['ticket_id']}
            Campaign ID: {row['campaign_id']}
            Issue: {row['issue']}
            Customer Message: {row['customer_message']}
            Resolution: {row['resolution']}
            """
        )

    return docs


def build_faiss_index():
    global _index, _documents

    _documents = build_documents()
    embeddings = _model.encode(_documents, convert_to_numpy=True)
    embeddings = embeddings.astype("float32")

    dimension = embeddings.shape[1]
    _index = faiss.IndexFlatL2(dimension)
    _index.add(embeddings)


def retrieve_context(query: str, top_k: int = 5):
    global _index, _documents

    if _index is None:
        build_faiss_index()

    query_embedding = _model.encode([query], convert_to_numpy=True).astype("float32")
    distances, indices = _index.search(query_embedding, top_k)

    results = []
    for idx in indices[0]:
        if idx != -1:
            results.append(_documents[idx])

    return results