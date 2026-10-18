"use client";

import { useLanguage } from "@/components/language-provider";

export function TechStack() {
  const { m } = useLanguage();
  const s = m.stack;
  return (
    <section id="stack" className="section-rule scroll-mt-16 px-5 py-20 md:px-8 md:py-28" aria-labelledby="stack-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--orange)]">{s.eyebrow}</p>
            <h2 id="stack-heading" className="display-font mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">{s.heading}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[var(--ink-soft)] lg:justify-self-end">{s.body}</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {s.groups.map((group) => (
            <article key={group.title} className="bg-[var(--white)] p-6">
              <h3 className="display-font text-lg font-bold text-[var(--green)]">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.tools.map((tool) => (
                  <li key={tool} className="flex items-center gap-3 text-sm font-medium">
                    <span className="size-1.5 rounded-full bg-[var(--orange)]" />{tool}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
