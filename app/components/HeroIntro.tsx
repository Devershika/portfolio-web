"use client";

import { Mail } from "lucide-react";
import type { SVGProps } from "react";
import { useEffect, useState } from "react";

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const ROLES = [
  "Data Engineer",
  "AI Engineer",
  "Computer Vision",
  "Machine Learning",
  "Reinforcement Learning",
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/devershika-mohane",
    label: "LinkedIn profile (opens in new tab)",
    shortLabel: "LinkedIn",
    Icon: IconLinkedIn,
    external: true,
  },
  {
    href: "https://github.com/Devershika",
    label: "GitHub profile (opens in new tab)",
    shortLabel: "GitHub",
    Icon: IconGitHub,
    external: true,
  },
  {
    href: "mailto:devershikam@gmail.com",
    label: "Email devershikam@gmail.com",
    shortLabel: "Email",
    Icon: Mail,
    external: false,
  },
] as const;

export default function HeroIntro() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIndex];
    let delay: number;
    let step: () => void;

    if (!deleting) {
      if (text === full) {
        delay = 2000;
        step = () => setDeleting(true);
      } else {
        delay = 78;
        step = () => setText(full.slice(0, text.length + 1));
      }
    } else if (text === "") {
      delay = 400;
      step = () => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      };
    } else {
      delay = 42;
      step = () => setText(full.slice(0, text.length - 1));
    }

    const id = window.setTimeout(step, delay);
    return () => window.clearTimeout(id);
  }, [text, deleting, roleIndex]);

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-fg text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
        Hi, I am{" "}
        <span className="text-accent [text-shadow:0_0_28px_color-mix(in_srgb,var(--accent)_38%,transparent)]">
          Devershika Mohane
        </span>
        !
      </h1>

      <p
        className="text-body-mid min-h-[1.75rem] text-lg sm:text-xl md:text-2xl"
        aria-live="polite"
      >
        <span className="text-fg">{text}</span>
        <span className="text-accent ml-0.5 inline-block animate-pulse">|</span>
      </p>

      <div className="mt-2 flex items-center justify-center gap-4">
        {socialLinks.map(({ href, label, shortLabel, Icon, external }) => (
          <a
            key={shortLabel}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="hover-accent-muted text-fg relative z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[var(--border-subtle)] transition hover:border-[color-mix(in_srgb,var(--accent)_55%,transparent)] hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {shortLabel === "Email" ? (
              <Mail className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Icon className="h-5 w-5" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
