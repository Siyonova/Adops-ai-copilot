import { Bot, GitBranch } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-indigo-500/20 p-2 text-indigo-300">
            <Bot size={22} />
          </div>
          <div>
            <h1 className="text-lg font-bold">AdOps AI Copilot</h1>
            <p className="text-xs text-slate-400">Campaign Diagnostics Platform</p>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
          <a href="#diagnostics" className="hover:text-white">Diagnostics</a>
          <a href="#copilot" className="hover:text-white">AI Copilot</a>
        </div>

        <a
        href="https://github.com/Siyonova/Adops-ai-copilot"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
        >
  
          <GitBranch size={16} />
          GitHub
        </a>
      </div>
    </nav>
  );
}
