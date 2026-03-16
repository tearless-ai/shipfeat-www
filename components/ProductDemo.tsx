"use client";

import { useState, useEffect, useCallback } from "react";

const STEPS = [
  {
    label: "Widget",
    caption: "Users click the feedback button in your app",
    image: "/screenshots/01-widget-app.jpg",
    duration: 4000,
  },
  {
    label: "Submit",
    caption: "They describe the enhancement they want — 10 seconds, no account",
    image: "/screenshots/02-widget-open.jpg",
    duration: 5000,
  },
  {
    label: "Spec",
    caption: "AI reads your codebase and generates a structured change plan",
    image: "/screenshots/03-spec-review.jpg",
    duration: 6000,
  },
  {
    label: "Build",
    caption: "Watch the AI write code, commit, and open a PR in real-time",
    image: "/screenshots/05-build-terminal.jpg",
    duration: 5000,
  },
  {
    label: "Ship",
    caption: "Review the dashboard, merge when ready — you're always in control",
    image: "/screenshots/04-dashboard.jpg",
    duration: 5000,
  },
];

export function ProductDemo() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % STEPS.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;

    const duration = STEPS[active].duration;
    const interval = 50;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          advance();
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [active, paused, advance]);

  const goTo = (index: number) => {
    setActive(index);
    setProgress(0);
  };

  return (
    <div
      className="rounded-xl border border-gray-800/60 bg-[#141B2D] overflow-hidden shadow-2xl shadow-black/30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Screenshot */}
      <div className="relative aspect-[16/9] bg-[#0B0F19] overflow-hidden">
        {STEPS.map((step, i) => (
          <img
            key={i}
            src={step.image}
            alt={step.caption}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Progress bars */}
      <div className="flex gap-1 px-5 pt-4">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex-1 h-[3px] rounded-full bg-gray-800 overflow-hidden cursor-pointer"
            aria-label={`Step ${i + 1}`}
          >
            <div
              className="h-full rounded-full bg-[#FF4C29] transition-all"
              style={{
                width:
                  i < active
                    ? "100%"
                    : i === active
                      ? `${progress}%`
                      : "0%",
                transitionDuration: i === active ? "50ms" : "300ms",
              }}
            />
          </button>
        ))}
      </div>

      {/* Caption + step labels */}
      <div className="px-5 pt-4 pb-5">
        <p className="text-sm text-gray-300 mb-4">{STEPS[active].caption}</p>
        <div className="flex items-center gap-2">
          {STEPS.map((step, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                i === active
                  ? "bg-[#FF4C29]/10 text-[#FF4C29] border border-[#FF4C29]/30"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
