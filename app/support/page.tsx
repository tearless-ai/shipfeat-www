"use client";

import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react";
import { EarlyAccessButton } from "@/components/EarlyAccessButton";

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = "0x4AAAAAACs7ysz5rCMzuSbb";

export default function SupportPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (document.querySelector('script[src*="turnstile"]')) return;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = () => {
      if (turnstileRef.current && window.turnstile) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(""),
          theme: "dark",
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, turnstileToken }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <p className="text-sm font-medium text-[#FF4C29] uppercase tracking-widest mb-6">
            Support
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            How can we{" "}
            <span className="text-[#FF4C29]">help</span>?
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a question, bug report, or feature request? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact form */}
      <section className="pb-28">
        <div className="max-w-xl mx-auto px-8 lg:px-12">
          {sent ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
              <CheckCircle2
                size={40}
                className="text-emerald-400 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-white mb-2">
                Message sent!
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                We&apos;ve received your message and sent a confirmation to your
                email. We&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                }}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-lg bg-[#141B2D] border border-gray-800 text-white placeholder:text-gray-600 focus:border-[#FF4C29]/50 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#141B2D] border border-gray-800 text-white placeholder:text-gray-600 focus:border-[#FF4C29]/50 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Bug report, question, feature request..."
                  className="w-full px-4 py-3 rounded-lg bg-[#141B2D] border border-gray-800 text-white placeholder:text-gray-600 focus:border-[#FF4C29]/50 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's going on..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[#141B2D] border border-gray-800 text-white placeholder:text-gray-600 focus:border-[#FF4C29]/50 focus:outline-none text-sm resize-none"
                />
              </div>

              <div ref={turnstileRef} className="mb-4" />

              <button
                type="submit"
                disabled={sending || !email || !message || !turnstileToken}
                className="w-full px-5 py-3 rounded-lg bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {sending ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {sending ? "Sending…" : "Send Message"}
              </button>

              {error && (
                <p className="text-sm text-red-400 text-center mt-3">{error}</p>
              )}
            </form>
          )}

          {/* Direct email fallback */}
          <div className="mt-10 pt-8 border-t border-gray-800/50 text-center">
            <p className="text-xs text-gray-600 flex items-center justify-center gap-2">
              <Mail size={12} />
              Or email us directly at{" "}
              <a
                href="mailto:support@shipfeat.ai"
                className="text-gray-400 hover:text-[#FF4C29] transition-colors"
              >
                support@shipfeat.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Not a customer yet?
          </p>
          <EarlyAccessButton className="px-6 py-3 bg-[#FF4C29] hover:bg-[#E5421F] text-white text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-2" />
        </div>
      </section>
    </>
  );
}
