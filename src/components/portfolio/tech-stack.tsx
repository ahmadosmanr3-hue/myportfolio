"use client";

import { useLanguage } from "@/components/language-provider";
import { motion, useReducedMotion } from "framer-motion";
import { Brain, Code2, Sparkles } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiDocker,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGooglegemini,
  SiHuggingface,
  SiLangchain,
  SiLaravel,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const coreTools = [
  { name: "Flutter", Icon: SiFlutter },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Laravel", Icon: SiLaravel },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Supabase", Icon: SiSupabase },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Redis", Icon: SiRedis },
  { name: "Docker", Icon: SiDocker },
  { name: "Vercel", Icon: SiVercel },
  { name: "Git", Icon: SiGit },
  { name: "Figma", Icon: SiFigma },
] as const;

const aiTools = [
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Anthropic", Icon: SiAnthropic },
  { name: "Gemini", Icon: SiGooglegemini },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Hugging Face", Icon: SiHuggingface },
  { name: "Python", Icon: SiPython },
  { name: "Ollama", Icon: SiOllama },
] as const;

function TechBrand({
  name,
  Icon,
  compact,
}: {
  name: string;
  Icon: IconType;
  compact?: boolean;
}) {
  const box = compact ? "h-12 w-12" : "h-14 w-14";
  const icon = compact ? "size-6" : "size-8";
  return (
    <div
      className={`flex ${box} items-center justify-center rounded-2xl border border-[var(--card-border)] bg-violet-950/30 text-[var(--electric-purple)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-transform duration-300 group-hover:scale-110 group-hover:border-violet-400/40 group-hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]`}
      title={name}
    >
      <Icon className={icon} aria-hidden />
    </div>
  );
}

const slotVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.04 * i, duration: 0.32 },
  }),
};

export function TechStack() {
  const { m } = useLanguage();
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="stack"
      className="relative z-[1] px-4 py-16 md:px-6 lg:px-8"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--obsidian-elevated)]/50 px-3 py-1 text-xs font-mono uppercase tracking-wider text-[var(--foreground-muted)]">
          <Code2 className="size-3.5 text-[var(--electric-purple)]" />
          {m.stack.pill}
        </div>
        <h2
          id="stack-heading"
          className="syne-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {m.stack.heading}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--foreground-muted)] sm:text-base">
          {m.stack.sub}
        </p>

        <h3 className="mb-3 mt-10 text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)]">
          {m.stack.platforms}
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {coreTools.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={slotVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-20px" }}
              whileHover={
                reduce
                  ? undefined
                  : { y: -3, transition: { duration: 0.2 } }
              }
              className="group flex flex-col items-center gap-2 rounded-2xl border border-[var(--card-border)] bg-gradient-to-b from-violet-950/30 to-[var(--obsidian-elevated)]/80 p-3 text-center transition-shadow duration-300 hover:border-violet-400/30 hover:shadow-[0_0_28px_rgba(109,40,217,0.15)] sm:gap-3 sm:p-4"
            >
              <TechBrand name={t.name} Icon={t.Icon} compact />
              <span className="text-center text-xs font-medium leading-tight text-[var(--foreground)] sm:text-sm">
                {t.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-950/40 via-violet-950/10 to-[var(--obsidian-elevated)]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)]/60 bg-violet-500/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-[var(--electric-purple)]">
            <Sparkles className="size-3.5" />
            {m.stack.aiPill}
          </div>
          <div className="mt-1 flex items-start gap-2">
            <Brain
              className="mt-0.5 size-5 shrink-0 text-[var(--gold)]"
              strokeWidth={1.5}
            />
            <p className="text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
              {m.stack.aiBody}
            </p>
          </div>

          <h3 className="mb-3 mt-6 text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)]">
            {m.stack.aiTools}
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4">
            {aiTools.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i + coreTools.length}
                variants={slotVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-20px" }}
                whileHover={
                  reduce
                    ? undefined
                    : { y: -3, transition: { duration: 0.2 } }
                }
                className="group flex flex-col items-center gap-2 rounded-2xl border border-violet-400/20 bg-violet-950/25 p-3 text-center transition-shadow duration-300 hover:border-violet-400/40 hover:shadow-[0_0_24px_rgba(139,92,246,0.2)] sm:gap-3 sm:p-4"
              >
                <TechBrand name={t.name} Icon={t.Icon} compact />
                <span className="text-center text-xs font-medium leading-tight text-[var(--foreground)] sm:text-sm">
                  {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
