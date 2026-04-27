"use client";

import type { PublicPortrait } from "@/lib/get-portrait";
import { motion } from "framer-motion";
import { AchievementsMarquee } from "./achievements-marquee";
import { BentoProjects } from "./bento-projects";
import { CursorGlow } from "./cursor-glow";
import { ContactsSection } from "./contacts-section";
import { Hero } from "./hero";
import { ScrollProgress } from "./scroll-progress";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { TechStack } from "./tech-stack";

const mainVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

type PageShellProps = {
  portrait: PublicPortrait | null;
};

export function PageShell({ portrait }: PageShellProps) {
  return (
    <>
      <ScrollProgress />
      <SiteHeader portrait={portrait} />
      <motion.main
        id="top"
        className="flex flex-1 flex-col pt-14 sm:pt-16"
        initial="hidden"
        animate="show"
        variants={mainVariants}
      >
        <div className="noise-overlay pointer-events-none fixed inset-0 -z-10" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[var(--obsidian)]" />
        <div className="bg-cyber-grid pointer-events-none fixed inset-0 -z-10 opacity-50" />
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 100% 55% at 50% -8%, rgba(109, 40, 217, 0.35), transparent 58%)",
          }}
        />
        <div
          className="pointer-events-none fixed bottom-0 left-1/2 -z-10 h-[50vh] w-[min(100%,900px)] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(79, 70, 229, 0.12), transparent 70%)",
          }}
        />
        <CursorGlow />
        <Hero portrait={portrait} />
        <BentoProjects />
        <AchievementsMarquee />
        <TechStack />
        <ContactsSection />
        <SiteFooter />
      </motion.main>
    </>
  );
}
