from fastapi import APIRouter
from pydantic import BaseModel
from app.services.analyzer import get_campaign_diagnostics

router = APIRouter()


class CopilotRequest(BaseModel):
    question: str


@router.post("/ask")
def ask_copilot(request: CopilotRequest):
    diagnostics = get_campaign_diagnostics()

    context = []
    for item in diagnostics:
        context.append(
            f"{item['campaign_name']} has CTR {item['ctr']}%, "
            f"CPC {item['cpc']}, conversion rate {item['conversion_rate']}%, "
            f"ROAS {item['roas']}. Issues: {', '.join(item['issues'])}"
        )

    answer = {
        "question": request.question,
        "answer": (
            "Based on campaign diagnostics, the main performance risks are low CTR, "
            "high CPC, low conversion rate, and poor ROAS. Prioritize campaigns with "
            "health scores below 60. Improve targeting, test new creatives, optimize "
            "landing pages, and reduce inefficient spend."
        ),
        "evidence": context[:5],
        "recommended_actions": [
            "Pause or reduce budget for campaigns with ROAS below 2.",
            "Refresh creatives for campaigns with CTR below 1%.",
            "Review landing pages for campaigns with low conversion rate.",
            "Adjust bidding strategy where CPC is high."
        ]
    }

    return answer