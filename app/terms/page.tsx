import { FileText } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      num: "1",
      title: "Acceptance of Terms",
      content: "By creating an account or subscribing to ShipFeat, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not access the service.",
    },
    {
      num: "2",
      title: "Service Description",
      content: "ShipFeat is an AI-powered software-as-a-service (SaaS) platform that turns user enhancement requests into pull requests. All features are delivered digitally via web access upon successful registration and payment.",
    },
    {
      num: "3",
      title: "Account Access",
      content: "Once subscribed, users receive immediate access to the platform. It is the user's responsibility to use the service. Access to the service constitutes delivery of the product.",
    },
    {
      num: "4",
      title: "Subscription & Billing",
      content: "Subscriptions are billed on a recurring monthly basis. By subscribing, you authorize us to charge your payment method automatically at the start of each billing cycle. Usage beyond your plan's included features will be billed as overage at the published per-feature rate.",
    },
    {
      num: "5",
      title: "Free Trial",
      content: "New users may be eligible for a 7-day free trial. A valid payment method is required to start a trial. If not cancelled before the trial period ends, your subscription will automatically convert to a paid plan.",
    },
    {
      num: "6",
      title: "Cancellation Policy",
      content: "You may cancel your subscription at any time from your account settings. Cancellations apply to the next billing cycle — you will retain access until the end of your current paid period. We do not offer prorated refunds for unused time or lack of usage.",
    },
    {
      num: "7",
      title: "Refund Policy",
      content: "All payments are non-refundable. No exceptions are made for unused accounts, forgotten cancellations, or user inactivity.",
      highlight: true,
    },
    {
      num: "8",
      title: "Your Code & Data",
      content: "ShipFeat accesses your code repositories via the GitHub App you install. We read your code solely to generate specs and code changes. We do not store your source code beyond the duration of a build session. Your AI API keys are encrypted at rest and transmitted directly to your chosen provider.",
    },
    {
      num: "9",
      title: "Disputes & Chargebacks",
      content: "Filing a chargeback without first contacting support to resolve the issue is a violation of these Terms. We reserve the right to suspend accounts or pursue collection action for fraudulent disputes.",
    },
    {
      num: "10",
      title: "Modifications",
      content: "We may update these Terms periodically. Continued use of the service after changes constitutes your acceptance.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4C29]/10 border border-[#FF4C29]/20 mb-6">
            <FileText className="w-4 h-4 text-[#FF4C29]" />
            <span className="text-xs font-medium text-[#FF4C29] tracking-wide uppercase">Terms of Service</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
          <p className="text-gray-400">Effective Date: March 16, 2026</p>
        </div>

        <div className="space-y-4">
          {sections.map((s) => (
            <div
              key={s.num}
              className={`rounded-xl border p-6 transition-colors ${
                s.highlight
                  ? "border-amber-900/40 bg-amber-950/20"
                  : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-sm font-bold text-gray-400">
                  {s.num}
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2">{s.title}</h2>
                  <p className="text-[15px] text-gray-400 leading-relaxed">{s.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
          <h2 className="text-lg font-semibold text-white mb-2">Questions?</h2>
          <p className="text-gray-400">Contact us at <a href="mailto:dinesh@tearless.ai" className="text-[#FF4C29] hover:underline font-medium">dinesh@tearless.ai</a></p>
        </div>
      </div>
    </section>
  );
}
