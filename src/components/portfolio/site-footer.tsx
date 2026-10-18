"use client";

import { useLanguage } from "@/components/language-provider";
import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  const { m } = useLanguage();
  return (
    <footer className="border-t border-white/15 bg-[var(--ink)] px-5 py-7 text-[var(--paper)] md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
        <p>{m.footer.line}</p>
        <a href="#top" className="inline-flex items-center gap-2 font-semibold text-[var(--paper)]">{m.footer.backToTop}<ArrowUp className="size-4" /></a>
      </div>
    </footer>
  );
}
