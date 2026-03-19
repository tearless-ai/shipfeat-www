import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF4C29]/10 border border-[#FF4C29]/20 mb-6">
            <Shield className="w-4 h-4 text-[#FF4C29]" />
            <span className="text-xs font-medium text-[#FF4C29] tracking-wide uppercase">Privacy Policy</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Your Data, Your Control</h1>
          <p className="text-gray-400">Last updated: March 16, 2026</p>
        </div>

        <div className="space-y-10 text-[15px] text-gray-400 leading-relaxed">
          <p className="text-base text-gray-300">ShipFeat (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated by Tearless AI, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform at shipfeat.ai.</p>

          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-lg font-semibold text-white mb-3">What Information We Collect</h2>
            <p className="mb-3">We collect only the information necessary to provide and improve our services:</p>
            <ul className="space-y-2">
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>Email address and name (for account creation and communication)</span></li>
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>Organization name (for multi-tenant workspace setup)</span></li>
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>AI API keys you provide (encrypted at rest, used solely for your builds)</span></li>
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>GitHub repository access via the GitHub App you install</span></li>
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>Enhancement requests submitted by your end users via the widget</span></li>
            </ul>
            <p className="mt-3 text-gray-500 text-sm">We do not collect unnecessary data, nor do we track your activity across the web.</p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-lg font-semibold text-white mb-3">How We Use Your Information</h2>
            <p className="mb-3">Your data is used solely to provide ShipFeat&apos;s core functionality:</p>
            <ul className="space-y-2">
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>To read your codebase and generate feature specs and code</span></li>
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>To open pull requests on your GitHub repositories</span></li>
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>To send you email notifications about request status changes</span></li>
              <li className="flex gap-3"><span className="text-[#FF4C29] mt-0.5">•</span><span>To manage your account, billing, and subscription</span></li>
            </ul>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Third-Party Services</h2>
            <p className="mb-4">To power key features, we work with the following services:</p>
            <div className="grid gap-3">
              {[
                { name: "Anthropic & OpenAI", desc: "AI-powered spec and code generation (using your API key)" },
                { name: "PostgreSQL", desc: "Data storage and database infrastructure" },
                { name: "Clerk", desc: "Secure authentication and organization management" },
                { name: "Stripe", desc: "Payment processing" },
                { name: "GitHub API", desc: "Repository access and pull request creation" },
                { name: "Resend", desc: "Transactional email delivery" },
              ].map((s) => (
                <div key={s.name} className="flex items-start gap-3 rounded-lg bg-gray-800/40 px-4 py-3">
                  <span className="text-sm font-medium text-white whitespace-nowrap min-w-[140px]">{s.name}</span>
                  <span className="text-sm text-gray-400">{s.desc}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-500 text-sm">These providers process data solely on our behalf under their respective data protection agreements.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Data Sharing</h2>
              <p>We do not share or sell your data with advertisers, partners, or third parties outside the services listed above.</p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Cookies & Tracking</h2>
              <p>We use only essential cookies required for authentication. We do not use third-party tracking technologies or analytics cookies.</p>
            </div>
          </div>

          <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-6">
            <h2 className="text-lg font-semibold text-white mb-3">Your Code</h2>
            <p>ShipFeat reads your source code only during spec generation and build sessions. We <strong className="text-white">do not permanently store your source code</strong>. Generated specs and build logs are stored in your account for your reference and can be deleted at any time.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Data Deletion</h2>
              <p>You can delete your projects, requests, and associated data from within your account at any time. To delete your entire account, contact us and we will remove all your data within 30 days.</p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6">
              <h2 className="text-lg font-semibold text-white mb-3">Children&apos;s Privacy</h2>
              <p>ShipFeat is intended for users 16 years and older. We do not knowingly collect personal information from children under 16.</p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 text-center">
            <h2 className="text-lg font-semibold text-white mb-2">Questions?</h2>
            <p>Reach out to <a href="mailto:support@shipfeat.ai" className="text-[#FF4C29] hover:underline font-medium">support@shipfeat.ai</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
