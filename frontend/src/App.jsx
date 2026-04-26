import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExecutiveSummary from "./components/ExecutiveSummary";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Bot,
  DollarSign,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { getCampaigns, getDiagnostics, askCopilot } from "./api/api";

export default function App() {
  const [campaigns, setCampaigns] = useState([]);
  const [diagnostics, setDiagnostics] = useState([]);
  const [question, setQuestion] = useState("Which campaigns need urgent attention?");
  const [copilot, setCopilot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const campaignRes = await getCampaigns();
        const diagnosticsRes = await getDiagnostics();

        setCampaigns(campaignRes.data);
        setDiagnostics(diagnosticsRes.data.campaigns);
      } catch (err) {
        setError("Backend API is not reachable. Please make sure FastAPI is running on port 8000.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const handleAsk = async () => {
  try {
    setAsking(true);
    setCopilot(null);
    const res = await askCopilot(question);
    setCopilot(res.data);
  } catch (err) {
    setCopilot({
      answer: "The AI Copilot could not generate a response. Please check that the backend is running and Gemini API key is configured.",
      evidence: [],
    });
  } finally {
    setAsking(false);
  }
};

  const totalSpend = campaigns.reduce((sum, c) => sum + c.spend, 0);
  const avgROAS =
    campaigns.length > 0
      ? campaigns.reduce((sum, c) => sum + c.roas, 0) / campaigns.length
      : 0;
  const avgCTR =
    campaigns.length > 0
      ? campaigns.reduce((sum, c) => sum + c.ctr, 0) / campaigns.length
      : 0;
  const criticalCount = diagnostics.filter((c) => c.health_score < 60).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
  <Navbar />
      <Hero />

      <main id="dashboard" className="max-w-7xl mx-auto px-8 py-8 space-y-8">
        {loading && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
            Loading campaign intelligence...
          </div>
        )}

        {error && (
          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <MetricCard icon={<DollarSign />} label="Total Spend" value={`$${totalSpend.toLocaleString()}`} />
              <MetricCard icon={<TrendingUp />} label="Avg ROAS" value={avgROAS.toFixed(2)} />
              <MetricCard icon={<MousePointerClick />} label="Avg CTR" value={`${avgCTR.toFixed(2)}%`} />
              <MetricCard icon={<AlertTriangle />} label="At-Risk Campaigns" value={criticalCount} />
            </div>

            <ExecutiveSummary campaigns={campaigns} diagnostics={diagnostics} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Campaign ROAS">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={campaigns}>
                    <XAxis dataKey="campaign_name" tick={{ fill: "#cbd5e1", fontSize: 11 }} />
                    <YAxis tick={{ fill: "#cbd5e1" }} />
                    <Tooltip />
                    <Bar dataKey="roas" fill="#818cf8" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Health Score by Campaign">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={diagnostics}>
                    <XAxis dataKey="campaign_name" tick={{ fill: "#cbd5e1", fontSize: 11 }} />
                    <YAxis tick={{ fill: "#cbd5e1" }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="health_score" stroke="#22c55e" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            <section id="diagnostics" className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <Activity className="text-indigo-300" />
                <h2 className="text-2xl font-semibold">Campaign Diagnostics</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-slate-400">
                    <tr>
                      <th className="text-left py-3">Campaign</th>
                      <th className="text-left py-3">Platform</th>
                      <th className="text-left py-3">CTR</th>
                      <th className="text-left py-3">CPC</th>
                      <th className="text-left py-3">ROAS</th>
                      <th className="text-left py-3">Health</th>
                      <th className="text-left py-3">Issues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diagnostics.map((item) => (
                      <tr key={item.campaign_id} className="border-t border-white/10">
                        <td className="py-4 font-medium">{item.campaign_name}</td>
                        <td>{item.platform}</td>
                        <td>{item.ctr}%</td>
                        <td>${item.cpc}</td>
                        <td>{item.roas}</td>
                        <td>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            item.health_score >= 80
                              ? "bg-green-500/15 text-green-300"
                              : item.health_score >= 60
                              ? "bg-yellow-500/15 text-yellow-300"
                              : "bg-red-500/15 text-red-300"
                          }`}>
                            {item.health_score}
                          </span>
                        </td>
                        <td className="max-w-md text-slate-300">
                          {item.issues.join(" ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="copilot" className="rounded-3xl border border-indigo-400/20 bg-indigo-500/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="text-indigo-300" />
                <h2 className="text-2xl font-semibold">AI Troubleshooting Copilot</h2>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="flex-1 rounded-2xl bg-slate-950 border border-white/10 px-4 py-3 text-white outline-none"
                  placeholder="Ask about campaign performance..."
                />
                <button
                  onClick={handleAsk}
                  disabled={asking}
                  className="rounded-2xl bg-indigo-500 px-6 py-3 font-semibold transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {asking ? "Analyzing..." : "Ask Copilot"}
                </button>
              </div>
              {copilot &&  (
               <div className="mt-6 rounded-3xl bg-slate-950/90 border border-white/10 p-6 space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2">
                        Gemini RAG Response
                      </p>

                      <div className="prose prose-invert max-w-none">
                        {copilot.answer.split("\n").map((line, index) => {
                          if (line.startsWith("**") || line.match(/^\d\./)) {
                            return (
                              <h3 key={index} className="mt-5 mb-2 text-lg font-semibold text-white">
                                {line.replaceAll("*", "")}
                              </h3>
                            );
                          }

                          if (line.trim().startsWith("-") || line.trim().startsWith("*")) {
                            return (
                              <p key={index} className="ml-4 text-slate-300">
                                • {line.replace("-", "").replace("*", "").trim()}
                              </p>
                            );
                          }

                          return (
                            <p key={index} className="leading-7 text-slate-300">
                              {line.replaceAll("*", "")}
                            </p>
                          );
                        })}
                      </div>
                    </div>

                    {copilot.evidence && copilot.evidence.length > 0 && (
                      <div>
                        <h3 className="mb-3 text-lg font-semibold text-white">
                          Retrieved Evidence from FAISS
                        </h3>

                        <div className="grid gap-3">
                          {copilot.evidence.map((doc, index) => (
                            <div
                              key={index}
                              className="rounded-2xl border border-indigo-400/20 bg-indigo-500/5 p-4 text-sm text-slate-300"
                            >
                              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-300">
                                Evidence #{index + 1}
                              </div>

                              <pre className="whitespace-pre-wrap font-sans leading-6">
                                {doc}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

function MetricCard({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl"
    >
      <div className="mb-4 text-indigo-300">{icon}</div>
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="text-3xl font-bold mt-1">{value}</h3>
    </motion.div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
