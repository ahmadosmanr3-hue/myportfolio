"use client";

import type { PublicPortrait } from "@/lib/get-portrait";
import { User } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  portrait: PublicPortrait | null;
};

function bust(portrait: PublicPortrait) {
  return `${portrait.src}${portrait.src.includes("?") ? "&" : "?"}v=${portrait.rev}`;
}

/** Oval frame + soft “moon” glow behind you — your purple theme, not a template clone. */
export function HeroProfileOval({ portrait }: Props) {
  const reduce = useReducedMotion() ?? false;
  const url = portrait ? bust(portrait) : null;

  if (!url) {
    return (
      <div className="flex min-h-[min(42vh,360px)] w-full max-w-sm flex-col items-center justify-center gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-violet-500/40 text-[var(--foreground-muted)]">
          <User className="size-9" />
        </div>
        <p className="text-center text-xs text-[var(--foreground-muted)]">
          Add <code className="font-mono text-[var(--electric-purple)]">/public/portrait.png</code>
        </p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex w-full max-w-[min(100%,300px)] items-center justify-center sm:max-w-[340px] lg:max-w-[380px]">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,360px)] w-[min(90vw,360px)] -translate-x-1/2 -translate-y-[44%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.42) 0%, rgba(91, 33, 182, 0.28) 40%, rgba(30, 10, 50, 0) 70%)",
          boxShadow: "0 0 100px 36px rgba(109, 40, 217, 0.22)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(75vw,280px)] w-[min(75vw,280px)] -translate-x-1/2 -translate-y-[48%] rounded-full border border-violet-500/25 bg-gradient-to-b from-violet-600/15 to-transparent blur-sm"
        aria-hidden
      />

      <motion.div
        className="relative z-10 h-[min(58vh,400px)] w-[min(68vw,280px)] sm:h-[min(58vh,420px)] sm:w-[min(62vw,300px)]"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="h-full w-full overflow-hidden rounded-full border-2 border-violet-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.55),0_0_60px_rgba(139,92,246,0.2)]">
          <img
            src={url}
            alt="Profile"
            className="h-full w-full object-contain object-bottom"
            width={300}
            height={420}
            decoding="async"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  );
}
