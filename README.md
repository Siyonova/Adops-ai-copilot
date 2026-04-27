# 🚀 AdOps AI Copilot

![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Gemini](https://img.shields.io/badge/LLM-Gemini-8E44AD?style=for-the-badge)
![RAG](https://img.shields.io/badge/AI-RAG-FF9800?style=for-the-badge)
![FAISS](https://img.shields.io/badge/VectorDB-FAISS-0A66C2?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)

> **AI-powered AdTech diagnostics platform that uses Retrieval-Augmented Generation (RAG), vector search, and Gemini LLM to analyze campaign performance and generate optimization recommendations.**

---

## 🌐 Live Demo

🔗 **Frontend:** YOUR_VERCEL_LINK  
🔗 **Backend API Docs:** YOUR_HUGGINGFACE_BACKEND_URL/docs

---

## 🖼️ Product Preview

### Hero + Dashboard

![Dashboard](assets/dashboard.png)

### Executive Analytics + Charts

![Charts](assets/charts.png)

### AI Copilot (Real LLM + RAG)

![Copilot](assets/copilot.png)

### PDF Executive Report

![Report](assets/report.png)

---

## 💡 Problem Statement

Digital marketing teams often struggle to quickly identify:

- Why campaigns are underperforming  
- Which metrics are causing revenue loss  
- What actions should be prioritized  
- How to combine support-ticket feedback with campaign data  

This project solves that using a **real AI assistant** backed by retrieval and LLM reasoning.

---

## 🧠 What It Does

Users can ask questions like:

> “Why is CAMP005 performing badly and what should we do?”

The platform then:

1. Retrieves campaign KPI records and support-ticket evidence  
2. Uses vector search (FAISS) to find relevant context  
3. Sends grounded context to Gemini LLM  
4. Returns structured recommendations with evidence  

---

## ⚙️ Core Features

### 📊 Analytics Dashboard

- CTR, CPC, Conversion Rate, ROAS tracking  
- Campaign health scoring  
- At-risk campaign detection  
- Spend analysis & KPI cards  

### 🤖 AI Troubleshooting Copilot

- Real Gemini LLM responses  
- Retrieval-Augmented Generation (RAG)  
- Evidence-backed recommendations  
- Executive summaries + root cause analysis  

### 📄 Executive Reporting

- Downloadable PDF performance report  
- Business-ready summaries for stakeholders  

### ☁️ Deployment

- Frontend hosted on Vercel  
- AI backend hosted on Hugging Face Spaces  

---

## 🏗️ System Architecture

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
