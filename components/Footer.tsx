import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <a
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors"
          >
            <Rocket size={16} className="text-[#FF4C29]" />
            <span className="text-sm font-medium">ShipFeat</span>
          </a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-600">
            <a href="/pricing" className="hover:text-gray-400 transition-colors">
              Pricing
            </a>
            <a href="/about" className="hover:text-gray-400 transition-colors">
              About
            </a>
            <a href="/support" className="hover:text-gray-400 transition-colors">
              Support
            </a>
            <span className="hidden md:inline text-gray-800">·</span>
            <a href="/terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/fulfillment" className="hover:text-gray-400 transition-colors">
              Fulfillment Policy
            </a>
            <span className="hidden md:inline text-gray-800">·</span>
            <span>© 2026 Tearless AI. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
