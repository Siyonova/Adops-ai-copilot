import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export const getCampaigns = () => axios.get(`${API_BASE_URL}/api/campaigns/`);
export const getDiagnostics = () => axios.get(`${API_BASE_URL}/api/diagnostics/`);
export const askCopilot = (question) =>
  axios.post(`${API_BASE_URL}/api/copilot/ask`, { question });