"use client";

import { useLanguage } from "@/components/language-provider";
import {
  TELEGRAM_LINKS,
  TIKTOK_URL,
  WHATSAPP_LINKS,
} from "@/lib/contact-links";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Mail } from "lucide-react";
import { SiTelegram, SiTiktok, SiWhatsapp } from "react-icons/si";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const rowIn = (reduce: boolean) => (reduce ? false : { opacity: 0, y: 12 });

const rowView = (reduce: boolean) => (reduce ? undefined : { opacity: 1, y: 0 });

function LinkChip({
  href,
  children,
  accent,
}: {
  href: string;
  children: string;
  accent: "violet" | "emerald";
}) {
  const border =
    accent === "violet"
      ? "border-violet-500/30 hover:border-violet-400/50 hover:bg-violet-500/10"
      : "border-emerald-500/30 hover:border-emerald-400/50 hover:bg-emerald-500/10";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border px-3.5 py-1.5 font-mono text-sm text-[var(--foreground)]/95 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500/70 ${border}`}
    >
      {children}
    </a>
  );
}

function ChannelBlock({
  title,
  Icon,
  index,
  reduce,
  children,
}: {
  title: string;
  Icon: IconType;
  index: number;
  reduce: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="border-b border-[var(--card-border)]/60 px-4 py-5 last:border-b-0 sm:px-6 sm:py-6"
      initial={rowIn(reduce)}
      whileInView={rowView(reduce)}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.06 * index, ease }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--card-border)] bg-violet-950/35 text-[var(--electric-purple)]">
            <Icon className="size-5" aria-hidden />
          </div>
          <p className="text-sm font-medium text-[var(--foreground)]">{title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:justify-end sm:ps-4">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function ContactsSection() {
  const { m } = useLanguage();
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="contact"
      className="relative z-[1] px-4 pb-24 pt-2 md:px-6 md:pb-28 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--obsidian-elevated)]/50 px-3 py-1 text-xs font-mono uppercase tracking-wider text-[var(--foreground-muted)]">
          <Mail className="size-3.5 text-[var(--electric-purple)]" />
          {m.contact.pill}
        </div>
        <h2
          id="contact-heading"
          className="syne-display mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
        >
          {m.contact.heading}
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
          {m.contact.sub}
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--obsidian-elevated)]/40 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm">
          <motion.a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-[var(--card-border)]/60 px-4 py-5 transition hover:bg-violet-950/25 sm:px-6"
            initial={rowIn(reduce)}
            whileInView={rowView(reduce)}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--card-border)] bg-violet-950/35 text-[var(--electric-purple)]">
                <SiTiktok className="size-5" aria-hidden />
              </div>
              <div className="min-w-0 text-start">
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {m.contact.tiktok}
                </p>
                <p className="mt-0.5 truncate text-xs text-[var(--foreground-muted)] sm:text-sm">
                  @ahmadteachestech
                </p>
              </div>
            </div>
            <ChevronRight
              className="size-4 shrink-0 text-[var(--gold)]/80 transition group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              strokeWidth={2}
              aria-hidden
            />
          </motion.a>

          <ChannelBlock
            title={m.contact.telegram}
            Icon={SiTelegram}
            index={0}
            reduce={reduce}
          >
            {TELEGRAM_LINKS.map((l) => (
              <LinkChip key={l.e164} href={l.href} accent="violet">
                {l.display}
              </LinkChip>
            ))}
          </ChannelBlock>

          <ChannelBlock
            title={m.contact.whatsapp}
            Icon={SiWhatsapp}
            index={1}
            reduce={reduce}
          >
            {WHATSAPP_LINKS.map((l) => (
              <LinkChip key={l.e164} href={l.href} accent="emerald">
                {l.display}
              </LinkChip>
            ))}
          </ChannelBlock>
        </div>
      </div>
    </section>
  );
}
