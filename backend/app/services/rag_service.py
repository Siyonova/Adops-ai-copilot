import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

from app.services.analyzer import get_campaign_diagnostics

_vectorizer = None
_matrix = None
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


def build_index():
    global _vectorizer, _matrix, _documents

    _documents = build_documents()
    _vectorizer = TfidfVectorizer(stop_words="english")
    _matrix = _vectorizer.fit_transform(_documents)


def retrieve_context(query: str, top_k: int = 5):
    global _vectorizer, _matrix, _documents

    if _vectorizer is None or _matrix is None:
        build_index()

    query_vec = _vectorizer.transform([query])
    scores = cosine_similarity(query_vec, _matrix).flatten()
    top_indices = scores.argsort()[::-1][:top_k]

    return [_documents[i] for i in top_indices]