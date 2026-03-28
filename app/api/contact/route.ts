import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  if (!resend) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Add RESEND_API_KEY in Vercel (or .env.local) and redeploy.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name.trim() : "";
  const email = typeof o.email === "string" ? o.email.trim() : "";
  const message = typeof o.message === "string" ? o.message.trim() : "";

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 8000) {
    return NextResponse.json(
      { error: "Message should be between 10 and 8000 characters." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "devershikam@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[Portfolio] Message from ${name}`,
    text: `From: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Could not send email. Try again later or email directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
