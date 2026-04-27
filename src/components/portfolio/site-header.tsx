"use client";

import type { PublicPortrait } from "@/lib/get-portrait";
import { useEffect, useState } from "react";
import { Code2, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#achievements", label: "Achievements" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

type SiteHeaderProps = {
  portrait: PublicPortrait | null;
};

export function SiteHeader({ portrait }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-[background,border,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-[var(--card-border)]/60 bg-[var(--obsidian)]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 md:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-widest text-[var(--foreground)] outline-none focus-visible:ring-2 focus-visible:ring-violet-500/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--obsidian)]"
        >
          {portrait ? (
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--card-border)] bg-violet-950/40">
              <img
                src={`${portrait.src}${portrait.src.includes("?") ? "&" : "?"}v=${portrait.rev}`}
                alt=""
                className="h-full w-full object-cover"
                width={36}
                height={36}
                decoding="async"
              />
            </span>
          ) : (
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--card-border)] bg-violet-950/50 text-[var(--electric-purple)] transition group-hover:border-violet-400/40 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]">
              <Code2 className="size-4" strokeWidth={1.75} />
            </span>
          )}
          <span className="hidden sm:inline">Portfolio</span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Page sections"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-1.5 text-sm text-[var(--foreground-muted)] transition hover:bg-violet-950/50 hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500/70"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--card-border)] bg-violet-950/30 text-[var(--foreground)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 top-14 z-40 border-t border-[var(--card-border)]/50 bg-[var(--obsidian)]/98 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <nav
              className="flex flex-col p-4"
              aria-label="Page sections"
            >
              {links.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[var(--card-border)]/30 py-4 text-lg font-medium text-[var(--foreground)]"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
