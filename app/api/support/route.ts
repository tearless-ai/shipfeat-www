import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(key);
}

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!email || !message) {
    return NextResponse.json(
      { error: "Email and message are required" },
      { status: 400 },
    );
  }

  try {
    const resend = getResend();
    await resend.emails.send({
      from: "ShipFeat Support <notifications@shipfeat.ai>",
      to: "support@shipfeat.ai",
      replyTo: email,
      subject: `[Support] ${subject || "New request"} — ${name || email}`,
      text: `From: ${name || "Not provided"}\nEmail: ${email}\nSubject: ${subject || "Not provided"}\n\n${message}`,
    });

    // Send confirmation to the user
    await getResend().emails.send({
      from: "ShipFeat <notifications@shipfeat.ai>",
      to: email,
      subject: "We got your message — ShipFeat Support",
      text: `Hi ${name || "there"},\n\nThanks for reaching out. We've received your message and will get back to you as soon as possible.\n\nYour message:\n${message}\n\n— The ShipFeat Team`,
    });

    return NextResponse.json({ sent: true });
  } catch (err) {
    console.error("[support] Failed to send:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
