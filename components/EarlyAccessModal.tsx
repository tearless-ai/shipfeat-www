"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { useEarlyAccess } from "./EarlyAccessContext";
import { WaitlistForm } from "./WaitlistForm";

export function EarlyAccessModal() {
  const { isOpen, closeModal } = useEarlyAccess();

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    },
    [closeModal]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll while open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="early-access-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div className="relative w-full max-w-md rounded-lg border border-gray-800 bg-[#141B2D] p-8 shadow-2xl shadow-black/50">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[#1E293B] text-gray-500 hover:text-gray-300 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF4C29]/10 border border-[#FF4C29]/25 mb-4">
            <span className="text-xs font-semibold text-[#FF4C29]">Early Access</span>
          </div>
          <h2
            id="early-access-title"
            className="text-xl font-bold text-white mb-2"
          >
            Get Early Access
          </h2>
          <p className="text-sm text-gray-400">
            7-day free trial · Full Pro features · 5 features included
          </p>
        </div>

        {/* Form */}
        <WaitlistForm />
      </div>
    </div>
  );
}
