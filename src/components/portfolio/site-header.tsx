"use client";

import { useLanguage } from "@/components/language-provider";
import { LOCALES } from "@/i18n/dictionary";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const { m, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#work", label: m.nav.work },
    { href: "#approach", label: m.nav.about },
    { href: "#achievements", label: m.nav.achievements },
    { href: "#stack", label: m.nav.stack },
    { href: "#contact", label: m.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:rgba(242,239,230,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="display-font text-lg font-extrabold tracking-tight">
          {m.nav.name}<span className="text-[var(--orange)]">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-6" aria-label="Page sections">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-[var(--ink-soft)] transition hover:text-[var(--ink)]">
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageSwitch locale={locale} setLocale={setLocale} label={m.nav.language} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch locale={locale} setLocale={setLocale} label={m.nav.language} compact />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--white)]"
            aria-expanded={open}
            aria-label={open ? m.nav.closeMenu : m.nav.openMenu}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-[var(--line)] bg-[var(--paper)] px-5 py-3 md:hidden" aria-label="Mobile page sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[var(--line)] py-3 text-base font-medium last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function LanguageSwitch({
  locale,
  setLocale,
  label,
  compact = false,
}: {
  locale: "en" | "ckb";
  setLocale: (locale: "en" | "ckb") => void;
  label: string;
  compact?: boolean;
}) {
  return (
    <div className="flex rounded-full border border-[var(--line)] bg-[var(--white)] p-0.5" role="group" aria-label={label}>
      {LOCALES.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setLocale(item.id)}
          className={`${compact ? "px-2 py-1 text-[10px]" : "px-2.5 py-1 text-xs"} rounded-full font-semibold transition ${
            locale === item.id ? "bg-[var(--ink)] text-[var(--paper)]" : "text-[var(--ink-soft)]"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
