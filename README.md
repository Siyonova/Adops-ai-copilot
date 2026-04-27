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

 **Frontend:** [YOUR_VERCEL_LINK](https://adops-ai-copilot.vercel.app/)  
 **Backend API Docs:** [YOUR_HUGGINGFACE_BACKEND_URL/docs](https://mosscode-adops-ai-copilot-api.hf.space/docs)

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
