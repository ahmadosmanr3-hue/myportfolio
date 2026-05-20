export type Locale = "en" | "ckb";

export const LOCALES: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "ckb", label: "کوردی" },
];

export type Messages = {
  meta: { title: string; description: string };
  nav: {
    portfolio: string;
    work: string;
    achievements: string;
    stack: string;
    video: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  hero: {
    kicker: string;
    titleBefore: string;
    titleHighlight: string;
    body: string;
    chip1: string;
    chip2: string;
    ctaWork: string;
    ctaStack: string;
  };
  projects: {
    heading: string;
    sub: string;
    silverMedal: string;
    items: Record<
      "kuber" | "xanu" | "nutrify" | "rosel",
      { tag: string; desc: string }
    >;
  };
  achievements: {
    silver: string;
    international: string;
    oss: string;
  };
  stack: {
    pill: string;
    heading: string;
    sub: string;
    platforms: string;
    aiPill: string;
    aiBody: string;
    aiTools: string;
  };
  video: {
    pill: string;
    heading: string;
    body: string;
    bullets: [string, string, string];
    cta: string;
    tagReels: string;
    tagAds: string;
    tagShops: string;
    formatsLabel: string;
  };
  contact: {
    pill: string;
    heading: string;
    sub: string;
    tiktok: string;
    telegram: string;
    whatsapp: string;
  };
  footer: { backToTop: string };
  oval: { addHint: string; altProfile: string };
};

export const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      title: "Full-Stack Developer, Tech Creator & Videographer | Portfolio",
      description:
        "Developer, tech creator, and commercial videographer—apps, AI, and ad-ready video for shops and businesses.",
    },
    nav: {
      portfolio: "Portfolio",
      work: "Work",
      achievements: "Achievements",
      stack: "Stack",
      video: "Video",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },
    hero: {
      kicker: "Portfolio · 2026",
      titleBefore: "Full-Stack Developer &",
      titleHighlight: "Tech Content Creator",
      body:
        "I design and ship zero-cost, high-performance applications—from mobile and web to local-first experiences—without compromising polish or speed.",
      chip1: "Zero-cost stack",
      chip2: "High performance",
      ctaWork: "View work",
      ctaStack: "Tech stack",
    },
    projects: {
      heading: "Project grid",
      sub: "A bento of shipped products and platforms—each built for performance, clarity, and scale.",
      silverMedal: "Silver medal",
      items: {
        kuber: {
          tag: "Mobility",
          desc: "Localized mobility and taxi solution tuned for real-world traffic and rider trust.",
        },
        xanu: {
          tag: "Real estate",
          desc: "Bilingual real estate platform with VIP listings and premium discovery.",
        },
        nutrify: {
          tag: "Awarded",
          desc: "Award-winning nutrition app focused on habits, clarity, and sustainable outcomes.",
        },
        rosel: {
          tag: "Hospitality",
          desc: "Cafe ordering with seamless QR flow—faster service, calmer front-of-house.",
        },
      },
    },
    achievements: {
      silver: "Silver Medal Winner",
      international:
        "International Competition Invitee (Infomatrix / Robotek)",
      oss: "Open Source Contributor",
    },
    stack: {
      pill: "Tooling",
      heading: "Tech stack vault",
      sub: "End-to-end stack for mobile, web, APIs, data, and design—from first prototype to production deploys.",
      platforms: "Platforms & product",
      aiPill: "AI expertise",
      aiBody:
        "LLM integrations, RAG, and tool-calling agents; prompt & context design; safe guardrails; evals and cost-aware routing. Comfortable from hosted APIs to local / open models for privacy-sensitive work.",
      aiTools: "AI & ML tooling",
    },
    video: {
      pill: "Commercial video",
      heading: "Shooting for shops & brands",
      body:
        "Beyond code—I shoot and edit advertising and social-ready video for storefronts, cafés, salons, and local businesses. Fast hooks, clean framing, and delivery formats that fit your feeds.",
      bullets: [
        "On-location promos, interiors, and product showcases",
        "Campaign cuts for Instagram, TikTok, and paid ads",
        "Direction, lighting, and edit—one contact end to end",
      ],
      cta: "See work on TikTok",
      tagReels: "Reels & Shorts",
      tagAds: "Ad spots",
      tagShops: "Shop walkthroughs",
      formatsLabel: "Formats",
    },
    contact: {
      pill: "Contact",
      heading: "Let's connect",
      sub: "Same numbers work on both Telegram and WhatsApp—pick whichever you use.",
      tiktok: "TikTok",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
    },
    footer: { backToTop: "Back to top" },
    oval: {
      addHint: "Add",
      altProfile: "Profile photo",
    },
  },
  ckb: {
    meta: {
      title: "گەشەپێدەری تەواو ستاک و دروستکەری ناوەڕۆکی تەکنەلۆژیا | پۆرتفۆلیۆ",
      description:
        "گەشەپێدەر، دروستکەری ناوەڕۆکی تەک، و وێنەگرە لە ڤیدیۆی ڕیکلامی—ئەپ، AI، و ڤیدیۆ بۆ فرۆشگا و بزنس.",
    },
    nav: {
      portfolio: "پۆرتفۆلیۆ",
      work: "کارەکان",
      achievements: "دەستکەوتەکان",
      stack: "تەکنەلۆژیا",
      video: "ڤیدیۆ",
      contact: "پەیوەندی",
      openMenu: "کردنەوەی لیست",
      closeMenu: "داخستنەوەی لیست",
      language: "زمان",
    },
    hero: {
      kicker: "پۆرتفۆلیۆ · ٢٠٢٦",
      titleBefore: "گەشەپێدەری تەواو ستاک و",
      titleHighlight: "دروستکەری ناوەڕۆکی تەکنەلۆژیا",
      body:
        "ئەپ و سیستەم دروست دەکەم کە تێچووی کەمن و خێرا و باشن—ژێر مۆبایل و وێب تا ئەزموونی نزیک لە ئامێر—بێ ئەوەی کوالیتی کەم بکەم.",
      chip1: "ستاکی تێچووی کەم",
      chip2: "کارایی بەرز",
      ctaWork: "بینینی کارەکان",
      ctaStack: "تەکنەلۆژیا",
    },
    projects: {
      heading: "تۆڕی پڕۆژەکان",
      sub: "کۆمەڵێک بەرهەمی تەواو و پلاتفۆرم—هەمووی بۆ کارایی، ڕوونایی و پێوانەی گەورە.",
      silverMedal: "مەدالیای زێڕین",
      items: {
        kuber: {
          tag: "گواستنەوە",
          desc: "ڕاگەیاندنی تاکسی و گواستنەوە بۆ ترافیک و متمانەی سەرنشین.",
        },
        xanu: {
          tag: "موڵک و ماڵ",
          desc: "پلاتفۆرمی خانووبەرە بە دوو زمان و لیستی تایبەت و دۆزینەوەی پریمیۆم.",
        },
        nutrify: {
          tag: "خەڵاتدراو",
          desc: "ئەپی خۆراکناسی بە خەڵات—سەرنج لە ئادات، ڕوونی و ئەنجامی درێژخایەن.",
        },
        rosel: {
          tag: "میوانداری",
          desc: "داواکردن لە قەهەوخانە بە QRی بە ئاسانی—خێراتر و بە ئاسوودەیی بۆ کارمەندان.",
        },
      },
    },
    achievements: {
      silver: "براوەی مەدالیای زێڕین",
      international:
        "بانگهێنراوی پێشبڕکێی نێودەوڵەتی (Infomatrix / Robotek)",
      oss: "بەشداربوو لە سەرچاوە کراوە",
    },
    stack: {
      pill: "ئامرازەکان",
      heading: "تەکنەلۆژیای بەکارهێنراو",
      sub: "هەموو ستاک بۆ مۆبایل، وێب، API، زانیاری و دیزاین—لە یەکەم نموونە تا بڵاوکردنەوەی کۆتایی.",
      platforms: "پلاتفۆرم و بەرهەم",
      aiPill: "شارەزایی AI",
      aiBody:
        "دامەزراندنی LLM، RAG و ئەجێنتی ئامراز؛ دیزاینی پرۆمپت و کۆنتێکست؛ پاراستن و هەڵسەنگاندن؛ ڕێکار بەپێی تێچوو. ئامادەم لە APIی دەستبەر تا مۆدێلی کراوە بۆ کارە تایبەتمەند.",
      aiTools: "ئامرازەکانی AI و ML",
    },
    video: {
      pill: "ڤیدیۆی ڕیکلامی",
      heading: "وێنەگرتن بۆ فرۆشگا و براند",
      body:
        "جگە لە کۆد—ڤیدیۆی ڕیکلام و سۆشیال دروست دەکەم بۆ فرۆشگا، قەهەوخانە، سەلۆن و بزنسی ناوخۆیی. دەستپێکی بەهێز، ڕێکخستنی دیمەن، و دابەشکردن بە فۆرمات گونجاو بۆ فیدەکانت.",
      bullets: [
        "ڕیکلام لە شوێن، ناوەوە، و پیشاندانی بەرهەم",
        "بڕبڕ بۆ ئینستاگرام، تیکتۆک، و ڕیکلامی پارەدراو",
        "ڕێنوونی، ڕووناکی، و مۆنتاژ—تەنها یەک پەیوەندی بۆ کۆتایی",
      ],
      cta: "بینین لەسەر تیکتۆک",
      tagReels: "Reels و Shorts",
      tagAds: "ڕیکلامی کورت",
      tagShops: "گەشتنامەی فرۆشگا",
      formatsLabel: "فۆرماتەکان",
    },
    contact: {
      pill: "پەیوەندی",
      heading: "پەیوەندی بگرە",
      sub: "هەردوو ژمارە لە تێلێگرام و وەتسئەپدا کاردەکەن—ئەو شوێنەی بەکاردەهێنیت هەڵیبژێرە.",
      tiktok: "تیکتۆک",
      telegram: "تێلێگرام",
      whatsapp: "وەتسئەپ",
    },
    footer: { backToTop: "گەڕانەوە بۆ سەرەوە" },
    oval: {
      addHint: "زیاد بکە",
      altProfile: "وێنەی پڕۆفایل",
    },
  },
};

export function isRtl(locale: Locale): boolean {
  return locale === "ckb";
}
