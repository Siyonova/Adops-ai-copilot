from fastapi import APIRouter
from app.services.analyzer import get_campaign_diagnostics

router = APIRouter()


@router.get("/")
def diagnostics():
    return {
        "total_issues_detected": sum(
            len(item["issues"]) for item in get_campaign_diagnostics()
        ),
        "campaigns": get_campaign_diagnostics()
    }