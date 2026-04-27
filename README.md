# AdOps AI Copilot

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Gemini](https://img.shields.io/badge/LLM-Gemini-8E44AD?style=for-the-badge)
![RAG](https://img.shields.io/badge/AI-RAG-FF9800?style=for-the-badge)
![FAISS](https://img.shields.io/badge/VectorDB-FAISS-0A66C2?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

> **AI-powered AdTech diagnostics platform that uses Retrieval-Augmented Generation (RAG), vector search, and Gemini LLM to analyze campaign performance and generate optimization recommendations.**

---

##  Live Demo

 **Frontend:** [VERCEL_LINK](https://adops-ai-copilot.vercel.app/)  
 **Backend API Docs:** [HUGGINGFACE_BACKEND_URL/docs](https://mosscode-adops-ai-copilot-api.hf.space/docs)

---

##  Product Preview

### Hero + Dashboard
![Dashboard](assets/dashboard.png)

### Executive Analytics + Charts
![Charts](assets/charts.png)

### AI Copilot (Real LLM + RAG)
![Copilot](assets/copilot.png)

### PDF Executive Report
![Report](assets/report.png)

---

##  Problem Statement

Digital marketing teams often struggle to quickly identify:
* Why campaigns are underperforming
* Which metrics are causing revenue loss
* What actions should be prioritized
* How to combine support-ticket feedback with campaign data

This project solves that using a **real AI assistant** backed by retrieval and LLM reasoning.

---

##  What It Does

Users can ask questions like:
> *“Why is CAMP005 performing badly and what should we do?”*

The platform then:
1.  **Retrieves** campaign KPI records and support-ticket evidence.
2.  Uses **vector search (FAISS)** to find relevant context.
3.  Sends grounded context to **Gemini LLM**.
4.  Returns **structured recommendations** with evidence.

---

##  Core Features

###  Analytics Dashboard
* CTR, CPC, Conversion Rate, and ROAS tracking.
* Campaign health scoring & at-risk detection.
* Spend analysis via interactive KPI cards.

###  AI Troubleshooting Copilot
* Real-time Gemini LLM responses.
* Retrieval-Augmented Generation (RAG) for factual grounding.
* Executive summaries + Root cause analysis.

###  Executive Reporting
* Downloadable PDF performance reports.
* Business-ready summaries for stakeholders.

###  Deployment
* **Frontend:** Hosted on Vercel.
* **Backend:** Hosted on Hugging Face Spaces.

---

##  System Architecture

```text
React + Vite Frontend
        ↓
FastAPI Backend API
        ↓
Campaign + Ticket Knowledge Base
        ↓
Sentence Transformers Embeddings
        ↓
FAISS Vector Search
        ↓
Gemini LLM
        ↓
Grounded Recommendations + Evidence

```
##  Tech Stack

**Frontend**
* **React.js / Vite**
* **Tailwind CSS / Framer Motion**
* **Recharts / Axios**
* **jsPDF / html2canvas**

**Backend**
* **FastAPI / Python**
* **Pandas / NumPy**
* **FAISS / Sentence Transformers**
* **Gemini API / Scikit-learn**

---

##  Business Impact
This platform simulates how growth and AdOps teams can:
* **Reduce manual investigation** time.
* **Detect revenue leaks** faster.
* **Prioritize** weak campaigns instantly.
* Use AI to **accelerate optimization** decisions.

---

##  Example AI Output

> **Executive Summary:** > CAMP005 is underperforming due to poor ROAS, low CTR, and audience fatigue.
>
> **Evidence Found:** > Retrieved diagnostics and support-ticket records for CAMP005.
>
> **Root Cause:** > Weak engagement, inefficient spend, remarketing fatigue.
>
> **Recommended Actions:** > * Rotate creatives  
> * Expand audience pool  
> * Exclude recent converters  
> * Pause weak ad sets  
> * Improve landing page offer  

---

##  Project Structure

```text
Adops-ai-copilot/
│── frontend/      # React dashboard
│── backend/       # FastAPI + RAG + Gemini backend
│── assets/        # Screenshots / README visuals
│── README.md

```
```markdown
##  Run Locally

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

##  Resume Bullet
> Built and deployed a full-stack AI AdTech Copilot using **React, FastAPI, FAISS, Sentence Transformers, and Gemini LLM** with Retrieval-Augmented Generation to diagnose campaign performance issues and generate evidence-backed optimization recommendations.

---

##  Author
** Siyonova** Passionate about building AI systems, analytics products, and business-focused ML solutions.

 **GitHub:** [https://github.com/Siyonova](https://github.com/Siyonova)
```
# Features

* Real AI campaign diagnostics engine
* Automated issue detection using KPI thresholds
* Retrieval-Augmented Generation (RAG) pipeline
* Vector search using FAISS
* Sentence Transformers embeddings retrieval
* Gemini LLM-powered troubleshooting assistant
* Interactive SaaS analytics dashboard
* Executive PDF report generation
* Campaign health scoring system
* AI evidence-backed recommendations
* Real-time API integration between frontend and backend
* Cloud deployment (Vercel + Hugging Face Spaces)

---

# System Architecture

```text
React + Vite Frontend
        ↓
FastAPI Backend API
        ↓
Campaign KPI + Support Ticket Knowledge Base
        ↓
Sentence Transformers Embeddings
        ↓
FAISS Vector Search Retriever
        ↓
Relevant Campaign Evidence
        ↓
Gemini LLM
        ↓
Generated Root Cause Analysis + Recommendations
```

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Recharts
* Framer Motion
* Axios
* jsPDF
* html2canvas

## Backend

* FastAPI
* Python
* Uvicorn

## AI / ML

* Sentence Transformers
* FAISS
* Gemini API
* Retrieval-Augmented Generation (RAG)

## Data Processing

* Pandas
* NumPy
* scikit-learn

## Deployment

* Vercel
* Hugging Face Spaces (Docker)

---

# Project Structure

```text
Adops-ai-copilot/
│
├── frontend/
│   ├── src/
│   │   ├── components/         # Navbar, Hero, Executive Summary
│   │   ├── api/               # Axios API handlers
│   │   └── App.jsx            # Main dashboard UI
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── main.py            # FastAPI app entrypoint
│   │   ├── routes/
│   │   │   ├── campaigns.py
│   │   │   ├── diagnostics.py
│   │   │   └── copilot.py
│   │   ├── services/
│   │   │   ├── analyzer.py    # KPI diagnostics engine
│   │   │   ├── rag_service.py # FAISS retrieval
│   │   │   └── llm_service.py # Gemini generation
│   │   └── data/
│   │       ├── campaigns.csv
│   │       └── tickets.csv
│   ├── requirements.txt
│   └── Dockerfile
│
├── assets/                    # Screenshots for README
└── README.md
```

---

# How It Works

1. Campaign data and support-ticket records are loaded.
2. KPI diagnostics engine computes:

* CTR
* CPC
* Conversion Rate
* ROAS
* Health Score

3. Campaign/ticket data is converted into embeddings.
4. FAISS retrieves the most relevant evidence.
5. Gemini LLM receives grounded context.
6. AI returns:

* Executive Summary
* Root Cause
* Recommended Actions
* Evidence-backed insights

7. User interacts through a modern web dashboard.

---

# Example Query

## User question:

```text
Why is CAMP005 performing badly and what should we do?
```

## AI response:

```text
Executive Summary:
CAMP005 is underperforming due to poor ROAS, low CTR, and audience fatigue.

Root Cause:
Low engagement, inefficient spend, weak remarketing performance.

Recommended Actions:
- Rotate creatives
- Expand audience pool
- Improve landing page offer
- Pause weak ad sets
- Reduce wasted spend
```

---

# Running the Project

## 1️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

## 2️⃣ Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

## 3️⃣ Start Backend API

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```text
http://127.0.0.1:8000
```

API Docs:

```text
http://127.0.0.1:8000/docs
```

## 4️⃣ Start Frontend Dashboard

```bash
cd frontend
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# Dashboard Features

* Campaign KPI cards
* Executive summary section
* ROAS / Health Score charts
* Campaign diagnostics table
* AI Copilot query assistant
* Evidence cards from retrieval system
* Downloadable PDF report

---

# Example Use Cases

* Diagnose poor ROAS campaigns
* Investigate low CTR issues
* Detect wasted ad spend
* Understand campaign fatigue
* Prioritize campaigns by risk
* Generate executive summaries
* Use AI to accelerate optimization decisions

---

# Future Improvements

* Google Ads / Meta Ads API integration
* Real campaign CSV upload
* Multi-user authentication
* Conversation history memory
* Advanced anomaly detection
* Fine-tuned AdTech LLM
* Multi-campaign comparative analytics
* Team collaboration dashboard

---

# Author

Built as a full-stack AI diagnostics platform demonstrating:

* AI systems engineering
* Real Retrieval-Augmented Generation
* LLM integration
* Full-stack product development
* Cloud deployment
* Analytics dashboard design
* Business-focused machine learning
