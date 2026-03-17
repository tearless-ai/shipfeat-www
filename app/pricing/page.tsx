import {
  ArrowRight,
  Check,
  Zap,
  Infinity,
  Users,
  Github,
  Palette,
  Mail,
  Shield,

} from "lucide-react";
import { APP_URL } from "@/lib/constants";

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-4">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 text-center">
          <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            One plan. Everything included.
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            No tiers to compare. No features locked behind upgrades.
            Just start building.
          </p>
        </div>
      </section>

      {/* Pricing card */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <div className="relative rounded-2xl border border-[#FF4C29]/20 bg-gradient-to-b from-[#FF4C29]/[0.04] to-transparent overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#FF4C29]/[0.06] blur-[100px] pointer-events-none" />

            <div className="relative z-10 p-10 md:p-14">
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4C29]/10 border border-[#FF4C29]/20 mb-5">
                    <Zap size={12} className="text-[#FF4C29]" />
                    <span className="text-xs font-semibold text-[#FF4C29]">Pro</span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-bold text-white tracking-tight">$49</span>
                    <span className="text-lg text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-400">
                    25 features included · <span className="text-gray-300">$3 per additional</span>
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-3">
                  <a
                    href={`${APP_URL}/sign-up`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4C29] hover:bg-[#E5421F] text-white font-semibold rounded-lg transition-all shadow-lg shadow-[#FF4C29]/25 hover:shadow-[#FF4C29]/40 text-base"
                  >
                    Start 7-day free trial
                    <ArrowRight size={18} />
                  </a>
                  <span className="text-xs text-gray-500">
                    Credit card required · Cancel anytime
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-12" />

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                <Feature icon={Zap} text="25 features / month" highlight />
                <Feature icon={Infinity} text="Unlimited projects" />
                <Feature icon={Users} text="Unlimited team members" />
                <Feature icon={Github} text="GitHub App integration" />
                <Feature icon={Palette} text="Widget customization" />
                <Feature icon={Mail} text="Email notifications" />
                <Feature icon={Shield} text="API key encryption" />
                <Feature icon={Check} text="Live Vercel previews" />
                <Feature icon={Check} text="Build logs & history" />
              </div>
            </div>
          </div>

          {/* Below the card — how the trial works */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#141B2D] border border-gray-800/60 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-[#FF4C29]">1</span>
                </div>
                <p className="text-sm font-semibold text-white mb-1">Sign up</p>
                <p className="text-xs text-gray-500">Add your AI key and connect GitHub. Takes 5 minutes.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-[#141B2D] border border-gray-800/60 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-[#FF4C29]">2</span>
                </div>
                <p className="text-sm font-semibold text-white mb-1">Build for 7 days free</p>
                <p className="text-xs text-gray-500">10 features included in your trial. Full access to everything.</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-full bg-[#141B2D] border border-gray-800/60 flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-bold text-[#FF4C29]">3</span>
                </div>
                <p className="text-sm font-semibold text-white mb-1">Auto-converts to Pro</p>
                <p className="text-xs text-gray-500">$49/mo after trial. Cancel before day 7 and pay nothing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Got questions?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FAQItem
              q="What counts as a feature?"
              a="Counted when you generate a spec. Widget submissions are free and unlimited — you only pay when the AI plans and builds."
            />
            <FAQItem
              q="Do I need my own AI API key?"
              a="Yes. Works with Anthropic Claude and OpenAI. You bring your key, choose your model, control costs. We encrypt at rest."
            />
            <FAQItem
              q="What if I hit 25 features?"
              a="Keep going. Each additional feature is $3. No interruption, no upgrade. Your next invoice reflects the overage."
            />
            <FAQItem
              q="What if the AI writes bad code?"
              a="Nothing ships without approval. Review the spec first, then the PR with a live preview. Two gates, full control."
            />
            <FAQItem
              q="Can I cancel anytime?"
              a="Yes. Cancel before the trial ends and pay nothing. After that, cancel anytime — no contracts, no commitments."
            />
            <FAQItem
              q="What frameworks work?"
              a="Modern JS/TS codebases — Next.js, React, Vue, and similar. The AI reads your code structure and matches your patterns."
            />
            <FAQItem
              q="Need custom terms?"
              a={<>Email <a href="mailto:dinesh@tearless.ai" className="text-[#FF4C29] hover:underline">dinesh@tearless.ai</a> for volume pricing, SSO, or anything custom.</>}
            />
            <FAQItem
              q="How long is the free trial?"
              a="7 days with 10 features included. Full access to everything. Auto-converts to Pro unless you cancel."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({
  icon: Icon,
  text,
  highlight,
}: {
  icon: React.ElementType;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon
        size={16}
        className={highlight ? "text-[#FF4C29] shrink-0" : "text-emerald-400 shrink-0"}
      />
      <span className={`text-sm ${highlight ? "text-white font-medium" : "text-gray-300"}`}>
        {text}
      </span>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="group rounded-xl border border-gray-800/40 bg-[#0B0F19] hover:border-gray-700/60 transition-all duration-200 open:border-[#FF4C29]/20 open:bg-[#FF4C29]/[0.02]">
      <summary className="flex items-center justify-between gap-6 px-7 py-6 cursor-pointer list-none select-none">
        <span className="text-base font-medium text-gray-200 group-open:text-white transition-colors">{q}</span>
        <span className="shrink-0 w-7 h-7 rounded-lg bg-[#141B2D] border border-gray-800/60 flex items-center justify-center text-gray-500 group-open:bg-[#FF4C29]/10 group-open:border-[#FF4C29]/30 group-open:text-[#FF4C29] transition-all duration-200">
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-45"
            fill="none"
            viewBox="0 0 14 14"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M7 2v10M2 7h10" />
          </svg>
        </span>
      </summary>
      <div className="px-7 pb-6 -mt-1">
        <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">{a}</p>
      </div>
    </details>
  );
}
