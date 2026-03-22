import {
  Lightbulb,
  Users,
  Zap,
  Target,
  Code2,
  GitPullRequest,
} from "lucide-react";
import { EarlyAccessButton } from "@/components/EarlyAccessButton";

export default function AboutPage() {
  return (
    <>
      {/* Hero — full width, centered */}
      <section className="pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center">
          <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-6">
            About ShipFeat
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            We believe shipping should be{" "}
            <span className="text-[#FF4C29]">effortless</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ShipFeat started with a simple observation: most enhancement
            requests are straightforward — a new toggle, a copy change, an extra
            field. Yet they sit in a backlog for weeks because someone has to
            pick them up, context-switch, and write the code.
          </p>
        </div>
      </section>

      {/* The Problem — 2 column layout */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Target size={16} className="text-[#FF4C29]" />
                <span className="text-xs font-semibold text-[#FF4C29] uppercase tracking-wider">
                  The Problem
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                Great products drown in their own backlogs
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Small SaaS teams — 5 to 20 people — are stretched thin. Your
                engineers are building the core product while users keep asking
                for small improvements. You want to say yes to all of them, but
                there are only so many hours in a sprint.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Feedback tools collect the requests. Coding agents can write the
                code. But nothing bridges the two — turning a user&apos;s words
                into a reviewed, tested, deployable pull request without human
                engineering time.
              </p>
            </div>
            <div className="rounded-xl border border-gray-800/60 bg-[#0B0F19] p-8">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                Sound familiar?
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 text-sm">
                    1
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Users submit great ideas, but they sit in a spreadsheet for
                    months
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 text-sm">
                    2
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Engineers context-switch from core work to build a simple
                    toggle
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 text-sm">
                    3
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    A 15-minute feature takes 2 weeks from request to deploy
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 text-sm">
                    4
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Users stop requesting — they think you don&apos;t listen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach — 2 column reversed */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1 rounded-xl border border-gray-800/60 bg-[#0D1117] p-8">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                How ShipFeat works
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#FF4C29]/10 flex items-center justify-center">
                    <Code2 size={14} className="text-[#FF4C29]" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">
                      Widget captures the request
                    </p>
                    <p className="text-xs text-gray-500">
                      Users describe what they want in plain language
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#FF4C29]/10 flex items-center justify-center">
                    <Lightbulb size={14} className="text-[#FF4C29]" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">
                      ShipFeat reads your codebase and writes a spec
                    </p>
                    <p className="text-xs text-gray-500">
                      You review and approve before any code is generated
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-lg bg-[#FF4C29]/10 flex items-center justify-center">
                    <GitPullRequest size={14} className="text-[#FF4C29]" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">
                      Code generated, PR opened, preview live
                    </p>
                    <p className="text-xs text-gray-500">
                      Review the diff, test the preview, merge when satisfied
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <Zap size={16} className="text-[#FF4C29]" />
                <span className="text-xs font-semibold text-[#FF4C29] uppercase tracking-wider">
                  Our Approach
                </span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">
                The bridge between feedback and shipping
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                ShipFeat connects what your users ask for to what gets deployed.
                A lightweight widget lives in your app. ShipFeat reads your actual
                codebase, generates a structured spec, and — once you approve —
                writes the code, opens a PR, and spins up a live preview.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You stay in control at every step. You approve the spec before
                code is written. You review the PR and preview before anything
                merges. Two gates, zero surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-4">
              Our values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              What we care about
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-800/60 bg-gradient-to-b from-[#141B2D] to-[#0F1524] p-8">
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-6">
                <Users size={20} className="text-[#FF4C29]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Your users matter
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every feature request is a signal that someone cares about your
                product. We make it easy to act on those signals fast — before
                they churn.
              </p>
            </div>
            <div className="rounded-xl border border-gray-800/60 bg-gradient-to-b from-[#141B2D] to-[#0F1524] p-8">
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-6">
                <Lightbulb size={20} className="text-[#FF4C29]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Transparency over magic
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                You bring your own AI key. You see the spec before code is
                written. You review the PR before it merges. No black boxes, no
                surprises.
              </p>
            </div>
            <div className="rounded-xl border border-gray-800/60 bg-gradient-to-b from-[#141B2D] to-[#0F1524] p-8">
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-6">
                <Zap size={20} className="text-[#FF4C29]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Speed without compromise
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Going from request to shipped in minutes doesn&apos;t mean
                cutting corners. Every change gets a live preview and your
                explicit approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] rounded-full bg-[#FF4C29]/[0.07] blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center relative z-10">
          <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-6">
            Built by Tearless AI
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 tracking-tight">
            A small team, obsessed with shipping
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We&apos;re building the tool we wish we had — one that turns user
            feedback into deployed features without burning engineering hours.
            ShipFeat is that tool.
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
