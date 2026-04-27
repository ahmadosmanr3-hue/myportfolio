"use client";

import { Award, Globe2, Sparkles } from "lucide-react";

const items = [
  { icon: Award, text: "Silver Medal Winner" },
  { icon: Globe2, text: "International Competition Invitee (Infomatrix / Robotek)" },
  { icon: Sparkles, text: "Open Source Contributor" },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-3 pr-10">
      {items.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--obsidian-elevated)]/80 px-4 py-2 text-sm text-[var(--foreground-muted)] shadow-[0_0_20px_rgba(109,40,217,0.12)] backdrop-blur-md"
        >
          <Icon
            className="size-4 text-[var(--gold)]"
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
  return (
    <section
      id="achievements"
      className="group relative w-full overflow-hidden border-y border-[var(--card-border)]/50 bg-[var(--obsidian-elevated)]/40 py-6"
      aria-label="Achievements"
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
