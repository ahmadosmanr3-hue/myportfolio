export const TIKTOK_URL =
  "https://www.tiktok.com/@ahmadteachestech?is_from_webapp=1&sender_device=pc";

/** Local numbers; E.164 uses Iraq +964 (drop leading 0). */
export const PHONE_NUMBERS = [
  { display: "0770 919 4459", e164: "9647709194459" },
  { display: "0750 919 4459", e164: "9647509194459" },
] as const;

export const TELEGRAM_LINKS = PHONE_NUMBERS.map((p) => ({
  display: p.display,
  e164: p.e164,
  href: `https://t.me/+${p.e164}`,
}));

export const WHATSAPP_LINKS = PHONE_NUMBERS.map((p) => ({
  display: p.display,
  e164: p.e164,
  href: `https://wa.me/${p.e164}`,
}));
