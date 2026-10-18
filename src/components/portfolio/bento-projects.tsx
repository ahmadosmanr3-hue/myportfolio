"use client";

import { useLanguage } from "@/components/language-provider";
import { ArrowUpRight, Award, Check, Globe2 } from "lucide-react";
import Image from "next/image";
import type { IconType } from "react-icons";
import { SiApple, SiGoogleplay } from "react-icons/si";

type ProjectKind = "shazar" | "bnyad" | "kuber";

type ProjectCopy = {
  readonly status: string;
  readonly type: string;
  readonly title: string;
  readonly summary: string;
  readonly role: string;
  readonly stack: readonly string[];
  readonly details: readonly string[];
  readonly imageAlt: string;
  readonly awardNote?: string;
};

type ProjectLink = {
  href: string;
  label: string;
  icon: IconType | typeof Globe2;
};

export function BentoProjects() {
  const { m } = useLanguage();
  const p = m.projects;

  return (
    <section
      id="work"
      className="section-rule scroll-mt-16 px-5 py-20 md:px-8 md:py-28"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro eyebrow={p.eyebrow} heading={p.heading} body={p.intro} id="work-heading" />

        <div className="mt-12 space-y-8">
          <ProjectCard
            project={p.shazar}
            kind="shazar"
            roleLabel={p.roleLabel}
            builtLabel={p.builtLabel}
            detailsLabel={p.detailsLabel}
            links={[{ href: "https://shazar.group", label: p.visit, icon: Globe2 }]}
          />
          <ProjectCard
            project={p.bnyad}
            kind="bnyad"
            roleLabel={p.roleLabel}
            builtLabel={p.builtLabel}
            detailsLabel={p.detailsLabel}
            links={[
              {
                href: "https://apps.apple.com/iq/app/bnyad/id6781387722",
                label: p.downloadAppStore,
                icon: SiApple,
              },
              {
                href: "https://play.google.com/store/apps/details?id=com.bnyad.app",
                label: p.googlePlay,
                icon: SiGoogleplay,
              },
            ]}
          />
          <ProjectCard
            project={p.kuber}
            kind="kuber"
            roleLabel={p.roleLabel}
            builtLabel={p.builtLabel}
            detailsLabel={p.detailsLabel}
            reverse
            links={[
              {
                href: "https://apps.apple.com/dk/app/kuber-taxi-krd/id6759533373",
                label: p.appStore,
                icon: SiApple,
              },
              {
                href: "https://play.google.com/store/apps/details?id=com.havally.kuber.com",
                label: p.googlePlay,
                icon: SiGoogleplay,
              },
            ]}
          />
        </div>

        <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h3 className="display-font text-3xl font-bold tracking-tight">{p.archiveHeading}</h3>
            <p className="mt-3 max-w-sm leading-7 text-[var(--ink-soft)]">{p.archiveIntro}</p>
          </div>
          <div className="grid sm:grid-cols-2">
            {p.archive.map((item, index) => (
              <article
                key={item.name}
                className={`border-[var(--line)] py-6 sm:px-6 ${
                  index % 2 === 0 ? "sm:border-r rtl:sm:border-l rtl:sm:border-r-0" : ""
                } ${index > 1 ? "border-t" : index === 1 ? "border-t sm:border-t-0" : ""}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--orange)]">{item.type}</p>
                <h4 className="display-font mt-2 text-xl font-bold">{item.name}</h4>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  kind,
  roleLabel,
  builtLabel,
  detailsLabel,
  links,
  reverse = false,
}: {
  project: ProjectCopy;
  kind: ProjectKind;
  roleLabel: string;
  builtLabel: string;
  detailsLabel: string;
  links: ProjectLink[];
  reverse?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[var(--white)]">
      <div className="grid lg:grid-cols-2">
        <ProjectVisual project={project} kind={kind} reverse={reverse} />

        <div className={`flex flex-col p-6 sm:p-9 lg:p-10 ${reverse ? "lg:order-1" : ""}`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green)]">{project.type}</p>
            <span className="rounded-full bg-[var(--green-soft)] px-3 py-1 text-xs font-bold text-[var(--green)]">
              {project.status}
            </span>
          </div>
          <h3 className="display-font mt-5 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">{project.title}</h3>
          <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">{project.summary}</p>

          {project.awardNote ? (
            <div className="mt-6 flex gap-3 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4 text-[var(--ink)]">
              <Award className="mt-0.5 size-5 shrink-0" strokeWidth={1.8} />
              <p className="text-sm font-semibold leading-6">{project.awardNote}</p>
            </div>
          ) : null}

          <div className="mt-7 border-s-2 border-[var(--orange)] ps-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--orange)]">{roleLabel}</p>
            <p className="mt-2 text-sm leading-6">{project.role}</p>
          </div>

          <div className="mt-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-soft)]">{detailsLabel}</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-2 text-sm text-[var(--ink-soft)]">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--green)]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-soft)]">{builtLabel}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2.5 text-sm font-bold text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--green)]"
                >
                  <Icon className="size-4" />
                  {link.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project, kind, reverse }: { project: ProjectCopy; kind: ProjectKind; reverse: boolean }) {
  if (kind === "shazar") {
    return (
      <div
        className={`project-visual relative min-h-[320px] overflow-hidden bg-[#080808] ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(221,90,42,0.18),transparent_52%)]" />
        <div className="absolute inset-0 flex items-center justify-center p-10 sm:p-16">
          <Image
            src="/projects/shazar-logo.png"
            alt={project.imageAlt}
            width={1200}
            height={206}
            className="h-auto w-full max-w-xl object-contain"
          />
        </div>
        <StatusChip status={project.status} dark />
      </div>
    );
  }

  if (kind === "kuber") {
    return (
      <div
        className={`project-visual relative min-h-[360px] overflow-hidden bg-[#eee7fa] ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="absolute -left-16 -top-16 size-64 rounded-full bg-[#8d24ef]/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-16 size-72 rounded-full bg-[var(--orange)]/10 blur-3xl" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="relative w-full max-w-[260px]">
            <div className="absolute -inset-5 rotate-3 rounded-[3.5rem] border border-[#8d24ef]/20" />
            <Image
              src="/projects/kuber-icon.jpg"
              alt={project.imageAlt}
              width={512}
              height={512}
              className="relative aspect-square w-full rounded-[3rem] border border-black/10 object-cover shadow-[0_32px_70px_rgba(72,24,112,0.22)]"
            />
          </div>
        </div>
        <StatusChip status={project.status} />
      </div>
    );
  }

  return (
    <div
      className={`project-visual relative min-h-[360px] overflow-hidden bg-[#dce8d7] ${reverse ? "lg:order-2" : ""}`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-10">
        <div className="relative flex aspect-[9/16] h-[82%] min-h-72 items-center justify-center overflow-hidden rounded-[2rem] border-[8px] border-[var(--ink)] bg-[var(--white)] shadow-[0_28px_60px_rgba(33,77,62,0.2)]">
          <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-[var(--ink)]" />
          <Image
            src="/projects/bnyad-logo.png"
            alt={project.imageAlt}
            className="h-auto w-[72%] object-contain"
            width={512}
            height={512}
          />
          <div className="absolute inset-x-5 bottom-5 rounded-xl bg-[var(--green)] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            iOS · Android
          </div>
        </div>
      </div>
      <StatusChip status={project.status} />
    </div>
  );
}

function StatusChip({ status, dark = false }: { status: string; dark?: boolean }) {
  return (
    <div
      className={`absolute left-6 top-6 max-w-[calc(100%-3rem)] rounded-full px-3 py-1.5 text-xs font-bold rtl:left-auto rtl:right-6 ${
        dark ? "bg-white/12 text-white backdrop-blur" : "bg-[var(--orange)] text-white"
      }`}
    >
      {status}
    </div>
  );
}

function SectionIntro({ eyebrow, heading, body, id }: { eyebrow: string; heading: string; body: string; id: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--orange)]">{eyebrow}</p>
        <h2
          id={id}
          className="display-font mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl"
        >
          {heading}
        </h2>
      </div>
      <p className="max-w-xl text-base leading-7 text-[var(--ink-soft)] lg:justify-self-end">{body}</p>
    </div>
  );
}
