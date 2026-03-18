import { Rocket } from "lucide-react";
import { EarlyAccessButton } from "./EarlyAccessButton";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-gray-800/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 lg:px-12 py-4">
        <a href="/" className="flex items-center gap-2">
          <Rocket className="text-[#FF4C29]" size={22} />
          <span className="font-bold text-lg tracking-tight text-white">
            ShipFeat
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          <a href="/#how-it-works" className="hover:text-white transition-colors">
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
          <EarlyAccessButton
            className="px-4 py-2 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
            showArrow={false}
          />
        </div>
      </div>
    </header>
  );
}
