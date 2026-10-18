"use client";

import { useLanguage } from "@/components/language-provider";
import { Award, Code2, Globe2, Medal } from "lucide-react";

const icons = [Globe2, Code2];

export function AchievementsMarquee() {
  const { m } = useLanguage();
  const a = m.achievements;

  return (
    <section
      id="achievements"
      className="section-rule scroll-mt-16 px-5 py-20 md:px-8 md:py-24"
      aria-labelledby="achievement-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--orange)]">{a.eyebrow}</p>
            <h2 id="achievement-heading" className="display-font mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              {a.heading}
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-[var(--ink-soft)] lg:justify-self-end">{a.body}</p>
        </div>

        <article className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#171c1b] text-[#f7f3ea] shadow-[0_24px_70px_rgba(23,25,21,0.12)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(210,216,222,0.16),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(184,115,51,0.18),transparent_34%)] rtl:bg-[radial-gradient(circle_at_86%_8%,rgba(210,216,222,0.16),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(184,115,51,0.18),transparent_34%)]" />
          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-12 lg:p-12">
            <div>
              <div className="flex items-center gap-3 text-[#d8dde1]">
                <span className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
                  <Award className="size-5" strokeWidth={1.7} />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.2em]">{a.feature.title}</p>
              </div>
              <h3 className="display-font mt-7 text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl">
                <bdi dir="ltr">{a.feature.path}</bdi>
              </h3>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#c8ccc8] sm:text-lg sm:leading-8">{a.feature.body}</p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] bg-white/[0.045] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
              <div className="grid sm:grid-cols-2">
                <div className="p-6 sm:p-7 lg:p-8">
                  <div className="flex size-14 items-center justify-center rounded-full border border-[#c5cbd0]/40 bg-[#d9dde1]/15 text-[#e1e5e8]">
                    <Medal className="size-7" strokeWidth={1.7} />
                  </div>
                  <h4 className="display-font mt-8 text-3xl font-extrabold leading-tight text-[#eef1f3]">{a.feature.silver.title}</h4>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[#d1d6da]">{a.feature.silver.event}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#9ea7ae]">{a.feature.silver.detail}</p>
                </div>

                <div className="border-t border-white/10 p-6 sm:border-s sm:border-t-0 sm:p-7 lg:p-8">
                  <div className="flex size-14 items-center justify-center rounded-full border border-[#b87333]/50 bg-[#b87333]/20 text-[#e4ad7b]">
                    <Medal className="size-7" strokeWidth={1.7} />
                  </div>
                  <h4 className="display-font mt-8 text-3xl font-extrabold leading-tight text-[#f0bd8e]">{a.feature.bronze.title}</h4>
                  <p className="mt-4 text-sm font-semibold leading-6 text-[#ead5c2]">{a.feature.bronze.event}</p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#bd906a]">{a.feature.bronze.detail}</p>
                  <p className="mt-3 text-xs text-[#aa9c90]">{a.feature.bronze.proof}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {a.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.title} className="bg-[var(--white)] p-6 sm:p-8">
                <Icon className="size-6 text-[var(--green)]" strokeWidth={1.7} />
                <h3 className="display-font mt-8 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[var(--ink-soft)]">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
