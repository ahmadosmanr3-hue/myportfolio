"use client";

import type { PublicPortrait } from "@/lib/get-portrait";
import { AchievementsMarquee } from "./achievements-marquee";
import { BentoProjects } from "./bento-projects";
import { ContactsSection } from "./contacts-section";
import { Hero } from "./hero";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { TechStack } from "./tech-stack";
import { VideoCommercialSection } from "./video-commercial-section";
import { WorkingStyle } from "./working-style";

export function PageShell({ portrait }: { portrait: PublicPortrait | null }) {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero portrait={portrait} />
        <BentoProjects />
        <WorkingStyle />
        <AchievementsMarquee />
        <TechStack />
        <VideoCommercialSection />
        <ContactsSection />
      </main>
      <SiteFooter />
    </>
  );
}
