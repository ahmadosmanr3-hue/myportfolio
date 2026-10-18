"use client";

import { useLanguage } from "@/components/language-provider";
import type { PublicPortrait } from "@/lib/get-portrait";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero({ portrait }: { portrait: PublicPortrait | null }) {
  const { locale, m } = useLanguage();
  const portraitUrl = portrait
    ? `${portrait.src}${portrait.src.includes("?") ? "&" : "?"}v=${portrait.rev}`
    : null;

  return (
    <section className="paper-grid relative overflow-hidden px-5 pb-14 pt-10 sm:pb-20 sm:pt-16 md:px-8" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[color:rgba(255,253,248,0.75)] px-3 py-1.5 text-xs font-semibold text-[var(--green)]">
            <span className="size-2 rounded-full bg-[var(--orange)]" />
            {m.hero.availability}
          </div>
          <p className="mb-3 text-lg font-semibold text-[var(--green)] sm:text-xl">{m.hero.hello}</p>
          <h1
            id="hero-title"
            className="display-font max-w-4xl text-[clamp(3rem,8vw,6.8rem)] font-extrabold leading-[0.93] tracking-[-0.055em]"
            style={
              locale === "ckb"
                ? {
                    fontSize: "clamp(2.75rem, 7vw, 5.4rem)",
                    lineHeight: 1.28,
                    letterSpacing: "-0.02em",
                  }
                : undefined
            }
          >
            {m.hero.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg sm:leading-8">
            {m.hero.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition hover:-translate-y-0.5">
              {m.hero.primaryCta}<ArrowDownRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-5 py-3 text-sm font-semibold transition hover:bg-[var(--white)]">
              {m.hero.secondaryCta}<ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div aria-hidden="true" className="absolute -inset-x-3 -bottom-3 top-5 rounded-[2.25rem] border border-[color:rgba(221,90,42,0.24)] bg-[color:rgba(221,90,42,0.08)] sm:-inset-x-5 sm:-bottom-5" />
          <div className="portrait-stage relative overflow-hidden rounded-[2rem] border border-white/10 pt-7 sm:pt-9">
            <div aria-hidden="true" className="portrait-stage__glow" />
            <div aria-hidden="true" className="portrait-stage__arc" />
            <div aria-hidden="true" className="portrait-stage__beam" />
            {portraitUrl ? (
              <Image
                src={portraitUrl}
                alt="Ahmad"
                className="portrait-stage__image relative z-20 mx-auto h-[400px] w-auto object-contain object-bottom sm:h-[500px]"
                width={408}
                height={612}
                sizes="(min-width: 1024px) 408px, (min-width: 640px) 360px, 280px"
                priority
                unoptimized
              />
            ) : (
              <div className="h-[400px] sm:h-[500px]" />
            )}
          </div>
          <div className="absolute -bottom-5 -left-3 z-30 max-w-[16rem] rounded-2xl border border-[var(--line)] bg-[color:rgba(255,253,248,0.94)] p-4 shadow-[0_16px_36px_rgba(12,18,16,0.18)] backdrop-blur-sm sm:-left-10 rtl:-right-3 rtl:left-auto sm:rtl:-right-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--orange)]">{m.hero.note}</p>
            <p className="mt-1 text-sm font-bold">{m.hero.current}</p>
          </div>
          <MapPin className="absolute -right-3 top-6 z-30 size-12 rounded-full border border-white/20 bg-[#f4eee2] p-3 text-[#244d43] shadow-[0_12px_30px_rgba(12,18,16,0.2)] rtl:-left-3 rtl:right-auto" />
        </div>
      </div>
    </section>
  );
}
