"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="fixed right-4 top-4 z-50 h-10 w-10 rounded-full border border-[var(--border-subtle)] bg-[color-mix(in_srgb,var(--surface-card)_80%,transparent)]"
        aria-hidden
      />
    );
  }

  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="hover-accent-muted border-accent-soft fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-[color-mix(in_srgb,var(--surface-card)_75%,transparent)] text-accent shadow-lg backdrop-blur-md transition hover:border-[color-mix(in_srgb,var(--accent)_50%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? <Moon className="h-5 w-5" strokeWidth={1.75} /> : <Sun className="h-5 w-5" strokeWidth={1.75} />}
    </button>
  );
}
