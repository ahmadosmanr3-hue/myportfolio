"use client";

import { useLanguage } from "@/components/language-provider";
import { TIKTOK_URL } from "@/lib/contact-links";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Clapperboard } from "lucide-react";

export function VideoCommercialSection() {
  const { m } = useLanguage();
  const reduce = useReducedMotion() ?? false;
  const v = m.video;
  const tagPills = [v.tagShops, v.tagReels, v.tagAds];

  return (
    <section
      id="video"
      className="relative z-[1] px-4 py-10 md:px-6 md:py-14 lg:px-8"
      aria-labelledby="video-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-violet-950/45 via-[var(--obsidian-elevated)]/90 to-violet-950/25 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="min-w-0 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[var(--electric-purple)]">
                <Clapperboard className="size-5" strokeWidth={1.6} />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {v.pill}
                </span>
              </div>
              <h2
                id="video-heading"
                className="syne-display mt-3 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl"
              >
                {v.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
                {v.body}
              </p>
              <ul className="mt-6 space-y-3">
                {v.bullets.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm text-[var(--foreground)]/90 sm:text-base"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-violet-500/35 bg-violet-500/10 text-[var(--electric-purple)]">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="leading-relaxed text-[var(--foreground-muted)]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full border border-[var(--card-border)]/80 bg-violet-600/15 px-5 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-[0_0_28px_rgba(109,40,217,0.18)] transition hover:-translate-y-0.5 hover:border-violet-400/45 hover:bg-violet-500/15 hover:shadow-[0_0_36px_rgba(139,92,246,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500/70"
              >
                {v.cta}
              </a>
            </div>

            <div className="flex shrink-0 flex-col gap-3 lg:w-56">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--foreground-muted)]">
                {v.formatsLabel}
              </p>
              <div className="flex flex-col gap-2">
                {tagPills.map((label) => (
                  <div
                    key={label}
                    className="rounded-xl border border-[var(--card-border)]/60 bg-violet-950/25 px-4 py-3 text-center text-sm font-medium text-[var(--foreground)]"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
