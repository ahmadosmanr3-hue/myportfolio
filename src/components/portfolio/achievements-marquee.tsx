"use client";

import { useLanguage } from "@/components/language-provider";
import { Award, Globe2, Sparkles } from "lucide-react";

function Row() {
  const { m } = useLanguage();
  const items = [
    { icon: Award, text: m.achievements.silver },
    { icon: Globe2, text: m.achievements.international },
    { icon: Sparkles, text: m.achievements.oss },
  ] as const;

  return (
    <div className="flex shrink-0 items-center gap-3 pr-10">
      {items.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--obsidian-elevated)]/80 px-4 py-2 text-sm text-[var(--foreground-muted)] shadow-[0_0_20px_rgba(109,40,217,0.12)] backdrop-blur-md"
        >
          <Icon
            className="size-4 shrink-0 text-[var(--gold)]"
            strokeWidth={1.75}
            aria-hidden
          />
          <span className="whitespace-nowrap text-[var(--foreground)]/90">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}

export function AchievementsMarquee() {
  const { m } = useLanguage();

  return (
    <section
      id="achievements"
      className="group relative w-full overflow-hidden border-y border-[var(--card-border)]/50 bg-[var(--obsidian-elevated)]/40 py-6"
      aria-label={m.nav.achievements}
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[var(--obsidian)] via-transparent to-[var(--obsidian)]" />
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </section>
  );
}
