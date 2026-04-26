from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.rag_service import retrieve_context
from app.services.llm_service import generate_rag_answer

router = APIRouter()


class CopilotRequest(BaseModel):
    question: str


@router.post("/ask")
def ask_copilot(request: CopilotRequest):
    try:
        context = retrieve_context(request.question, top_k=5)
        answer = generate_rag_answer(request.question, context)

        return {
            "question": request.question,
            "answer": answer,
            "evidence": context,
            "recommended_actions": []
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))