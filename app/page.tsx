import {
  Rocket,
  ArrowRight,
  MessageSquareText,
  Shield,
  Key,
  Eye,
} from "lucide-react";

const APP_URL = "https://dev.shipfeat.ai";

function Differentiator({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2.5 rounded-lg bg-[#FF4C29]/10 shrink-0">
        <Icon size={18} className="text-[#FF4C29]" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19]">
      {/* Nav */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800/50">
        <a href="/" className="flex items-center gap-2">
          <Rocket className="text-[#FF4C29]" size={22} />
          <span className="font-bold text-lg tracking-tight text-white">
            ShipFeat
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How it works
          </a>
          <a href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`${APP_URL}/sign-in`}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href={`${APP_URL}/sign-up`}
            className="px-4 py-2 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 pt-24 pb-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Turn feature requests into
              <br />
              pull requests.{" "}
              <span className="text-[#FF4C29]">Automatically.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Your users describe what they need. ShipFeat reads your codebase,
              generates the code, and opens a PR with a live preview. You just
              review and merge.
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={`${APP_URL}/sign-up`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#FF4C29]/20"
              >
                Get started free
                <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3 text-gray-400 hover:text-white text-sm font-medium transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="px-6 py-20 border-t border-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                From feedback to shipped in minutes
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                A user submits a request. AI analyzes your code, writes the
                changes, and opens a PR. You review and merge.
              </p>
            </div>

            {/* Video/GIF placeholder */}
            <div className="relative aspect-[16/9] rounded-lg border border-gray-800 bg-[#141B2D] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-[#FF4C29]/10 flex items-center justify-center mx-auto">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#FF4C29] ml-1"
                    >
                      <path
                        d="M8 5.14v14.72a1 1 0 001.5.86l11.5-7.36a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">
                    Product demo — coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Inline CTA after demo */}
            <div className="text-center mt-8">
              <a
                href={`${APP_URL}/sign-up`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Try it yourself
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="px-6 py-20 border-t border-gray-800/50">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Differentiator
                icon={MessageSquareText}
                title="A widget that lives in your app"
                description="Users submit enhancement requests without leaving your product. Takes 10 seconds, no account needed. You control which domains can submit."
              />
              <Differentiator
                icon={Shield}
                title="Nothing ships without your approval"
                description="You review the AI's plan before any code is written. You review the PR and live preview before anything merges. Full control at every step."
              />
              <Differentiator
                icon={Key}
                title="Your AI, your cost, your choice"
                description="Bring your own API key from Anthropic or OpenAI. Pick the model that fits your budget and quality bar. ShipFeat never touches your key."
              />
              <Differentiator
                icon={Eye}
                title="Live preview before you merge"
                description="Every PR gets a Vercel preview deployment. See the actual change running on a real URL before it hits production."
              />
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-6 py-20 border-t border-gray-800/50">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ship what your users are asking for
            </h2>
            <p className="text-gray-400 mb-8">
              Free while in beta. Set up in under 5 minutes.
            </p>
            <a
              href={`${APP_URL}/sign-up`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF4C29] hover:bg-[#E5421F] text-white font-semibold rounded-lg transition-colors shadow-lg shadow-[#FF4C29]/20"
            >
              Get started free
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors">
            <Rocket size={16} className="text-[#FF4C29]" />
            <span className="text-sm font-medium">ShipFeat</span>
          </a>
          <nav className="flex items-center gap-6 text-xs text-gray-600">
            <a href="/pricing" className="hover:text-gray-400 transition-colors">
              Pricing
            </a>
            <a href="/about" className="hover:text-gray-400 transition-colors">
              About
            </a>
            <span>© 2026 Tearless AI</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}
