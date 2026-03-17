import { ArrowRight, Lightbulb, Users, Zap } from "lucide-react";
import { APP_URL } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            We believe shipping should be{" "}
            <span className="text-[#FF4C29]">effortless</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            ShipFeat started with a simple observation: most enhancement
            requests are straightforward — a new toggle, a copy change, an extra
            field. Yet they still sit in a backlog for weeks because someone has
            to pick them up, context-switch, and write the code.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto px-8 lg:px-12 space-y-8">
          <h2 className="text-2xl font-bold text-white">The problem</h2>
          <p className="text-gray-400 leading-relaxed">
            Small SaaS teams — 5 to 20 people — are stretched thin. Your
            engineers are building the core product while users keep asking for
            small improvements. You want to say yes to all of them, but there
            are only so many hours in a sprint.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Feedback tools collect the requests. Coding agents can write the
            code. But nothing bridges the two — turning a user&apos;s words into
            a reviewed, tested, deployable pull request without human
            engineering time.
          </p>
          <h2 className="text-2xl font-bold text-white pt-4">Our approach</h2>
          <p className="text-gray-400 leading-relaxed">
            ShipFeat is that bridge. A lightweight widget lives in your app.
            Users describe what they want in plain language. The AI reads your
            actual codebase, generates a structured spec, and — once you
            approve — writes the code, opens a PR, and spins up a live preview.
          </p>
          <p className="text-gray-400 leading-relaxed">
            You stay in control at every step. You approve the spec before code
            is written. You review the PR and preview before anything merges.
            Two gates, zero surprises.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            What we care about
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-800/60 bg-gradient-to-b from-[#141B2D] to-[#0F1524] p-7">
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-5">
                <Users size={20} className="text-[#FF4C29]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Your users matter
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every feature request is a signal that someone cares about your
                product. We make it easy to act on those signals fast.
              </p>
            </div>
            <div className="rounded-xl border border-gray-800/60 bg-gradient-to-b from-[#141B2D] to-[#0F1524] p-7">
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-5">
                <Lightbulb size={20} className="text-[#FF4C29]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                Transparency over magic
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                You bring your own AI key. You see the spec before code is
                written. You review the PR before it merges. No black boxes.
              </p>
            </div>
            <div className="rounded-xl border border-gray-800/60 bg-gradient-to-b from-[#141B2D] to-[#0F1524] p-7">
              <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 w-fit mb-5">
                <Zap size={20} className="text-[#FF4C29]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
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

      {/* Team */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto px-8 lg:px-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Built by Tearless AI
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            We&apos;re a small team obsessed with making software teams more
            productive. ShipFeat is our answer to the question: what if your
            users could ship their own feature requests?
          </p>
          <a
            href={`${APP_URL}/sign-up`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#FF4C29]/20"
          >
            Get started free
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
