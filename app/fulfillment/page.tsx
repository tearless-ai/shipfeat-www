import { Package } from "lucide-react";

export default function FulfillmentPage() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4C29]/10 border border-[#FF4C29]/20 mb-6">
            <Package className="w-4 h-4 text-[#FF4C29]" />
            <span className="text-xs font-medium text-[#FF4C29] tracking-wide uppercase">Fulfillment Policy</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Fulfillment Policy</h1>
          <p className="text-gray-400">Last updated: March 16, 2026</p>
        </div>

        <div className="space-y-6">
          {/* Hero card */}
          <div className="rounded-xl border border-[#FF4C29]/20 bg-[#FF4C29]/5 p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Service Delivery</h2>
            <p className="text-[15px] text-gray-300 leading-relaxed">
              Immediately after a successful payment, customers receive <strong className="text-white">instant access</strong> to all ShipFeat features through their account dashboard and receive a confirmation email. No physical goods are shipped. ShipFeat is a fully digital service delivered via web access.
            </p>
          </div>

          {/* Pricing card */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Subscription Billing</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="rounded-lg bg-gray-800/60 p-4 text-center">
                <p className="text-2xl font-bold text-white">$49</p>
                <p className="text-sm text-gray-400 mt-1">per month</p>
              </div>
              <div className="rounded-lg bg-gray-800/60 p-4 text-center">
                <p className="text-2xl font-bold text-white">25</p>
                <p className="text-sm text-gray-400 mt-1">features included</p>
              </div>
              <div className="rounded-lg bg-gray-800/60 p-4 text-center">
                <p className="text-2xl font-bold text-white">$3</p>
                <p className="text-sm text-gray-400 mt-1">per overage feature</p>
              </div>
            </div>
            <p className="text-[15px] text-gray-400 leading-relaxed">
              The subscription renews automatically until cancelled. Charges appear on statements as <span className="text-gray-300 font-medium">SHIPFEAT</span> or <span className="text-gray-300 font-medium">TEARLESS AI</span>.
            </p>
          </div>

          {/* Trial card */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Free Trial</h2>
            <div className="flex gap-6 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-gray-300">7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-gray-300">3 features</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-gray-300">Payment method required</span>
              </div>
            </div>
            <p className="text-[15px] text-gray-400 leading-relaxed">
              If not cancelled before the trial ends, the subscription automatically converts to the paid Pro plan at $49/month.
            </p>
          </div>

          {/* Cancellation & Refunds */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Cancellation</h2>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                You may cancel at any time from the settings section of your account. Your access remains active until the end of the current billing period. No further payments will be taken after cancellation.
              </p>
            </div>

            <div className="rounded-xl border border-amber-900/40 bg-amber-950/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Refunds</h2>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                All payments are non-refundable. If you have any issues, please reach out to <a href="mailto:support@shipfeat.ai" className="text-[#FF4C29] hover:underline font-medium">support@shipfeat.ai</a>.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
            <h2 className="text-lg font-semibold text-white mb-2">Questions?</h2>
            <p className="text-gray-400">Contact us at <a href="mailto:support@shipfeat.ai" className="text-[#FF4C29] hover:underline font-medium">support@shipfeat.ai</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
