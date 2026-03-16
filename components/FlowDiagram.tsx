"use client";

import { useEffect, useState } from "react";
import { MessageSquareText, Sparkles, GitPullRequest, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquareText,
    label: "Feedback",
    sublabel: "User submits a request",
  },
  {
    icon: Sparkles,
    label: "AI Spec",
    sublabel: "Reads code, writes a plan",
  },
  {
    icon: GitPullRequest,
    label: "Pull Request",
    sublabel: "Code generated, PR opened",
  },
  {
    icon: Rocket,
    label: "Shipped",
    sublabel: "Review, merge, live",
  },
];

export function FlowDiagram() {
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    // Animate steps in sequence on mount
    const timers: NodeJS.Timeout[] = [];
    STEPS.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStep(i), 400 + i * 600));
    });
    // Then loop
    const loop = setInterval(() => {
      setActiveStep(-1);
      STEPS.forEach((_, i) => {
        timers.push(setTimeout(() => setActiveStep(i), 400 + i * 600));
      });
    }, STEPS.length * 600 + 2500);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Connecting line */}
        <div className="absolute top-10 left-[12%] right-[12%] h-px bg-gray-800 z-0" />
        <div
          className="absolute top-10 left-[12%] h-px bg-[#FF4C29] z-0 transition-all duration-700 ease-out"
          style={{
            width: activeStep < 0 ? "0%" : `${(activeStep / (STEPS.length - 1)) * 76}%`,
          }}
        />

        {STEPS.map((step, i) => {
          const isActive = i <= activeStep;
          return (
            <div key={i} className="flex flex-col items-center relative z-10 w-1/4">
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  isActive
                    ? "bg-[#FF4C29]/10 border-2 border-[#FF4C29]/40 shadow-lg shadow-[#FF4C29]/10"
                    : "bg-[#141B2D] border-2 border-gray-800"
                }`}
              >
                <step.icon
                  size={28}
                  className={`transition-colors duration-500 ${
                    isActive ? "text-[#FF4C29]" : "text-gray-600"
                  }`}
                />
              </div>
              <p
                className={`mt-4 text-sm font-semibold transition-colors duration-500 ${
                  isActive ? "text-white" : "text-gray-600"
                }`}
              >
                {step.label}
              </p>
              <p
                className={`mt-1 text-xs transition-colors duration-500 text-center max-w-[140px] ${
                  isActive ? "text-gray-400" : "text-gray-700"
                }`}
              >
                {step.sublabel}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical */}
      <div className="flex md:hidden flex-col items-start relative pl-10">
        {/* Connecting line */}
        <div className="absolute top-4 bottom-4 left-[19px] w-px bg-gray-800 z-0" />
        <div
          className="absolute top-4 left-[19px] w-px bg-[#FF4C29] z-0 transition-all duration-700 ease-out"
          style={{
            height: activeStep < 0 ? "0%" : `${(activeStep / (STEPS.length - 1)) * 100}%`,
          }}
        />

        {STEPS.map((step, i) => {
          const isActive = i <= activeStep;
          return (
            <div key={i} className="flex items-center gap-5 relative z-10 mb-8 last:mb-0">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 -ml-10 transition-all duration-500 ${
                  isActive
                    ? "bg-[#FF4C29]/10 border-2 border-[#FF4C29]/40"
                    : "bg-[#141B2D] border-2 border-gray-800"
                }`}
              >
                <step.icon
                  size={18}
                  className={`transition-colors duration-500 ${
                    isActive ? "text-[#FF4C29]" : "text-gray-600"
                  }`}
                />
              </div>
              <div>
                <p
                  className={`text-sm font-semibold transition-colors duration-500 ${
                    isActive ? "text-white" : "text-gray-600"
                  }`}
                >
                  {step.label}
                </p>
                <p
                  className={`text-xs transition-colors duration-500 ${
                    isActive ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {step.sublabel}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
