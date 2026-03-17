export default function PrivacyPage() {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-8 lg:px-12 prose-invert">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 16, 2026</p>

        <div className="space-y-8 text-sm text-gray-400 leading-relaxed">
          <p>ShipFeat (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated by Tearless AI, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform at shipfeat.ai.</p>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">What Information We Collect</h2>
            <p>We collect only the information necessary to provide and improve our services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Email address and name (for account creation and communication)</li>
              <li>Organization name (for multi-tenant workspace setup)</li>
              <li>AI API keys you provide (encrypted at rest, used solely for your builds)</li>
              <li>GitHub repository access via the GitHub App you install</li>
              <li>Enhancement requests submitted by your end users via the widget</li>
            </ul>
            <p className="mt-2">We do not collect unnecessary data, nor do we track your activity across the web.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">How We Use Your Information</h2>
            <p>Your data is used solely to provide ShipFeat&apos;s core functionality:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>To read your codebase and generate feature specs and code</li>
              <li>To open pull requests on your GitHub repositories</li>
              <li>To send you email notifications about request status changes</li>
              <li>To manage your account, billing, and subscription</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Third-Party Services</h2>
            <p>To power key features, we work with the following services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-gray-300">Anthropic & OpenAI</strong> — for AI-powered spec and code generation (using your API key)</li>
              <li><strong className="text-gray-300">PostgreSQL</strong> — for data storage and database infrastructure</li>
              <li><strong className="text-gray-300">Clerk</strong> — for secure authentication and organization management</li>
              <li><strong className="text-gray-300">Stripe</strong> — for payment processing</li>
              <li><strong className="text-gray-300">GitHub API</strong> — for repository access and pull request creation</li>
              <li><strong className="text-gray-300">Resend</strong> — for transactional email delivery</li>
            </ul>
            <p className="mt-2">These providers process data solely on our behalf under their respective data protection agreements.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Data Sharing</h2>
            <p>We do not share or sell your data with advertisers, partners, or third parties outside the services listed above.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Your Code</h2>
            <p>ShipFeat reads your source code only during spec generation and build sessions. We do not permanently store your source code. Generated specs and build logs are stored in your account for your reference and can be deleted at any time.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Cookies & Tracking</h2>
            <p>We use only essential cookies required for authentication. We do not use third-party tracking technologies or analytics cookies.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Data Deletion</h2>
            <p>You can delete your projects, requests, and associated data from within your account at any time. To delete your entire account, contact us and we will remove all your data within 30 days.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Children&apos;s Privacy</h2>
            <p>ShipFeat is intended for users 16 years and older. We do not knowingly collect personal information from children under 16. If we learn we have collected such information, we will delete it promptly.</p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white mb-2">Contact Us</h2>
            <p>If you have questions about your privacy or this policy, reach out to <a href="mailto:dinesh@tearless.ai" className="text-[#FF4C29] hover:underline">dinesh@tearless.ai</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
