"use client";

import type { PublicPortrait } from "@/lib/get-portrait";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Sparkles, Zap } from "lucide-react";
import { HeroProfileOval } from "./hero-profile-oval";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item = (reduce: boolean) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0.15 : 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
});

const chips = [
  { label: "Zero-cost stack", icon: Sparkles },
  { label: "High performance", icon: Zap },
] as const;

type HeroProps = {
  portrait: PublicPortrait | null;
};

export function Hero({ portrait }: HeroProps) {
  const reduce = useReducedMotion() ?? false;

  return (
    <section className="relative z-[1] overflow-hidden px-4 pt-6 pb-12 sm:pt-8 md:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 -z-10 max-h-[45%] bg-gradient-to-b from-violet-950/20 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--card-border)]/80 bg-gradient-to-br from-violet-950/20 via-[var(--obsidian-elevated)]/50 to-violet-950/10 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_28px_70px_-24px_rgba(76,29,149,0.4)] sm:rounded-3xl sm:p-1.5">
          <div className="relative overflow-hidden rounded-[1.4rem] bg-gradient-to-b from-violet-950/10 to-transparent sm:rounded-[1.6rem]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_0%_0%,rgba(168,85,247,0.1),transparent_55%)]" />

            <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-7 lg:grid-cols-12 lg:items-center lg:gap-6 lg:p-8">
              <motion.div
                className="min-w-0 space-y-0 lg:col-span-6 xl:col-span-7"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.p
                  className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--electric-purple)]/90"
                  variants={item(reduce)}
                >
                  Portfolio · 2026
                </motion.p>
                <motion.h1
                  className="font-[family-name:var(--font-syne)] text-3xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-4xl md:text-5xl xl:text-[3.1rem] xl:leading-[1.06]"
                  style={{ fontFamily: "var(--font-syne), system-ui" }}
                  variants={item(reduce)}
                >
                  Full-Stack Developer &amp;{" "}
                  <span className="bg-gradient-to-r from-[var(--electric-purple)] to-[#c4b5fd] bg-clip-text text-transparent">
                    Tech Content Creator
                  </span>
                </motion.h1>
                <motion.p
                  className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base"
                  variants={item(reduce)}
                >
                  I design and ship zero-cost, high-performance
                  applications—from mobile and web to local-first
                  experiences—without compromising polish or speed.
                </motion.p>
                <motion.div
                  className="mt-5 flex flex-wrap gap-2"
                  variants={item(reduce)}
                >
                  {chips.map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)]/50 bg-violet-950/20 px-3 py-1.5 text-xs text-[var(--foreground-muted)]"
                    >
                      <Icon
                        className="size-3.5 text-[var(--gold)]"
                        strokeWidth={1.75}
                      />
                      {label}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  className="mt-6 flex flex-wrap items-center gap-3"
                  variants={item(reduce)}
                >
                  <a
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--card-border)]/80 bg-violet-600/12 px-5 py-2.5 text-sm font-medium text-[var(--foreground)] shadow-[0_0_32px_rgba(109,40,217,0.2)] transition hover:-translate-y-0.5 hover:border-violet-400/45 hover:bg-violet-500/10 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500/80"
                  >
                    View work
                    <ChevronRight className="size-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#stack"
                    className="text-sm text-[var(--foreground-muted)] underline-offset-4 transition hover:text-[var(--foreground)] hover:underline"
                  >
                    Tech stack
                  </a>
                </motion.div>
              </motion.div>

              <div className="flex justify-center lg:col-span-6 xl:col-span-5 lg:justify-end">
                <div className="w-full max-w-sm lg:max-w-none">
                  <div className="relative overflow-hidden rounded-2xl border border-violet-500/20 bg-violet-950/10 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="overflow-hidden rounded-[0.9rem] bg-black/20">
                      <HeroProfileOval portrait={portrait} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
