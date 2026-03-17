export default function TermsPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-8 lg:px-12 prose-invert">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Effective Date: March 16, 2026</p>

        <div className="space-y-8 text-sm text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-base font-semibold text-white mb-2">1. Acceptance of Terms</h2>
            <p>By creating an account or subscribing to ShipFeat, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not access the service.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">2. Service Description</h2>
            <p>ShipFeat is an AI-powered software-as-a-service (SaaS) platform that turns user enhancement requests into pull requests. All features are delivered digitally via web access upon successful registration and payment.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">3. Account Access</h2>
            <p>Once subscribed, users receive immediate access to the platform. It is the user&apos;s responsibility to use the service. Access to the service constitutes delivery of the product.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">4. Subscription & Billing</h2>
            <p>Subscriptions are billed on a recurring monthly basis. By subscribing, you authorize us to charge your payment method automatically at the start of each billing cycle. Usage beyond your plan&apos;s included features will be billed as overage at the published per-feature rate.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">5. Free Trial</h2>
            <p>New users may be eligible for a 7-day free trial. A valid payment method is required to start a trial. If not cancelled before the trial period ends, your subscription will automatically convert to a paid plan.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">6. Cancellation Policy</h2>
            <p>You may cancel your subscription at any time from your account settings. Cancellations apply to the next billing cycle — you will retain access until the end of your current paid period. We do not offer prorated refunds for unused time or lack of usage.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">7. Refund Policy</h2>
            <p>All payments are non-refundable. No exceptions are made for unused accounts, forgotten cancellations, or user inactivity.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">8. Your Code & Data</h2>
            <p>ShipFeat accesses your code repositories via the GitHub App you install. We read your code solely to generate specs and code changes. We do not store your source code beyond the duration of a build session. Your AI API keys are encrypted at rest and transmitted directly to your chosen provider.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">9. Disputes & Chargebacks</h2>
            <p>Filing a chargeback without first contacting support to resolve the issue is a violation of these Terms. We reserve the right to suspend accounts or pursue collection action for fraudulent disputes.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">10. Modifications</h2>
            <p>We may update these Terms periodically. Continued use of the service after changes constitutes your acceptance.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">11. Contact</h2>
            <p>If you have questions, contact us at <a href="mailto:dinesh@tearless.ai" className="text-[#FF4C29] hover:underline">dinesh@tearless.ai</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
