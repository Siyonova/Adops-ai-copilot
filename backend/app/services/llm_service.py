import os
from dotenv import load_dotenv
from google import genai

load_dotenv(dotenv_path=".env")

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY missing in .env")

client = genai.Client(api_key=api_key)


def generate_rag_answer(question: str, context_docs: list[str]):
    context = "\n\n---\n\n".join(context_docs)

    prompt = f"""
You are an expert AdOps AI Copilot.

Use ONLY the provided context.

Context:
{context}

Question:
{question}

Give:
1. Executive Summary
2. Root Cause
3. Recommended Actions
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text