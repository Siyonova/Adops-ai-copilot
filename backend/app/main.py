from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import campaigns, diagnostics, copilot

app = FastAPI(
    title="AdOps AI Copilot API",
    description="AI-powered campaign diagnostics and troubleshooting backend.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(campaigns.router, prefix="/api/campaigns", tags=["Campaigns"])
app.include_router(diagnostics.router, prefix="/api/diagnostics", tags=["Diagnostics"])
app.include_router(copilot.router, prefix="/api/copilot", tags=["AI Copilot"])


@app.get("/")
def health_check():
    return {
        "status": "running",
        "message": "AdOps AI Copilot API is live"
    }