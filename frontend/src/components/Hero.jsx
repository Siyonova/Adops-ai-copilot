import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Bot, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-8 py-20">
      <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200">
            <Bot size={16} />
            AI-Powered Ad Performance Intelligence
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Diagnose Ads.
            <span className="block text-indigo-300">Fix Revenue Leaks.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A full-stack AI copilot that detects campaign issues, explains root causes,
            and recommends optimization actions using analytics + RAG-style evidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#dashboard"
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-6 py-3 font-semibold hover:bg-indigo-400"
            >
              View Dashboard <ArrowRight size={18} />
            </a>
            <a
              href="#copilot"
              className="rounded-2xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/10"
            >
              Try AI Copilot
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur"
        >
          <div className="grid gap-4">
            <HeroCard icon={<BarChart3 />} title="Campaign Health Scoring" text="Automatically rank campaigns by risk using CTR, CPC, CVR and ROAS." />
            <HeroCard icon={<ShieldCheck />} title="Root Cause Diagnostics" text="Detect low engagement, wasted spend, weak conversion paths and poor return." />
            <HeroCard icon={<Bot />} title="AI Troubleshooting Copilot" text="Ask business questions and receive evidence-backed optimization actions." />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
      <div className="mb-3 text-indigo-300">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}