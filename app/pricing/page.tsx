import {
  ArrowRight,
  Check,
  Zap,
  Building2,
  Crown,
} from "lucide-react";
import { APP_URL } from "@/lib/constants";

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  href,
  highlighted,
  icon: Icon,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
  icon: React.ElementType;
}) {
  return (
    <div
      className={`rounded-xl border p-8 flex flex-col ${
        highlighted
          ? "border-[#FF4C29]/50 bg-[#FF4C29]/5 ring-1 ring-[#FF4C29]/20"
          : "border-gray-800/60 bg-[#141B2D]"
      }`}
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className={`p-2 rounded-lg ${
            highlighted ? "bg-[#FF4C29]/10" : "bg-gray-800"
          }`}
        >
          <Icon
            size={18}
            className={highlighted ? "text-[#FF4C29]" : "text-gray-400"}
          />
        </div>
        <h3 className="text-lg font-bold text-white">{name}</h3>
      </div>
      <div className="mb-4">
        <span className="text-4xl font-bold text-white">{price}</span>
        {period && <span className="text-gray-400 ml-1">{period}</span>}
      </div>
      <p className="text-sm text-gray-400 mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
          highlighted
            ? "bg-[#FF4C29] hover:bg-[#E5421F] text-white shadow-lg shadow-[#FF4C29]/20"
            : "bg-gray-800 hover:bg-gray-700 text-white"
        }`}
      >
        {cta}
        <ArrowRight size={14} />
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-gray-400 max-w-lg mx-auto">
              Start free. Scale when you need to. No surprise bills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              icon={Zap}
              name="Beta"
              price="Free"
              description="Everything you need to try ShipFeat. No credit card required."
              features={[
                "10 enhancement requests / month",
                "1 project",
                "Bring your own AI key",
                "GitHub App integration",
                "Widget + allowed domains",
                "Email support",
              ]}
              cta="Start free"
              href={`${APP_URL}/sign-up`}
            />
            <PricingCard
              icon={Building2}
              name="Team"
              price="$49"
              period="/mo"
              description="For growing teams shipping enhancements at scale."
              features={[
                "Unlimited enhancement requests",
                "Unlimited projects",
                "Bring your own AI key",
                "Priority builds",
                "Widget customization",
                "Team members & roles",
                "Priority support",
              ]}
              cta="Start free trial"
              href={`${APP_URL}/sign-up`}
              highlighted
            />
            <PricingCard
              icon={Crown}
              name="Enterprise"
              price="Custom"
              description="For larger teams with compliance and security needs."
              features={[
                "Everything in Team",
                "SSO / SAML",
                "Audit logs",
                "Custom AI model routing",
                "Dedicated infrastructure",
                "SLA guarantee",
                "Onboarding & training",
              ]}
              cta="Contact us"
              href="mailto:dinesh@tearless.ai?subject=ShipFeat Enterprise"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-2xl mx-auto px-8 lg:px-12">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Frequently asked
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                Do I need to provide my own AI API key?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Yes. ShipFeat works with Anthropic Claude and OpenAI. You bring
                your own key and choose your model. This means you control costs
                and quality.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                What happens if the AI writes bad code?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Nothing ships without your approval. You review the spec before
                code is written, and review the PR (with a live preview) before
                merging. Two gates, full control.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                What frameworks are supported?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                ShipFeat works best with modern JavaScript/TypeScript codebases
                — Next.js, React, Vue, and similar. The AI reads your code
                structure to generate changes.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1.5">
                Can I cancel anytime?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Yes. No contracts, no commitments. Cancel from your dashboard
                and you won&apos;t be charged again.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
