export default function FulfillmentPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-8 lg:px-12 prose-invert">
        <h1 className="text-3xl font-bold text-white mb-2">Fulfillment Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 16, 2026</p>

        <div className="space-y-8 text-sm text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-white mb-2">Service Delivery</h2>
            <p>Immediately after a successful payment, customers receive instant access to all ShipFeat features through their account dashboard and receive a confirmation email. No physical goods are shipped. ShipFeat is a fully digital service delivered via web access.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Subscription Billing</h2>
            <p>The Pro plan costs $49 USD per month and includes 25 features. Additional features beyond the included amount are billed at $3 per feature. The subscription renews automatically until cancelled. Charges appear on statements as SHIPFEAT or TEARLESS AI.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Free Trial</h2>
            <p>New users may start with a 7-day free trial that includes 10 features. A valid payment method is required. If not cancelled before the trial ends, the subscription automatically converts to the paid Pro plan at $49/month.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Cancellation</h2>
            <p>You may cancel at any time from the settings section of your account. Your access remains active until the end of the current billing period. No further payments will be taken after cancellation.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Refunds</h2>
            <p>All payments are non-refundable. If you have any issues, please reach out to <a href="mailto:dinesh@tearless.ai" className="text-[#FF4C29] hover:underline">dinesh@tearless.ai</a>.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Questions</h2>
            <p>Contact us at <a href="mailto:dinesh@tearless.ai" className="text-[#FF4C29] hover:underline">dinesh@tearless.ai</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
