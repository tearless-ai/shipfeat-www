import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 lg:px-12 py-8">
        <a
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors"
        >
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
  );
}
