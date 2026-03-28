"use client";

import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setErrorText(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorText("Network error. Check your connection and try again.");
    }
  }

  return (
    <form className="grid gap-4 p-5" onSubmit={onSubmit}>
      <label className="terminal-label">
        name:
        <input
          type="text"
          name="name"
          required
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="terminal-input"
          autoComplete="name"
        />
      </label>
      <label className="terminal-label">
        email:
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="terminal-input"
          autoComplete="email"
        />
      </label>
      <label className="terminal-label">
        message:
        <textarea
          name="message"
          required
          rows={4}
          minLength={10}
          maxLength={8000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Let's build something meaningful together."
          className="terminal-input resize-none"
        />
      </label>

      {status === "success" ? (
        <p className="form-message ok" role="status">
          Thanks — your message was sent. I will get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="form-message err" role="alert">
          {errorText}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-accent w-fit"
      >
        <Mail size={16} aria-hidden />
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
