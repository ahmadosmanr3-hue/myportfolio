export type Locale = "en" | "ckb";

export const LOCALES: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "ckb", label: "کوردی" },
];

export const messages = {
  en: {
    meta: {
      title: "Ahmad — Full-Stack Software Developer in Sulaimaniyah",
      description:
        "Portfolio of Ahmad, a full-stack developer building mobile apps, web products, backends, and practical AI integrations.",
    },
    nav: {
      name: "Ahmad",
      work: "Work",
      about: "How I work",
      achievements: "Achievements",
      stack: "Stack",
      video: "Video",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },
    hero: {
      availability: "Based in Sulaimaniyah · Open to software roles",
      hello: "Hi, I’m Ahmad.",
      headline: "I build software people can actually use.",
      body:
        "I’m a full-stack developer working across mobile, web, backend, and AI. I care about the last 10%: language, performance, admin tools, and the real-world details that make a product useful.",
      primaryCta: "See selected work",
      secondaryCta: "Talk to me",
      note: "Currently building",
      current: "BNYAD for iOS & Android",
    },
    projects: {
      eyebrow: "Selected work",
      heading: "Products I’ve built, not just concepts.",
      intro:
        "Three shipped products show how I work from interface to infrastructure. Status, stack, and my role are stated plainly.",
      roleLabel: "My role",
      builtLabel: "Built with",
      detailsLabel: "What I worked on",
      visit: "Visit live site",
      appStore: "View on the App Store",
      downloadAppStore: "Download on the App Store",
      googlePlay: "Get it on Google Play",
      shazar: {
        status: "Live",
        type: "Menswear e-commerce",
        title: "SHAZAR",
        summary:
          "A deployed storefront for a Kurdish menswear brand, designed for customers who browse and buy in English, Kurdish, or Arabic.",
        role:
          "I built the storefront, product and content administration, storage flow, and WhatsApp ordering experience end to end.",
        stack: ["Next.js", "Cloudflare Workers", "D1", "R2", "TypeScript"],
        details: [
          "EN / KU / AR storefront",
          "Product and homepage admin",
          "Cloud-hosted product media",
          "Cart handoff to WhatsApp",
        ],
        imageAlt: "Official SHAZAR logo",
      },
      bnyad: {
        status: "Available on iOS & Android · Active development",
        type: "Nutrition & fitness app",
        title: "BNYAD",
        summary:
          "A Flutter nutrition and fitness product available on both the App Store and Google Play, with development, improvements, and the premium plan continuing.",
        role:
          "I built the mobile product and its backend integration, including AI-assisted nutrition, health-data sync, multilingual flows, and goal tracking.",
        stack: ["Flutter", "Dart", "iOS", "Android", "REST API"],
        details: [
          "AI-assisted nutrition analysis",
          "HealthKit / Health Connect step tracking",
          "Personalized nutrition and fitness goals",
          "Premium plan in progress",
        ],
        imageAlt: "BNYAD nutrition and fitness app identity",
        awardNote:
          "Originally developed as Nutrify, BNYAD grew from an award-winning nutrition project into a mobile app. Its early achievements include a Silver Medal at the Iraq National Project Olympiad and a Bronze Award at the International STEAM Olympiad.",
      },
      kuber: {
        status: "Live on iOS & Android",
        type: "Taxi booking & delivery",
        title: "Kuber Taxi KRD",
        summary:
          "A mobile app for booking local taxi rides and sending packages safely, built around straightforward request and delivery flows.",
        role:
          "I worked on the localized mobile experience and the core ride-booking and delivery flows for the KRD market.",
        stack: ["Mobile app", "iOS", "Android", "App distribution"],
        details: [
          "On-demand taxi booking",
          "Package delivery requests",
          "Available on both major app stores",
          "Localized product experience",
        ],
        imageAlt: "Official Kuber Taxi KRD app icon",
      },
      archiveHeading: "More product work",
      archiveIntro:
        "Earlier projects that helped me develop product thinking across property and hospitality.",
      archive: [
        {
          name: "Xanu",
          type: "Real estate",
          body: "A bilingual property platform with discovery and VIP listing flows.",
        },
        {
          name: "Rosel",
          type: "Hospitality",
          body: "A QR ordering experience designed to make café service simpler.",
        },
      ],
    },
    approach: {
      eyebrow: "How I work",
      heading: "I like the part after the demo.",
      intro:
        "A prototype proves an idea. A useful product also needs the unglamorous pieces: content tools, edge cases, deployment, and a clear experience in the user’s language.",
      items: [
        {
          number: "01",
          title: "Start with the real workflow",
          body: "I map what a customer and an operator actually need to do before choosing the interface or stack.",
        },
        {
          number: "02",
          title: "Build both sides of the product",
          body: "I work across the customer experience, APIs, data, storage, and the admin tools needed to run it.",
        },
        {
          number: "03",
          title: "Treat localization as product work",
          body: "English, Kurdish, and Arabic affect layout, content, and testing—not just translation files.",
        },
      ],
    },
    achievements: {
      eyebrow: "A few things I’m proud of",
      heading: "Proof beyond the stack.",
      body: "Recognition matters most when it is tied to work that kept evolving.",
      feature: {
        title: "Award-Winning Innovation",
        path: "Nutrify → BNYAD",
        body:
          "Before becoming BNYAD, Nutrify earned a Silver Medal at the Iraq National Project Olympiad and a Bronze Award at the International STEAM Olympiad. These achievements helped shape the project's evolution into a mobile application.",
        silver: {
          title: "Silver Medal",
          event: "Iraq National Project Olympiad (INPO)",
          detail: "Project: Nutrify",
        },
        bronze: {
          title: "Bronze Award",
          event: "International STEAM Olympiad",
          detail: "Innovation Challenge · Project: Nutrify",
          proof: "Certificate of Participation",
        },
      },
      items: [
        {
          title: "International invitations",
          body: "Invited to Infomatrix and Robotek competitions.",
        },
        {
          title: "Open source",
          body: "I publish and maintain real project code on GitHub.",
        },
      ],
    },
    stack: {
      eyebrow: "Tools I reach for",
      heading: "A practical full-stack toolkit.",
      body:
        "The stack changes with the product. These are the tools I use most often to ship mobile apps, web products, APIs, and AI features.",
      groups: [
        { title: "Mobile", tools: ["Flutter", "Dart", "iOS", "Android"] },
        {
          title: "Web",
          tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "Backend & data",
          tools: ["Cloudflare Workers", "D1 / R2", "Node.js", "Laravel", "PostgreSQL"],
        },
        {
          title: "AI & delivery",
          tools: ["LLM integration", "RAG", "Python", "Docker", "Git", "Vercel"],
        },
      ],
    },
    video: {
      eyebrow: "Also behind the camera",
      heading: "Commercial video for local businesses.",
      body:
        "I shoot and edit storefront, product, and social video. It has made me better at visual storytelling—and at explaining technical work without hiding behind jargon.",
      cta: "See video work on TikTok",
    },
    contact: {
      eyebrow: "Let’s talk",
      heading: "Have a role or a product worth building?",
      body:
        "I’m available for software-development opportunities in Sulaimaniyah and for serious product collaborations.",
      whatsapp: "WhatsApp",
      phone: "Phone",
      telegram: "Telegram",
      tiktok: "TikTok",
      availability: "Usually replies within a day",
    },
    footer: {
      line: "Designed and built by Ahmad in Sulaimaniyah.",
      backToTop: "Back to top",
    },
  },
  ckb: {
    meta: {
      title: "ئەحمەد — گەشەپێدەری نەرمەکاڵا لە سلێمانی",
      description:
        "پۆرتفۆلیۆی ئەحمەد؛ گەشەپێدەری فول‌ستاک بۆ ئەپی مۆبایل، بەرهەمی وێب، باکئێند و AI.",
    },
    nav: {
      name: "ئەحمەد",
      work: "کارەکان",
      about: "شێوازی کارم",
      achievements: "دەستکەوتەکان",
      stack: "تەکنەلۆژیا",
      video: "ڤیدیۆ",
      contact: "پەیوەندی",
      openMenu: "کردنەوەی مێنیو",
      closeMenu: "داخستنی مێنیو",
      language: "زمان",
    },
    hero: {
      availability: "لە هەڵەبجە · ئامادەی هەلی کاری لە بواری سۆفتوەیر",
      hello: "سڵاو، من ئەحمەدم.",
      headline: "سۆفتوەیرێک دروست دەکەم کە خەڵک بەڕاستی بەکاری بهێنن.",
      body:
        "گەشەپێدەری فول‌ستاکم و لەسەر ئەپی مۆبایل، وێب، باکئێند و AI کار دەکەم. گرنگی بەو وردەکارییانە دەدەم کە بەرهەمێک بەسوود دەکەن: زمان، خێرایی، ئامرازەکانی بەڕێوەبردن و پێداویستییە ڕاستەقینەکان.",
      primaryCta: "بینینی کارە هەڵبژێردراوەکان",
      secondaryCta: "پەیوەندیم پێوە بکە",
      note: "ئێستا کاری لەسەر دەکەم",
      current: "BNYAD بۆ iOS و Android",
    },
    projects: {
      eyebrow: "کارە هەڵبژێردراوەکان",
      heading: "بەرهەمی دروستکراو؛ نەک تەنها بیرۆکە.",
      intro:
        "سێ بەرهەمی بڵاوکراوە کە شێوازی کارکردنم لە ڕووکارەوە تا ژێرخانە پیشان دەدەن. دۆخی پڕۆژە، تەکنەلۆژیاکان و بەشی من بەڕوونی نووسراون.",
      roleLabel: "بەشی من لە پڕۆژەکە",
      builtLabel: "تەکنەلۆژیاکان",
      detailsLabel: "وردەکارییە سەرەکییەکان",
      visit: "کردنەوەی وێبسایت",
      appStore: "بینین لە App Store",
      downloadAppStore: "داگرتن لە App Store",
      googlePlay: "داگرتن لە Google Play",
      shazar: {
        status: "ئۆنلاینە",
        type: "فرۆشگای ئۆنلاین بۆ جل‌وبەرگی پیاوان",
        title: "SHAZAR",
        summary:
          "فرۆشگایەکی ئۆنلاین بۆ براندێکی کوردیی جل‌وبەرگی پیاوان؛ بە کوردی، عەرەبی و ئینگلیزی کار دەکات.",
        role:
          "ڕووکاری کڕیار، بەڕێوەبردنی بەرهەم و ناوەڕۆک، هەڵگرتنی وێنەکان و ڕێڕەوی داواکردن لە واتسئاپم لە سەرەتا تا کۆتایی دروست کردووە.",
        stack: ["Next.js", "Cloudflare Workers", "D1", "R2", "TypeScript"],
        details: [
          "فرۆشگا بە کوردی / عەرەبی / ئینگلیزی",
          "بەڕێوەبردنی بەرهەم و پەڕەی سەرەکی",
          "هەڵگرتنی وێنە لە کلاود",
          "ناردنی سەبەتە بۆ واتسئاپ",
        ],
        imageAlt: "لۆگۆی فەرمی SHAZAR",
      },
      bnyad: {
        status: "لە iOS و Android بەردەستە · گەشەپێدان بەردەوامە",
        type: "ئەپی خۆراک و فیتنەس",
        title: "BNYAD",
        summary:
          "بەرهەمێکی Flutter بۆ خۆراک و فیتنەس کە ئێستا لە App Store و Google Play بەردەستە؛ گەشەپێدان، باشترکردن و پلانی پرێمیەم بەردەوامن.",
        role:
          "ئەپی مۆبایل و پەیوەندییەکانی بەکئێندم دروست کردووە؛ لەوانە هەڵسەنگاندنی خۆراک بە AI، هاوکاتکردنی داتای تەندروستی، ڕێڕەوی فرەزمانە و دیاریکردنی ئامانج.",
        stack: ["Flutter", "Dart", "iOS", "Android", "REST API"],
        details: [
          "هەڵسەنگاندنی خۆراک بە یارمەتی AI",
          "ژماردنی هەنگاو بە HealthKit / Health Connect",
          "ئامانجی تایبەتی خۆراک و فیتنەس",
          "پلانی پرێمیەم لە ژێر کاردایە",
        ],
        imageAlt: "ناسنامەی ئەپی خۆراک و فیتنەسی BNYAD",
        awardNote:
          "BNYAD لە سەرەتا بە ناوی Nutrify دروست کرا؛ پڕۆژەیەکی خۆراک کە دواتر گەشەی کرد بۆ ئەپێکی مۆبایل. دەستکەوتە سەرەتاییەکانی بریتین لە مەدالیای زیو لە INPO و خەڵاتی برۆنز لە International STEAM Olympiad.",
      },
      kuber: {
        status: "لە iOS و Android بەردەستە",
        type: "تاکسی و گەیاندن",
        title: "Kuber Taxi KRD",
        summary:
          "ئەپێکی مۆبایل بۆ داواکردنی تاکسی لە ناوخۆ و گەیاندنی پاکەت بە شێوەیەکی سادە و ئاسان.",
        role:
          "لەسەر ئەزموونی ناوخۆیی ئەپی مۆبایل و ڕێڕەوە سەرەکییەکانی داواکردنی تاکسی و گەیاندن بۆ بازاڕی کوردستان کارم کردووە.",
        stack: ["ئەپی مۆبایل", "iOS", "Android", "بڵاوکردنەوەی ئەپ"],
        details: [
          "داواکردنی تاکسی لە کاتی پێویست",
          "داواکاری گەیاندنی پاکەت",
          "لە هەردوو فرۆشگای سەرەکیی ئەپ بەردەستە",
          "ئەزموونێکی گونجاو بۆ بەکارهێنەری ناوخۆ",
        ],
        imageAlt: "ئایکۆنی فەرمی ئەپی Kuber Taxi KRD",
      },
      archiveHeading: "کاری زیاتری بەرهەم",
      archiveIntro:
        "پڕۆژەکانی پێشوو کە لە بواری خانووبەرە و میوانداری یارمەتییان دام بیرکردنەوەی بەرهەم باشتر تێبگەم.",
      archive: [
        {
          name: "Xanu",
          type: "خانووبەرە",
          body: "پلاتفۆرمێکی دووزمانە بۆ گەڕان و لیستی VIPی موڵک.",
        },
        {
          name: "Rosel",
          type: "میوانداری",
          body: "ئەزموونی داواکردن بە QR بۆ ئاسانکردنی خزمەتگوزاری قاوەخانە.",
        },
      ],
    },
    approach: {
      eyebrow: "شێوازی کارم",
      heading: "ئەو بەشەی دوای دیمۆم خۆش دەوێت.",
      intro:
        "پرۆتۆتایپ بیرۆکەیەک دەسەلمێنێت. بەرهەمی بەسوود پێویستی بە ئامرازی ناوەڕۆک، چارەسەری دۆخی تایبەت، بڵاوکردنەوە و ئەزموونێکی ڕوون بە زمانی بەکارهێنەر هەیە.",
      items: [
        {
          number: "٠١",
          title: "لە ڕێڕەوی ڕاستەقینەوە دەست پێ دەکەم",
          body: "پێش هەڵبژاردنی ڕووکار یان تەکنەلۆژیا، دیاری دەکەم کڕیار و بەڕێوەبەر بەڕاستی پێویستیان بە چییە.",
        },
        {
          number: "٠٢",
          title: "هەردوو لای بەرهەمەکە دروست دەکەم",
          body: "لە ئەزموونی کڕیار تا API، داتا، هەڵگرتن و ئامرازی بەڕێوەبردن کار دەکەم.",
        },
        {
          number: "٠٣",
          title: "فرەزمانی بەشێکە لە بەرهەم",
          body: "ئینگلیزی، کوردی و عەرەبی تەنها فایلێکی وەرگێڕان نین؛ کاریگەرییان لەسەر ڕووکار و تاقیکردنەوە هەیە.",
        },
      ],
    },
    achievements: {
      eyebrow: "چەند شتێک کە پێیان شانازم",
      heading: "بەڵگەی کار، لە دەرەوەی لیستی تەکنەلۆژیا.",
      body: "خەڵات و پێزانین کاتێک بەهادارن کە بەرهەمەکە دوایانیش بەردەوام بێت.",
      feature: {
        title: "داهێنانێکی خەڵات‌براو",
        path: "Nutrify → BNYAD",
        body:
          "پێش ئەوەی ببێتە BNYAD، پڕۆژەی Nutrify مەدالیای زیوی لە ئۆڵمپیادی نیشتمانی پڕۆژەکانی عێراق و خەڵاتی برۆنزی لە International STEAM Olympiad بەدەستهێنا. ئەم دەستکەوتانە یارمەتییان دا پڕۆژەکە گەشە بکات بۆ ئەپلیکەیشنێکی مۆبایل.",
        silver: {
          title: "مەدالیای زیو",
          event: "ئۆڵمپیادی نیشتمانی پڕۆژەکانی عێراق (INPO)",
          detail: "پڕۆژە: Nutrify",
        },
        bronze: {
          title: "خەڵاتی برۆنز",
          event: "International STEAM Olympiad",
          detail: "Innovation Challenge · پڕۆژە: Nutrify",
          proof: "بڕوانامەی بەشداریکردن",
        },
      },
      items: [
        {
          title: "بانگهێشتی نێودەوڵەتی",
          body: "بانگهێشتی پێشبڕکێکانی Infomatrix و Robotek کراوم.",
        },
        {
          title: "سەرچاوەکراوە",
          body: "کۆدی پڕۆژە ڕاستەقینەکان لە GitHub بڵاو دەکەمەوە و بەردەوام نوێیان دەکەمەوە.",
        },
      ],
    },
    stack: {
      eyebrow: "ئامرازەکانی کارم",
      heading: "کۆمەڵێک ئامرازی پراکتیکی بۆ کاری فول‌ستاک.",
      body:
        "تەکنەلۆژیا بە پێی بەرهەمەکە دەگۆڕێت. ئەمانە ئەو ئامرازانەن کە زۆرترین بەکاریان دەهێنم بۆ مۆبایل، وێب، API و تایبەتمەندی AI.",
      groups: [
        { title: "مۆبایل", tools: ["Flutter", "Dart", "iOS", "Android"] },
        {
          title: "وێب",
          tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        },
        {
          title: "بەکئێند و داتا",
          tools: ["Cloudflare Workers", "D1 / R2", "Node.js", "Laravel", "PostgreSQL"],
        },
        {
          title: "AI و بڵاوکردنەوە",
          tools: ["LLM integration", "RAG", "Python", "Docker", "Git", "Vercel"],
        },
      ],
    },
    video: {
      eyebrow: "لە پشت کامێراش",
      heading: "ڤیدیۆی بازرگانی بۆ کاروباری ناوخۆیی.",
      body:
        "ڤیدیۆ بۆ فرۆشگا، بەرهەم و تۆڕە کۆمەڵایەتییەکان دەگرم و دەستکاری دەکەم. ئەم ئەزموونە یارمەتیم داوە لە چیرۆکگێڕانی بینراو و ڕوونکردنەوەی کاری تەکنیکی.",
      cta: "بینینی کاری ڤیدیۆ لە TikTok",
    },
    contact: {
      eyebrow: "با قسە بکەین",
      heading: "هەلی کار یان بیرۆکەی بەرهەمێکت هەیە؟",
      body:
        "بۆ هەلی کاری گەشەپێدانی نەرمەکاڵا لە سلێمانی و هاوکاری جدی بەرهەم ئامادەم.",
      whatsapp: "واتسئاپ",
      phone: "تەلەفۆن",
      telegram: "تێلیگرام",
      tiktok: "تیکتۆک",
      availability: "زۆرجار لە ماوەی ڕۆژێکدا وەڵام دەدەمەوە",
    },
    footer: {
      line: "دیزاین و دروستکراوە لەلایەن ئەحمەد لە سلێمانی.",
      backToTop: "گەڕانەوە بۆ سەرەوە",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function isRtl(locale: Locale) {
  return locale === "ckb";
}
