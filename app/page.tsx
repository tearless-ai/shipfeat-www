import {
  Rocket,
  ArrowRight,
  MessageSquareText,
  Sparkles,
  GitPullRequest,
  Eye,
  CheckCircle2,
  Shield,
  Zap,
  Clock,
  DollarSign,
  Terminal,
} from "lucide-react";
import { HowItWorks } from "@/components/landing/HowItWorks";

const APP_URL = "https://dev.shipfeat.ai";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-gray-800 bg-[#141B2D] p-6 hover:border-gray-700 transition-colors">
      <div className="p-2 rounded-lg bg-[#FF4C29]/10 w-fit mb-4">
        <Icon size={20} className="text-[#FF4C29]" />
      </div>
      <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="flex items-center gap-2">
          <Rocket className="text-[#FF4C29]" size={22} />
          <span className="font-bold text-lg tracking-tight text-white">
            ShipFeat
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`${APP_URL}/sign-in`}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href={`${APP_URL}/sign-up`}
            className="px-4 py-2 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pt-20 pb-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4C29]/10 border border-[#FF4C29]/20 text-[#FF4C29] text-xs font-medium">
              <Zap size={12} />
              Now with Vercel preview deployments
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Your users ask.
              <br />
              <span className="text-[#FF4C29]">AI ships.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Drop a widget in your app. Users submit enhancement requests. AI
              reads your codebase, writes the code, opens a PR with a live
              preview. You just approve.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href={`${APP_URL}/sign-up`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#FF4C29]/20"
              >
                Start for free
                <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                See how it works ↓
              </a>
            </div>
            <p className="text-xs text-gray-600">
              Free during beta · No credit card required
            </p>
          </div>
        </section>

        {/* How it works — auto-advancing carousel */}
        <HowItWorks />

        {/* Stats */}
        <section className="px-6 py-16 border-y border-gray-800">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="< 1h" label="Avg turnaround time" />
            <Stat value="$150" label="Saved per enhancement" />
            <Stat value="3 min" label="Widget to PR" />
            <Stat value="0" label="Engineers needed" />
          </div>
        </section>

        {/* Features grid */}
        <section id="features" className="px-6 py-20 bg-[#141B2D]/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">
                Built for SaaS teams who move fast
              </h2>
              <p className="text-gray-400">
                Everything you need to close the loop between user feedback and
                shipped features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FeatureCard
                icon={MessageSquareText}
                title="Embeddable Widget"
                description="A lightweight, shadow DOM-isolated widget that works on any site. Dark mode, mobile responsive, under 13KB."
              />
              <FeatureCard
                icon={Sparkles}
                title="AI Spec Engine"
                description="Reads your entire codebase and generates a structured change spec with file-level granularity and acceptance criteria."
              />
              <FeatureCard
                icon={Terminal}
                title="Live Build Terminal"
                description="Watch the AI work in real-time. 8-stage progress from branch creation to PR — it's like watching an engineer code."
              />
              <FeatureCard
                icon={Eye}
                title="Vercel Previews"
                description="Every PR gets a live preview deployment. See the change running before you merge. Works with Vercel out of the box."
              />
              <FeatureCard
                icon={GitPullRequest}
                title="GitHub Native"
                description="GitHub App integration with granular repo-level permissions. PRs come from ShipFeat, not a random PAT."
              />
              <FeatureCard
                icon={Shield}
                title="Origin Validation"
                description="Widget requests are validated against your allowed domains. No one can spam your project from an unauthorized site."
              />
              <FeatureCard
                icon={CheckCircle2}
                title="Two Approval Gates"
                description="Gate 1: review the AI's plan before any code. Gate 2: review the PR + live preview before merging. You're always in control."
              />
              <FeatureCard
                icon={Clock}
                title="Value Dashboard"
                description="Track shipped enhancements, turnaround time, and estimated cost savings. Know exactly how much value ShipFeat delivers."
              />
              <FeatureCard
                icon={DollarSign}
                title="Bring Your Own AI"
                description="Works with Anthropic Claude and OpenAI. Use your own API key. Pick the model — from fast Haiku to powerful Opus."
              />
            </div>
          </div>
        </section>

        {/* Target audience */}
        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-3">
              Perfect for SMB SaaS teams
            </h2>
            <p className="text-gray-400 mb-12 max-w-lg mx-auto">
              If your backlog is longer than your sprint capacity and your users
              keep asking for small improvements — ShipFeat is for you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="rounded-lg border border-gray-800 bg-[#141B2D] p-6">
                <p className="text-2xl mb-3">🚀</p>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Startups (5-20 people)
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Your 3 engineers are building the core product. ShipFeat
                  handles the UI tweaks, alignment fixes, and small improvements
                  your users keep asking for.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-[#141B2D] p-6">
                <p className="text-2xl mb-3">⚡</p>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Modern Codebases
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Next.js, React, Vue — if your codebase is modern and
                  well-structured, ShipFeat&apos;s AI will understand it and
                  make the right changes.
                </p>
              </div>
              <div className="rounded-lg border border-gray-800 bg-[#141B2D] p-6">
                <p className="text-2xl mb-3">💰</p>
                <h3 className="text-sm font-semibold text-white mb-2">
                  Budget-Conscious
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  At ~$150/hr, a developer spends 3+ hours on a small
                  enhancement. ShipFeat does it in minutes for the cost of an
                  API call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="max-w-2xl mx-auto text-center rounded-lg border border-[#FF4C29]/30 bg-[#FF4C29]/5 p-12">
            <Rocket size={32} className="text-[#FF4C29] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to ship faster?
            </h2>
            <p className="text-gray-400 mb-8">
              Set up in 5 minutes. First 10 enhancements free.
            </p>
            <a
              href={`${APP_URL}/sign-up`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF4C29] hover:bg-[#E5421F] text-white font-semibold rounded-lg transition-colors shadow-lg shadow-[#FF4C29]/20"
            >
              Get started
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Rocket size={16} className="text-[#FF4C29]" />
            <span className="text-sm font-medium">ShipFeat</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a href="/pricing" className="hover:text-gray-400 transition-colors">Pricing</a>
            <span>© 2026 Tearless AI · Built with 🧡</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
