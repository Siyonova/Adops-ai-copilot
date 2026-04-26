import { AlertTriangle, CheckCircle2, Target, TrendingDown } from "lucide-react";

export default function ExecutiveSummary({ campaigns, diagnostics }) {
  const totalSpend = campaigns.reduce((sum, c) => sum + c.spend, 0);
  const risky = diagnostics.filter((c) => c.health_score < 60);
  const healthy = diagnostics.filter((c) => c.health_score >= 80);
  const wastedSpend = risky.reduce((sum, c) => sum + c.spend, 0);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Executive Summary</h2>
        <p className="text-sm text-slate-400">
          Business-level campaign risk overview generated from diagnostics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <SummaryCard
          icon={<AlertTriangle />}
          title="Risky Campaigns"
          value={risky.length}
          text="Need urgent optimization"
        />
        <SummaryCard
          icon={<TrendingDown />}
          title="At-Risk Spend"
          value={`$${wastedSpend.toLocaleString()}`}
          text="Budget tied to weak campaigns"
        />
        <SummaryCard
          icon={<CheckCircle2 />}
          title="Healthy Campaigns"
          value={healthy.length}
          text="Performing within thresholds"
        />
        <SummaryCard
          icon={<Target />}
          title="Optimization Focus"
          value="ROAS"
          text="Primary business KPI"
        />
      </div>
    </section>
  );
}

function SummaryCard({ icon, title, value, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
      <div className="mb-4 text-indigo-300">{icon}</div>
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-1 text-3xl font-bold">{value}</h3>
      <p className="mt-2 text-xs text-slate-500">{text}</p>
    </div>
  );
}