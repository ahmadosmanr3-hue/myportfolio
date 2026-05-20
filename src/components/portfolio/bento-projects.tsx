"use client";

import { useLanguage } from "@/components/language-provider";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Car, Coffee, Crown, Leaf } from "lucide-react";

const projects = [
  {
    id: "kuber" as const,
    name: "Kuber",
    icon: Car,
    layout: [
      "min-h-[200px] sm:min-h-[220px] sm:col-span-1",
      "lg:col-span-2 lg:row-start-1",
    ],
  },
  {
    id: "xanu" as const,
    name: "Xanu",
    icon: Crown,
    layout: [
      "min-h-[200px] sm:min-h-[220px] sm:col-span-1",
      "lg:col-span-2 lg:row-start-1",
    ],
  },
  {
    id: "nutrify" as const,
    name: "Nutrify",
    icon: Leaf,
    featured: true,
    layout: [
      "min-h-[220px] sm:min-h-[240px] sm:col-span-1",
      "lg:col-span-1 lg:row-start-2 lg:row-span-2 lg:min-h-0",
      "ring-1 ring-[var(--gold-dim)]/55 shadow-[0_0_0_1px_rgba(201,162,39,0.12)]",
    ],
  },
  {
    id: "rosel" as const,
    name: "Rosel",
    icon: Coffee,
    layout: [
      "min-h-[200px] sm:min-h-[220px] sm:col-span-1",
      "lg:col-span-3 lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:min-h-0",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.48,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-violet-950/40 via-[var(--obsidian-elevated)]/90 to-[var(--obsidian)]/95 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-shadow duration-300 hover:border-violet-400/30 hover:shadow-[0_0_48px_rgba(139,92,246,0.28)] focus-within:ring-2 focus-within:ring-violet-500/50";

export function BentoProjects() {
  const { m } = useLanguage();
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="projects"
      className="relative z-[1] px-4 py-10 md:px-6 md:py-12 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="projects-heading"
          className="syne-display text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {m.projects.heading}
        </h2>
        <p className="mt-2 max-w-xl text-sm text-[var(--foreground-muted)] sm:text-base">
          {m.projects.sub}
        </p>
        <div className="mt-8 grid auto-rows-min grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 lg:gap-y-3">
          {projects.map((p, i) => {
            const ProjectIcon = p.icon;
            const copy = m.projects.items[p.id];
            return (
              <motion.article
                key={p.id}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={
                  reduce
                    ? undefined
                    : { y: -3, transition: { duration: 0.2, ease: "easeOut" } }
                }
                className={[cardBase, ...p.layout].join(" ")}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_0%,rgba(168,85,247,0.15),transparent)] opacity-0 transition duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition group-hover:bg-violet-500/20" />
                {p.featured ? (
                  <div className="mb-1 inline-flex w-fit items-center gap-1 rounded-full border border-[var(--gold-dim)]/40 bg-amber-950/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--gold)]">
                    {m.projects.silverMedal}
                  </div>
                ) : null}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-[var(--electric-purple)] transition group-hover:scale-105 group-hover:border-violet-400/50">
                    <ProjectIcon className="size-5" strokeWidth={1.6} />
                  </div>
                  <span className="rounded-full border border-[var(--card-border)]/60 px-2.5 py-0.5 text-xs font-mono text-[var(--foreground-muted)]">
                    {copy.tag}
                  </span>
                </div>
                <h3 className="syne-display mt-4 flex items-center gap-1 text-xl font-bold tracking-tight">
                  {p.name}
                  <ArrowUpRight
                    className="size-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 rtl:rotate-180"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {copy.desc}
                </p>
                <div className="mt-4 h-px w-12 bg-gradient-to-r from-violet-500/40 to-transparent opacity-0 transition group-hover:opacity-100 rtl:bg-gradient-to-l" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
