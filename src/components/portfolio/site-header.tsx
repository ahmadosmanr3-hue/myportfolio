"use client";

import { useLanguage } from "@/components/language-provider";
import { LOCALES } from "@/i18n/dictionary";
import type { PublicPortrait } from "@/lib/get-portrait";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  portrait: PublicPortrait | null;
};

export function SiteHeader({ portrait }: SiteHeaderProps) {
  const { m, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const rtl = locale === "ckb";

  const links = [
    { href: "#projects", label: m.nav.work },
    { href: "#achievements", label: m.nav.achievements },
    { href: "#stack", label: m.nav.stack },
    { href: "#video", label: m.nav.video },
    { href: "#contact", label: m.nav.contact },
  ] as const;

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
          <span className="hidden sm:inline">{m.nav.portfolio}</span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <nav
            className="flex items-center gap-1"
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
          <div
            className="flex items-center rounded-xl border border-[var(--card-border)]/50 bg-violet-950/20 p-0.5"
            role="group"
            aria-label={m.nav.language}
          >
            {LOCALES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLocale(id)}
                className={[
                  "rounded-lg px-2.5 py-1 text-xs font-medium transition",
                  locale === id
                    ? "bg-violet-600/30 text-[var(--foreground)]"
                    : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <div
            className="flex items-center rounded-lg border border-[var(--card-border)]/50 bg-violet-950/20 p-0.5"
            role="group"
            aria-label={m.nav.language}
          >
            {LOCALES.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLocale(id)}
                className={[
                  "rounded-md px-2 py-0.5 text-[11px] font-medium transition",
                  locale === id
                    ? "bg-violet-600/30 text-[var(--foreground)]"
                    : "text-[var(--foreground-muted)]",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--card-border)] bg-violet-950/30 text-[var(--foreground)]"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? m.nav.closeMenu : m.nav.openMenu}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        </div>
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
                  initial={{ opacity: 0, x: rtl ? 12 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {label}
                </motion.a>
              ))}
              <div className="mt-4 flex flex-wrap gap-2 border-t border-[var(--card-border)]/30 pt-4">
                <span className="w-full text-xs font-mono uppercase tracking-wider text-[var(--foreground-muted)]">
                  {m.nav.language}
                </span>
                {LOCALES.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setLocale(id)}
                    className={[
                      "rounded-lg border px-3 py-2 text-sm",
                      locale === id
                        ? "border-violet-400/50 bg-violet-600/20 text-[var(--foreground)]"
                        : "border-[var(--card-border)]/60 text-[var(--foreground-muted)]",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
