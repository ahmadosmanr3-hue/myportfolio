"use client";

import { useLanguage } from "@/components/language-provider";
import { TIKTOK_URL } from "@/lib/contact-links";
import { ArrowUpRight, Play } from "lucide-react";

export function VideoCommercialSection() {
  const { m } = useLanguage();
  const v = m.video;
  return (
    <section id="video" className="scroll-mt-16 px-5 pb-20 md:px-8 md:pb-28" aria-labelledby="video-heading">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-[var(--orange)] text-white">
        <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
          <div className="paper-grid flex min-h-64 items-center justify-center border-b border-white/20 p-10 lg:border-b-0 lg:border-e">
            <div className="flex size-32 items-center justify-center rounded-full border border-white/50 bg-white/10">
              <Play className="size-12 fill-white" strokeWidth={1.2} />
            </div>
          </div>
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{v.eyebrow}</p>
            <h2 id="video-heading" className="display-font mt-4 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] sm:text-5xl">{v.heading}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80">{v.body}</p>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[var(--ink)]">
              {v.cta}<ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
