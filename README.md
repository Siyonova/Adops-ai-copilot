#  AdOps AI Copilot

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Gemini](https://img.shields.io/badge/LLM-Gemini-8E44AD?style=for-the-badge)
![RAG](https://img.shields.io/badge/AI-RAG-FF9800?style=for-the-badge)
![FAISS](https://img.shields.io/badge/VectorDB-FAISS-0A66C2?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

> **AI-powered AdTech diagnostics platform that uses Retrieval-Augmented Generation (RAG), vector search, and Gemini LLM to analyze campaign performance, detect issues, and generate optimization recommendations.**

---

# Live Demo

**Frontend:** [VERCEL_LINK](https://adops-ai-copilot.vercel.app/)  
**Backend API Docs:** [HUGGINGFACE_BACKEND_URL/docs](https://mosscode-adops-ai-copilot-api.hf.space/docs)


---

# Product Preview

## Dashboard

![Dashboard](assets/dashboard.png)

## Analytics + Executive Summary

![Charts](assets/charts.png)

## AI Copilot

![Copilot](assets/copilot.png)

## PDF Report Export

![Report](assets/report.png)

---

# Overview

AdOps AI Copilot is a full-stack AI product designed for marketing, growth, and Ad Operations teams.

It helps diagnose underperforming ad campaigns using real campaign KPIs, retrieves relevant historical issues and support-ticket evidence, and uses an LLM to generate grounded troubleshooting recommendations.

This project simulates how enterprise AdTech teams can reduce manual investigation time and make faster optimization decisions.

---

# Features

## Campaign Diagnostics Engine

- Campaign health scoring
- CTR / CPC / Conversion Rate / ROAS analysis
- Spend monitoring
- At-risk campaign detection
- KPI performance dashboard

## Automated Issue Detection

- Low CTR detection
- Poor ROAS alerts
- High CPC warnings
- Weak conversion rate identification
- Budget waste spotting

## Real Retrieval-Augmented Generation (RAG)

- Semantic embeddings using Sentence Transformers
- FAISS vector similarity search
- Relevant campaign context retrieval
- Ticket evidence retrieval
- Grounded LLM responses

## LLM-Powered AI Troubleshooting Assistant

- Gemini-powered recommendations
- Root cause analysis
- Executive summaries
- Evidence-backed responses
- Actionable next steps

## Interactive Dashboard

- SaaS-style UI
- Charts and analytics cards
- Real-time API integration
- Clean responsive design

## Executive Reporting

- Downloadable PDF reports
- Stakeholder summaries
- Campaign performance snapshots

---

# System Architecture

```text
React + Vite Frontend
        ↓
FastAPI Backend API
        ↓
Campaign KPI Dataset + Support Tickets
        ↓
Sentence Transformers Embeddings
        ↓
FAISS Vector Search
        ↓
Top Relevant Context Retrieval
        ↓
Gemini LLM
        ↓
Generated Troubleshooting Answer
````

---

# Tech Stack

# Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Recharts
* Axios
* jsPDF
* html2canvas

# Backend

* FastAPI
* Python
* Uvicorn
* Pydantic

# AI / ML

* Sentence Transformers
* FAISS
* Gemini API
* Retrieval-Augmented Generation (RAG)

# Data Processing

* Pandas
* NumPy
* scikit-learn

# Deployment

* Vercel
* Hugging Face Spaces

---

# Project Structure

```text
Adops-ai-copilot/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes/
│   │   │   ├── campaigns.py
│   │   │   ├── diagnostics.py
│   │   │   └── copilot.py
│   │   ├── services/
│   │   │   ├── analyzer.py
│   │   │   ├── rag_service.py
│   │   │   └── llm_service.py
│   │   └── data/
│   │       ├── campaigns.csv
│   │       └── tickets.csv
│   ├── requirements.txt
│   └── Dockerfile
│
├── assets/
│   ├── dashboard.png
│   ├── charts.png
│   ├── copilot.png
│   └── report.png
│
└── README.md
```

---

# How It Works

1. Campaign performance data is loaded from structured datasets.

2. Diagnostics engine computes:

* CTR
* CPC
* Conversion Rate
* ROAS
* Health Score

3. Support-ticket and campaign records are embedded into vectors.

4. FAISS retrieves the most relevant campaign issues.

5. Gemini LLM receives grounded context.

6. AI Copilot generates recommendations.

7. User interacts through a professional dashboard.

---

# Example Query

### User asks:

```text
Why is CAMP005 performing badly and what should we do?
```

### AI Response:

```text
Executive Summary:
CAMP005 is underperforming due to poor ROAS, low CTR, and audience fatigue.

Evidence Found:
Retrieved diagnostics and support-ticket records related to CAMP005.

Root Cause:
Weak engagement, inefficient spend, and remarketing fatigue.

Recommended Actions:
- Rotate creatives
- Expand audience pool
- Exclude recent converters
- Pause weak ad sets
- Improve landing page offer
```

---

# Running the Project Locally

# 1️ Clone Repository

```bash
git clone https://github.com/Siyonova/Adops-ai-copilot.git
cd Adops-ai-copilot
```

# 2️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

# 3️ Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

API docs:

```text
http://127.0.0.1:8000/docs
```

---

# Dashboard Features

* KPI summary cards
* Spend insights
* ROAS charts
* Campaign health graph
* Diagnostics table
* AI Copilot query panel
* PDF report download

---

# Example Use Cases

* Diagnose low CTR campaigns
* Detect poor ROAS accounts
* Investigate budget waste
* Analyze conversion drop-offs
* Support AdOps teams with AI
* Generate stakeholder reports

---

# Business Impact

This platform demonstrates how growth teams can:

* Reduce manual debugging time
* Detect revenue leaks quickly
* Prioritize weak campaigns faster
* Combine support feedback with metrics
* Use AI for optimization workflows

---

# Future Improvements

* Google Ads API integration
* Meta Ads API integration
* Live campaign ingestion
* Multi-account dashboards
* Forecasting models
* Anomaly detection
* User authentication
* Team collaboration notes
* LLM fine-tuning on AdTech workflows

---

# Resume Bullet

Built and deployed a full-stack AI AdTech Copilot using React, FastAPI, FAISS, Sentence Transformers, and Gemini LLM with Retrieval-Augmented Generation to diagnose campaign performance issues and generate evidence-backed optimization recommendations.

---

# Author

**Siyonova**

Passionate about AI systems, full-stack products, analytics platforms, and enterprise ML solutions.

GitHub: [https://github.com/Siyonova](https://github.com/Siyonova)

---

# Support

If you like this project, star the repo and connect with me.

```
```
