import {
  MessageSquareText,
  Shield,
  Key,
  Eye,
  Code2,
  GitPullRequest,
  CheckCircle2,
  Globe,
  Check,
  X,
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
  ClipboardList,
} from "lucide-react";
import { FlowDiagram } from "@/components/FlowDiagram";
import { EarlyAccessButton } from "@/components/EarlyAccessButton";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Ship the features your
            <br />
            users actually{" "}
            <span className="text-[#FF4C29]">want.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your customers submit requests. AI reads your codebase, writes the
            code, and opens a PR. You review and merge.
          </p>
          <p className="text-sm text-gray-500">
            For small SaaS teams with more ideas than engineering hours.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <EarlyAccessButton
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#FF4C29]/20"
              arrowSize={16}
            />
            <a
              href="#how-it-works"
              className="px-7 py-3.5 text-gray-300 hover:text-white text-sm font-medium transition-colors border border-[#FF4C29]/30 hover:border-[#FF4C29]/60 rounded-lg"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* How it works — vertical timeline */}
      <section id="how-it-works" className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-4">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Four steps. Zero engineering time.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              From a user&apos;s idea to a deployed feature — without touching
              your sprint backlog.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF4C29]/40 via-[#FF4C29]/20 to-transparent" />

            {/* Step 1 */}
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-20">
              {/* Dot */}
              <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF4C29]/10 border-2 border-[#FF4C29]/40 flex items-center justify-center z-10">
                <span className="text-sm font-bold text-[#FF4C29]">1</span>
              </div>
              {/* Left content */}
              <div className="lg:w-1/2 lg:text-right lg:pr-16 pl-16 lg:pl-0">
                <div className="inline-flex items-center gap-2 mb-2">
                  <MessageSquareText size={16} className="text-[#FF4C29]" />
                  <span className="text-xs font-semibold text-[#FF4C29] uppercase tracking-wider">User Feedback</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  A user spots something they want
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  They click your embedded widget, type &quot;Add a dark mode
                  toggle to settings,&quot; and hit submit. No account, no
                  ticket system, 10 seconds flat.
                </p>
              </div>
              {/* Right visual */}
              <div className="lg:w-1/2 lg:pl-16 pl-16 lg:pl-16">
                <div className="rounded-lg border border-gray-800/60 bg-[#0B0F19] p-4 max-w-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded bg-[#FF4C29]/20 flex items-center justify-center">
                      <MessageSquareText size={12} className="text-[#FF4C29]" />
                    </div>
                    <span className="text-[11px] font-medium text-white">Feature Request</span>
                  </div>
                  <div className="rounded bg-[#141B2D] border border-gray-800/40 p-3 mb-2">
                    <p className="text-xs text-gray-300">&quot;Add a dark mode toggle to the settings page&quot;</p>
                  </div>
                  <div className="flex justify-end">
                    <span className="px-3 py-1 rounded bg-[#FF4C29] text-[10px] font-semibold text-white">Submit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8 lg:gap-16 mb-20">
              <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF4C29]/10 border-2 border-[#FF4C29]/40 flex items-center justify-center z-10">
                <span className="text-sm font-bold text-[#FF4C29]">2</span>
              </div>
              <div className="lg:w-1/2 lg:text-left lg:pl-16 pl-16 lg:pl-16">
                <div className="inline-flex items-center gap-2 mb-2">
                  <Code2 size={16} className="text-[#FF4C29]" />
                  <span className="text-xs font-semibold text-[#FF4C29] uppercase tracking-wider">AI Spec</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  AI reads your code and writes a plan
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  ShipFeat clones your repo, understands the structure, and
                  generates a detailed spec — which files to touch, what to
                  change, what to add. You approve before any code is written.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pr-16 lg:text-right pl-16 lg:pl-0">
                <div className="rounded-lg border border-gray-800/60 bg-[#0B0F19] p-4 max-w-xs lg:ml-auto font-mono">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-gray-500">Analyzing codebase…</span>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-gray-400">
                    <p><span className="text-emerald-400">✓</span> Scanned 24 files</p>
                    <p><span className="text-emerald-400">✓</span> Found settings component</p>
                    <p><span className="text-emerald-400">✓</span> Identified theme context</p>
                    <p className="text-white">→ Spec: 3 files · 47 lines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 mb-20">
              <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF4C29]/10 border-2 border-[#FF4C29]/40 flex items-center justify-center z-10">
                <span className="text-sm font-bold text-[#FF4C29]">3</span>
              </div>
              <div className="lg:w-1/2 lg:text-right lg:pr-16 pl-16 lg:pl-0">
                <div className="inline-flex items-center gap-2 mb-2">
                  <GitPullRequest size={16} className="text-[#FF4C29]" />
                  <span className="text-xs font-semibold text-[#FF4C29] uppercase tracking-wider">Pull Request</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Code written, PR opened, preview live
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The AI generates production-ready code, opens a pull request
                  on your repo, and Vercel spins up a live preview. Review the
                  diff and test it on a real URL.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pl-16 pl-16 lg:pl-16">
                <div className="rounded-lg border border-gray-800/60 bg-[#0B0F19] p-4 max-w-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <GitPullRequest size={14} className="text-emerald-400" />
                    <span className="text-[11px] font-medium text-white">PR #142</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 ml-auto">Open</span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-2">feat: add dark mode toggle to settings</p>
                  <div className="flex items-center gap-3 text-[10px]">
                    <span className="text-emerald-400">+47 lines</span>
                    <span className="text-red-400">-3 lines</span>
                    <span className="text-gray-600">3 files</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-800/60">
                    <div className="flex items-center gap-1.5 text-[10px] text-blue-400">
                      <Globe size={10} />
                      <span>preview-dark-mode-abc123.vercel.app</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col lg:flex-row-reverse items-start lg:items-center gap-8 lg:gap-16">
              <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FF4C29]/10 border-2 border-[#FF4C29]/40 flex items-center justify-center z-10">
                <span className="text-sm font-bold text-[#FF4C29]">4</span>
              </div>
              <div className="lg:w-1/2 lg:text-left lg:pl-16 pl-16 lg:pl-16">
                <div className="inline-flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-[#FF4C29]" />
                  <span className="text-xs font-semibold text-[#FF4C29] uppercase tracking-wider">Shipped</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Merge and your user gets notified
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Click merge. The change goes live. ShipFeat sends your user an
                  email: &quot;Your request was shipped.&quot; From feedback to
                  deployed in minutes, not sprints.
                </p>
              </div>
              <div className="lg:w-1/2 lg:pr-16 lg:text-right pl-16 lg:pl-0">
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-4 max-w-xs lg:ml-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span className="text-[11px] font-medium text-emerald-400">Shipped!</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-purple-400">PR</span>
                      </div>
                      <span className="text-[11px] text-gray-400">Merged to main</span>
                      <CheckCircle2 size={10} className="text-emerald-400 ml-auto" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-blue-400">🚀</span>
                      </div>
                      <span className="text-[11px] text-gray-400">Deployed to production</span>
                      <CheckCircle2 size={10} className="text-emerald-400 ml-auto" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-amber-400">✉</span>
                      </div>
                      <span className="text-[11px] text-gray-400">User notified via email</span>
                      <CheckCircle2 size={10} className="text-emerald-400 ml-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for — ICP clarity */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-4">
              Who it&apos;s for
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Built for small SaaS teams
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ShipFeat works best when your app is a single-repo web product and your
              backlog is full of features your users keep asking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {/* Great at */}
            <div className="rounded-lg border border-gray-800/60 bg-[#0B0F19] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-1.5 rounded bg-emerald-500/10">
                  <Check size={14} className="text-emerald-400" />
                </div>
                <span className="text-sm font-semibold text-emerald-400">ShipFeat is great at</span>
              </div>
              <ul className="space-y-3">
                {[
                  "New pages and routes",
                  "CRUD features (model + API + UI)",
                  "UI improvements and settings",
                  "Simple integrations and webhooks",
                  "Bug fixes your users report",
                  "Adding filters, toggles, and search",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={14} className="text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not designed for */}
            <div className="rounded-lg border border-gray-800/60 bg-[#0B0F19] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-1.5 rounded bg-gray-800">
                  <X size={14} className="text-gray-500" />
                </div>
                <span className="text-sm font-semibold text-gray-500">Not designed for</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Complex architecture redesigns",
                  "Performance optimization",
                  "Mobile app development",
                  "Cross-service / microservice changes",
                  "Changes touching 10+ files",
                  "Deep domain-specific business logic",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-500">
                    <X size={14} className="text-gray-700 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 60/40 callout */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-lg border border-[#FF4C29]/20 bg-[#FF4C29]/[0.04] px-6 py-5 text-center">
              <p className="text-base font-semibold text-white mb-1">
                The 60/40 rule
              </p>
              <p className="text-sm text-gray-400">
                ShipFeat handles the 60% of requests that are straightforward — new
                pages, settings, filters, toggles — so your engineers can focus on
                the 40% that actually require their brain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1 — Widget */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-5">
                <MessageSquareText size={20} className="text-[#FF4C29]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                A widget that lives in your app
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Users submit enhancement requests without leaving your product.
                Takes 10 seconds, no account needed. You control which domains
                can submit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Code2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>One line of code to install</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Globe size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Domain allowlist for security</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <MessageSquareText size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Dark/light theme, custom labels, branding removal <span className="text-[10px] text-[#FF4C29] font-semibold ml-1">PRO</span></span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Eye size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Live preview in settings — see changes before publishing</span>
                </li>
              </ul>
            </div>

            {/* Visual — widget code snippet */}
            <div className="rounded-xl border border-gray-800/60 bg-[#0D1117] p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-gray-600 text-xs ml-2">index.html</span>
              </div>
              <pre className="text-gray-400 leading-relaxed"><code>{`<script
  src="https://shipfeat.ai/widget.js"
  data-key="your-project-key"
/>`}</code></pre>
              <div className="mt-6 pt-4 border-t border-gray-800/60">
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <CheckCircle2 size={14} />
                  <span>Widget active · 3 requests this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 — Approval gates */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual — approval flow */}
            <div className="order-2 lg:order-1 rounded-xl border border-gray-800/60 bg-[#0B0F19] p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#141B2D] border border-gray-800/40">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <MessageSquareText size={14} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">User submitted request</p>
                    <p className="text-xs text-gray-500">&quot;Add dark mode toggle to settings&quot;</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium">NEW</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#141B2D] border border-gray-800/40">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Eye size={14} className="text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">AI spec ready for review</p>
                    <p className="text-xs text-gray-500">3 files · 47 lines · 2 components</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-medium">REVIEW</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#141B2D] border border-[#FF4C29]/20">
                  <div className="w-8 h-8 rounded-full bg-[#FF4C29]/10 flex items-center justify-center">
                    <GitPullRequest size={14} className="text-[#FF4C29]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-white">PR #142 ready with live preview</p>
                    <p className="text-xs text-gray-500">preview-dark-mode.vercel.app</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">READY</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-5">
                <Shield size={20} className="text-[#FF4C29]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Nothing ships without your approval
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                You review the AI&apos;s plan before any code is written. You review
                the PR and live preview before anything merges. Two approval
                gates, full control at every step.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Approve spec before code generation</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Review PR with full diff</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Test on live preview URL before merge</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <ClipboardList size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Full audit log of every action <span className="text-[10px] text-[#FF4C29] font-semibold ml-1">PRO</span></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 — BYOK */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-5">
                <Key size={20} className="text-[#FF4C29]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Your AI, your cost, your choice
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Bring your own API key from Anthropic or OpenAI. Pick the model
                that fits your budget and quality bar. Both keys stored
                separately — switch providers without re-entering.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>API key encrypted at rest</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Switch models per project</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Test connection before saving</span>
                </li>
              </ul>
            </div>

            {/* Visual — model picker mockup */}
            <div className="rounded-xl border border-gray-800/60 bg-[#0D1117] p-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">AI Configuration</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-2">Provider</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-[#141B2D] border border-gray-800/60 text-xs text-gray-500">Anthropic</span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#FF4C29]/10 border border-[#FF4C29]/30 text-xs font-medium text-[#FF4C29]">OpenAI</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2">OpenAI API Key</p>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141B2D] border border-gray-800/60">
                    <span className="text-xs text-gray-500 font-mono">sk-••••••••••••7xKm</span>
                    <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">verified</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-2">Model</p>
                  <div className="px-3 py-2 rounded-lg bg-[#141B2D] border border-gray-800/60">
                    <span className="text-xs text-white">GPT-5.4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4 — Live preview */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual — browser preview mockup */}
            <div className="order-2 lg:order-1 rounded-xl border border-gray-800/60 bg-[#0B0F19] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#141B2D] border-b border-gray-800/60">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="flex-1 text-center text-[11px] text-gray-500 font-mono">preview-dark-mode-abc123.vercel.app</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#FF4C29]/20" />
                    <span className="text-xs font-medium text-white">Settings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-500">Dark mode</span>
                    <div className="w-8 h-4 rounded-full bg-[#FF4C29] flex items-center justify-end px-0.5">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-800/60" />
                <div className="space-y-2">
                  <div className="h-3 w-3/4 rounded bg-gray-800/40" />
                  <div className="h-3 w-1/2 rounded bg-gray-800/40" />
                  <div className="h-3 w-2/3 rounded bg-gray-800/40" />
                </div>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-medium">Preview deployment live</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-5">
                <Eye size={20} className="text-[#FF4C29]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Live preview before you merge
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Every PR gets a Vercel preview deployment. See the actual change
                running on a real URL before it hits production. No guessing, no
                surprises.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Automatic Vercel preview on every PR</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Share preview URL with your team</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Click merge when you&apos;re satisfied</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5 — Analytics dashboard */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-[#FF4C29]/10">
                  <BarChart3 size={20} className="text-[#FF4C29]" />
                </div>
                <span className="text-[10px] font-bold text-[#FF4C29] uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF4C29]/10 border border-[#FF4C29]/25">Pro</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Know what&apos;s working — and what it costs
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Track build success rates, AI spend per feature, and which users
                submit the most. Built-in analytics so you ship smarter, not
                just faster.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <TrendingUp size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Pipeline health: success rates, time-to-ship, failure breakdown</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <DollarSign size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Cost tracking: spend per feature, model comparison, token usage</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Users size={16} className="text-[#FF4C29] shrink-0" />
                  <span>Submission insights: approval rates, volume trends, top requesters</span>
                </li>
              </ul>
            </div>

            {/* Visual — analytics mockup */}
            <div className="rounded-xl border border-gray-800/60 bg-[#0D1117] p-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-5">Analytics Overview</p>

              {/* KPI row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="rounded-lg bg-[#141B2D] border border-gray-800/40 p-3">
                  <p className="text-[10px] text-gray-500 mb-1">Success Rate</p>
                  <p className="text-lg font-bold text-emerald-400">87%</p>
                  <p className="text-[9px] text-emerald-400/60">+12% vs last month</p>
                </div>
                <div className="rounded-lg bg-[#141B2D] border border-gray-800/40 p-3">
                  <p className="text-[10px] text-gray-500 mb-1">Avg Cost</p>
                  <p className="text-lg font-bold text-white">$0.42</p>
                  <p className="text-[9px] text-gray-500">per feature</p>
                </div>
                <div className="rounded-lg bg-[#141B2D] border border-gray-800/40 p-3">
                  <p className="text-[10px] text-gray-500 mb-1">Time to Ship</p>
                  <p className="text-lg font-bold text-white">4.2m</p>
                  <p className="text-[9px] text-gray-500">median</p>
                </div>
              </div>

              {/* Mini bar chart */}
              <div>
                <p className="text-[10px] text-gray-500 mb-3">Builds — Last 7 Days</p>
                <div className="flex items-end gap-1.5 h-16">
                  {[
                    { h: 60, s: 3, f: 1 },
                    { h: 45, s: 2, f: 0 },
                    { h: 75, s: 4, f: 1 },
                    { h: 90, s: 5, f: 0 },
                    { h: 55, s: 3, f: 0 },
                    { h: 100, s: 6, f: 1 },
                    { h: 70, s: 4, f: 0 },
                  ].map((d, i) => (
                    <div key={i} className="flex-1 flex flex-col gap-0.5 items-stretch" style={{ height: `${d.h}%` }}>
                      <div className="flex-1 rounded-t bg-[#FF4C29]/80" />
                      {d.f > 0 && <div className="rounded-b bg-red-400/40" style={{ height: `${(d.f / (d.s + d.f)) * 100}%`, minHeight: '2px' }} />}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[8px] text-gray-600">Mon</span>
                  <span className="text-[8px] text-gray-600">Tue</span>
                  <span className="text-[8px] text-gray-600">Wed</span>
                  <span className="text-[8px] text-gray-600">Thu</span>
                  <span className="text-[8px] text-gray-600">Fri</span>
                  <span className="text-[8px] text-gray-600">Sat</span>
                  <span className="text-[8px] text-gray-600">Sun</span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-800/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm bg-[#FF4C29]/80" />
                  <span className="text-[9px] text-gray-500">Successful</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-sm bg-red-400/40" />
                  <span className="text-[9px] text-gray-500">Failed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="waitlist" className="py-32 relative overflow-hidden">
        {/* Gradient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] rounded-full bg-[#FF4C29]/[0.07] blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-6">
            Start Today
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight leading-tight">
            Stop triaging. Start shipping.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-3 leading-relaxed">
            Your users are already telling you what to build. ShipFeat turns
            their words into working code — reviewed, previewed, and ready to
            merge.
          </p>
          <p className="text-sm text-gray-500 mb-10">
            For SaaS teams with 1–3 engineers and 100 feature requests.
          </p>
          <EarlyAccessButton
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4C29] hover:bg-[#E5421F] text-white font-semibold rounded-lg transition-all shadow-lg shadow-[#FF4C29]/25 hover:shadow-[#FF4C29]/40 text-base"
            arrowSize={18}
          />
        </div>
      </section>
    </>
  );
}
