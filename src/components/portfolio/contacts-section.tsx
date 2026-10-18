"use client";

import { useLanguage } from "@/components/language-provider";
import { PHONE_LINKS, TELEGRAM_LINKS, TIKTOK_URL, WHATSAPP_LINKS } from "@/lib/contact-links";
import { ArrowUpRight, Clock3, Phone } from "lucide-react";

export function ContactsSection() {
  const { m } = useLanguage();
  const c = m.contact;
  const links = [
    { label: c.phone, detail: PHONE_LINKS[0].display, href: PHONE_LINKS[0].href, external: false },
    { label: c.whatsapp, detail: WHATSAPP_LINKS[0].display, href: WHATSAPP_LINKS[0].href, external: true },
    { label: c.telegram, detail: TELEGRAM_LINKS[0].display, href: TELEGRAM_LINKS[0].href, external: true },
    { label: c.tiktok, detail: "@ahmadteachestech", href: TIKTOK_URL, external: true },
  ];

  return (
    <section id="contact" className="scroll-mt-16 bg-[var(--ink)] px-5 py-20 text-[var(--paper)] md:px-8 md:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0a07e]">{c.eyebrow}</p>
          <h2 id="contact-heading" className="display-font mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-6xl">{c.heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65">{c.body}</p>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-white/60"><Clock3 className="size-4" />{c.availability}</p>
        </div>
        <div className="self-end border-t border-white/20">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 border-b border-white/20 py-5"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">{link.label}</p>
                <p className="mt-1 font-semibold">{link.detail}</p>
              </div>
              {link.external ? (
                <ArrowUpRight className="size-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              ) : (
                <Phone className="size-5 transition group-hover:-translate-y-0.5" />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
