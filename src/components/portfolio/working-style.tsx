"use client";

import { useLanguage } from "@/components/language-provider";

export function WorkingStyle() {
  const { m } = useLanguage();
  const a = m.approach;
  return (
    <section id="approach" className="scroll-mt-16 bg-[var(--green)] px-5 py-20 text-[var(--white)] md:px-8 md:py-28" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0a07e]">{a.eyebrow}</p>
            <h2 id="approach-heading" className="display-font mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">{a.heading}</h2>
            <p className="mt-5 max-w-md leading-7 text-[#cfddd6]">{a.intro}</p>
          </div>
          <div>
            {a.items.map((item) => (
              <article key={item.number} className="grid gap-3 border-t border-white/20 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="font-mono text-sm text-[#f0a07e]">{item.number}</span>
                <div>
                  <h3 className="display-font text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#cfddd6]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
