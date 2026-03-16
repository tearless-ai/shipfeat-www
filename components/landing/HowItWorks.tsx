"use client";

import { useState, useEffect, useCallback } from "react";
import {
  MessageSquareText,
  Sparkles,
  Terminal,
  Eye,
  Play,
  Pause,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Users submit feedback",
    description:
      "A lightweight widget lives in your app. Users describe what they'd like improved — no account needed, takes 10 seconds.",
    screenshot: "/screenshots/widget-panel.jpg",
    duration: 5000,
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI writes the spec",
    description:
      "ShipFeat reads your entire codebase, identifies the files to change, and generates a structured spec with acceptance criteria. You approve before any code is written.",
    screenshot: "/screenshots/spec-generated.jpg",
    duration: 6000,
  },
  {
    number: "03",
    icon: Terminal,
    title: "Watch it build in real-time",
    description:
      "A live terminal shows every step: branch, analyze, generate code, commit, push, PR. Like watching an engineer work — in under a minute.",
    screenshot: "/screenshots/build-terminal.jpg",
    duration: 6000,
  },
  {
    number: "04",
    icon: Eye,
    title: "Preview on Vercel, then ship",
    description:
      "Every PR gets a live Vercel preview. See the change running on a real URL. Approve it, merge, and it deploys to production automatically.",
    screenshot: "/screenshots/vercel-preview.jpg",
    duration: 5000,
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!playing) return;

    const duration = STEPS[activeStep].duration;
    const interval = 50; // update every 50ms
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
  }, [activeStep, playing, advance]);

  const goToStep = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  const current = STEPS[activeStep];

  return (
    <section id="how-it-works" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            From request to shipped in minutes
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            No tickets. No sprint planning. No engineer assignments.
          </p>
        </div>

        {/* Carousel */}
        <div className="rounded-lg border border-gray-800 bg-[#141B2D] overflow-hidden">
          {/* Screenshot area */}
          <div className="relative aspect-[16/9] bg-[#0B0F19] overflow-hidden">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === activeStep ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.screenshot}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

            {/* Play/Pause button */}
            <button
              onClick={() => setPlaying(!playing)}
              className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white/70 hover:text-white transition-colors"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>

          {/* Progress bars */}
          <div className="flex gap-1 px-6 pt-4">
            {STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToStep(i)}
                className="flex-1 h-1 rounded-full bg-gray-800 overflow-hidden cursor-pointer"
                aria-label={`Go to step ${i + 1}`}
              >
                <div
                  className="h-full rounded-full bg-[#FF4C29] transition-all"
                  style={{
                    width:
                      i < activeStep
                        ? "100%"
                        : i === activeStep
                          ? `${progress}%`
                          : "0%",
                    transitionDuration: i === activeStep ? "50ms" : "300ms",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Step info */}
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[#FF4C29] font-mono text-sm font-bold">
                  {current.number}
                </span>
                <current.icon size={18} className="text-[#FF4C29]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {current.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                  {current.description}
                </p>
              </div>
            </div>

            {/* Step dots */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {STEPS.map((step, i) => (
                <button
                  key={i}
                  onClick={() => goToStep(i)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    i === activeStep
                      ? "bg-[#FF4C29]/10 text-[#FF4C29] border border-[#FF4C29]/30"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <step.icon size={12} />
                  {step.title.split(" ").slice(0, 2).join(" ")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
