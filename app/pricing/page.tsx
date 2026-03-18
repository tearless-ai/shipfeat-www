import {
  ArrowRight,
  Check,
  X,
  Zap,
  Users,
  Github,
  Palette,
  Mail,
  Shield,
  Clock,
  History,
  Building2,
} from "lucide-react";
import { EarlyAccessButton } from "@/components/EarlyAccessButton";

// ──────────────────────────────────────────────
// Tier data
// ──────────────────────────────────────────────

type TierFeature = {
  label: string;
  starter: React.ReactNode;
  pro: React.ReactNode;
  team: React.ReactNode;
};

const features: TierFeature[] = [
  {
    label: "Features / month",
    starter: "10",
    pro: "50",
    team: "Custom",
  },
  {
    label: "Projects",
    starter: "1",
    pro: "3",
    team: "Custom",
  },
  {
    label: "Seats",
    starter: "1",
    pro: "5",
    team: "Custom",
  },
  {
    label: "Widget customization",
    starter: "Default only",
    pro: "Full (colors, text, position)",
    team: "Custom",
  },
  {
    label: "Build history",
    starter: "Last 10",
    pro: "Unlimited",
    team: "Unlimited",
  },
  {
    label: "Audit log",
    starter: false,
    pro: true,
    team: true,
  },
  {
    label: "Email notifications",
    starter: false,
    pro: true,
    team: true,
  },
  {
    label: "Priority support",
    starter: false,
    pro: true,
    team: true,
  },
  {
    label: "GitHub App",
    starter: true,
    pro: true,
    team: true,
  },
  {
    label: "API key encryption",
    starter: true,
    pro: true,
    team: true,
  },
  {
    label: "Live Vercel previews",
    starter: true,
    pro: true,
    team: true,
  },
];

// ──────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────

function FeatureValue({ value }: { value: React.ReactNode }) {
  if (value === true) {
    return <Check size={16} className="text-teal-400 mx-auto" aria-label="Included" />;
  }
  if (value === false) {
    return <X size={16} className="text-gray-700 mx-auto" aria-label="Not included" />;
  }
  return <span className="text-sm text-gray-300">{value}</span>;
}

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <details className="group rounded-lg border border-gray-800/40 bg-[#0B0F19] hover:border-gray-700/60 transition-all duration-200 open:border-[#FF4C29]/20 open:bg-[#FF4C29]/[0.02]">
      <summary className="flex items-center justify-between gap-6 px-7 py-6 cursor-pointer list-none select-none">
        <span className="text-base font-medium text-gray-200 group-open:text-white transition-colors">
          {q}
        </span>
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

// ──────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Simple pricing. Start free.
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Try Pro free for 7 days. Pick the plan that fits after.
            No lock-in, cancel anytime.
          </p>
        </div>
      </section>

      {/* Trial callout */}
      <section className="pt-10 pb-2">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <div className="rounded-lg border border-[#FF4C29]/20 bg-[#FF4C29]/[0.04] px-6 py-5 text-center">
            <p className="text-base font-semibold text-white mb-1">
              Start with a 7-day free trial
            </p>
            <p className="text-sm text-gray-400">
              Full Pro features · 5 builds included · Card required
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Auto-converts to Pro ($99/mo) after 7 days. Downgrade or cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            {/* Starter */}
            <div className="rounded-lg border border-gray-800 bg-[#141B2D] p-8 flex flex-col h-full">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-800 border border-gray-700 mb-4">
                  <Zap size={12} className="text-gray-400" />
                  <span className="text-xs font-semibold text-gray-400">Starter</span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-5xl font-bold text-white tracking-tight">$49</span>
                  <span className="text-lg text-gray-500">/mo</span>
                </div>
                <p className="text-sm text-gray-400">For solo builders shipping fast.</p>
              </div>

              <EarlyAccessButton
                className="flex items-center justify-center gap-2 px-5 py-3 bg-transparent hover:bg-[#1E293B] text-gray-300 hover:text-white text-sm font-semibold rounded-lg border border-gray-700 hover:border-gray-600 transition-colors mb-8"
                arrowSize={15}
              />

              <div className="space-y-3 flex-1">
                <FeatureRow icon={Zap} text="10 features / month" />
                <FeatureRow icon={Github} text="1 project" />
                <FeatureRow icon={Users} text="1 seat" />
                <FeatureRow icon={Palette} text="Default widget only" />
                <FeatureRow icon={History} text="Last 10 builds" />
                <FeatureRow icon={Github} text="GitHub App" check />
                <FeatureRow icon={Shield} text="API key encryption" check />
                <FeatureRow icon={Clock} text="Live Vercel previews" check />
              </div>
            </div>

            {/* Pro — emphasized */}
            <div className="relative rounded-lg border border-[#FF4C29]/40 bg-[#141B2D] p-8 flex flex-col h-full shadow-lg shadow-[#FF4C29]/10 ring-1 ring-[#FF4C29]/20">
              {/* Glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full bg-[#FF4C29]/[0.08] blur-[60px] pointer-events-none" />

              {/* Most Popular badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF4C29] text-white text-xs font-bold tracking-wide shadow-md">
                  ★ Most Popular
                </span>
              </div>

              <div className="mb-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF4C29]/10 border border-[#FF4C29]/30 mb-4">
                  <Zap size={12} className="text-[#FF4C29]" />
                  <span className="text-xs font-semibold text-[#FF4C29]">Pro</span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-5xl font-bold text-white tracking-tight">$99</span>
                  <span className="text-lg text-gray-500">/mo</span>
                </div>
                <p className="text-sm text-gray-400">For growing teams shipping more.</p>
              </div>

              <EarlyAccessButton
                className="relative z-10 flex items-center justify-center gap-2 px-5 py-3 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-[#FF4C29]/25 hover:shadow-[#FF4C29]/40 mb-8"
                arrowSize={15}
              />

              <div className="space-y-3 flex-1 relative z-10">
                <FeatureRow icon={Zap} text="50 features / month" highlight />
                <FeatureRow icon={Github} text="3 projects" highlight />
                <FeatureRow icon={Users} text="5 seats" highlight />
                <FeatureRow icon={Palette} text="Full widget customization" highlight />
                <FeatureRow icon={History} text="Unlimited build history" highlight />
                <FeatureRow icon={Github} text="GitHub App" check />
                <FeatureRow icon={Shield} text="API key encryption" check />
                <FeatureRow icon={Clock} text="Live Vercel previews" check />
                <FeatureRow icon={Clock} text="Audit log" check />
                <FeatureRow icon={Mail} text="Email notifications" check />
                <FeatureRow icon={Users} text="Priority support" check />
              </div>
            </div>

            {/* Team */}
            <div className="rounded-lg border border-gray-800 bg-[#141B2D] p-8 flex flex-col h-full">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-800 border border-gray-700 mb-4">
                  <Building2 size={12} className="text-gray-400" />
                  <span className="text-xs font-semibold text-gray-400">Team</span>
                </div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-4xl font-bold text-white tracking-tight leading-tight">Contact Us</span>
                </div>
                <p className="text-sm text-gray-400">For orgs with custom needs.</p>
              </div>

              <a
                href="mailto:dinesh@tearless.ai"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-transparent hover:bg-[#1E293B] text-gray-300 hover:text-white text-sm font-semibold rounded-lg border border-gray-700 hover:border-gray-600 transition-colors mb-8"
              >
                Contact Us
                <ArrowRight size={15} />
              </a>

              <div className="space-y-3 flex-1">
                <FeatureRow icon={Zap} text="Custom features / month" />
                <FeatureRow icon={Github} text="Custom projects" />
                <FeatureRow icon={Users} text="Custom seats" />
                <FeatureRow icon={Palette} text="Custom widget" />
                <FeatureRow icon={History} text="Unlimited build history" check />
                <FeatureRow icon={Github} text="GitHub App" check />
                <FeatureRow icon={Shield} text="API key encryption" check />
                <FeatureRow icon={Clock} text="Live Vercel previews" check />
                <FeatureRow icon={Clock} text="Audit log" check />
                <FeatureRow icon={Mail} text="Email notifications" check />
                <FeatureRow icon={Users} text="Priority support" check />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table (desktop only) */}
      <section className="pb-20 hidden md:block">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">Compare plans</h2>
          <div className="rounded-lg border border-gray-800 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-[#0B0F19]">
                  <th className="text-left px-6 py-4 font-medium text-gray-500 w-1/2">Feature</th>
                  <th className="px-4 py-4 font-semibold text-gray-400 text-center">Starter</th>
                  <th className="px-4 py-4 font-semibold text-[#FF4C29] text-center">Pro</th>
                  <th className="px-4 py-4 font-semibold text-gray-400 text-center">Team</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-gray-800/50 ${i % 2 === 0 ? "bg-[#0B0F19]" : "bg-[#141B2D]/40"}`}
                  >
                    <td className="px-6 py-3.5 text-gray-300">{row.label}</td>
                    <td className="px-4 py-3.5 text-center">
                      <FeatureValue value={row.starter} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <FeatureValue value={row.pro} />
                    </td>
                    <td className="px-4 py-3.5 text-center">
                      <FeatureValue value={row.team} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How the trial works */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">
          <h2 className="text-xl font-semibold text-white mb-10 text-center">How the trial works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#141B2D] border border-gray-800/60 flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold text-[#FF4C29]">1</span>
              </div>
              <p className="text-sm font-semibold text-white mb-1">Sign up</p>
              <p className="text-xs text-gray-500">
                Add your AI key and connect GitHub. Card required. Takes 5 minutes.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#141B2D] border border-gray-800/60 flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold text-[#FF4C29]">2</span>
              </div>
              <p className="text-sm font-semibold text-white mb-1">Build for 7 days free</p>
              <p className="text-xs text-gray-500">
                5 features included in your trial. Full Pro access.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#141B2D] border border-gray-800/60 flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold text-[#FF4C29]">3</span>
              </div>
              <p className="text-sm font-semibold text-white mb-1">Auto-converts to Pro</p>
              <p className="text-xs text-gray-500">
                $99/mo after trial. Downgrade to Starter ($49/mo) or cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
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
              a="A feature counts when you approve the AI-generated spec and code generation begins. Submitting requests and reviewing specs are always free."
            />
            <FAQItem
              q="Do I need my own AI API key?"
              a="Yes. Works with Anthropic Claude and OpenAI. You bring your key, choose your model, control costs. We encrypt at rest."
            />
            <FAQItem
              q="What happens when I hit my limit?"
              a="You'll see an upgrade prompt. Move to the next tier for more features, or wait until next month resets your count."
            />
            <FAQItem
              q="What if the AI writes bad code?"
              a="Nothing ships without approval. Review the spec first, then the PR with a live preview. Two gates, full control."
            />
            <FAQItem
              q="Can I cancel anytime?"
              a="Yes. Cancel or downgrade before the trial ends and you won't be charged for Pro. After that, cancel anytime — no contracts, no commitments."
            />
            <FAQItem
              q="What frameworks work?"
              a="Modern JS/TS codebases — Next.js, React, Vue, and similar. The AI reads your code structure and matches your patterns."
            />
            <FAQItem
              q="Need custom terms?"
              a={
                <>
                  Email{" "}
                  <a href="mailto:dinesh@tearless.ai" className="text-[#FF4C29] hover:underline">
                    dinesh@tearless.ai
                  </a>{" "}
                  for volume pricing, SSO, or anything custom.
                </>
              }
            />
            <FAQItem
              q="How long is the free trial?"
              a="7 days with 5 features included. Full Pro access. Card required upfront. Auto-converts to Pro at $99/mo unless you cancel or downgrade."
            />
          </div>
        </div>
      </section>
    </>
  );
}

// ──────────────────────────────────────────────
// Helper: feature row in tier cards
// ──────────────────────────────────────────────

function FeatureRow({
  icon: Icon,
  text,
  check,
  highlight,
}: {
  icon: React.ElementType;
  text: string;
  check?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      {check ? (
        <Check size={15} className="text-teal-400 shrink-0" />
      ) : (
        <Icon
          size={15}
          className={highlight ? "text-[#FF4C29] shrink-0" : "text-gray-600 shrink-0"}
        />
      )}
      <span className={`text-sm ${highlight ? "text-white font-medium" : "text-gray-400"}`}>
        {text}
      </span>
    </div>
  );
}
