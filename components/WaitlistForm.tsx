"use client";

import { useState } from "react";
import { WAITLIST_URL } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(WAITLIST_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ email, firstName, honeypot }),
        redirect: "follow",
      });

      // Google Apps Script with no-cors returns opaque response (status 0)
      // but the request still goes through. We optimistically show success.
      // The Apps Script handles validation server-side.
      setState("success");
    } catch {
      setState("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  if (state === "success") {
    return (
      <div className="max-w-md mx-auto text-center py-8">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-white mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-gray-400 text-sm">
          We&apos;ll reach out as soon as early access is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
      {/* Honeypot — visually hidden but not display:none (bots detect that) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-xs text-gray-400 mb-1.5 font-medium">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Ada"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-[#141B2D] border border-gray-800/60 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF4C29]/50 focus:border-[#FF4C29]/50 transition-colors"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="email" className="block text-xs text-gray-400 mb-1.5 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="ada@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-[#141B2D] border border-gray-800/60 text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FF4C29]/50 focus:border-[#FF4C29]/50 transition-colors"
          />
        </div>
      </div>

      {state === "error" && (
        <p className="text-xs text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full px-6 py-3 bg-[#FF4C29] hover:bg-[#E5421F] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#FF4C29]/25 flex items-center justify-center gap-2"
      >
        {state === "submitting" ? (
          <>
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Joining…
          </>
        ) : (
          "Request Access"
        )}
      </button>
    </form>
  );
}
