from fastapi import APIRouter
from app.services.analyzer import load_campaigns, calculate_metrics

router = APIRouter()


@router.get("/")
def get_campaigns():
    df = calculate_metrics(load_campaigns())
    return df.to_dict(orient="records")