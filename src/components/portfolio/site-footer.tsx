"use client";

import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      className="border-t border-[var(--card-border)]/50 bg-[var(--obsidian-elevated)]/30 px-4 py-8 md:px-6 lg:px-8"
      id="footer"
    >
      <div className="mx-auto flex max-w-5xl justify-center">
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)]/60 bg-violet-950/20 px-3 py-1.5 text-xs font-mono text-[var(--gold)] transition hover:border-[var(--gold-dim)]/50 hover:bg-violet-900/20"
        >
          <ArrowUp className="size-3.5" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
