export const TIKTOK_URL =
  "https://www.tiktok.com/@ahmadteachestech?is_from_webapp=1&sender_device=pc";

/** Local numbers; E.164 uses Iraq +964 (drop leading 0). */
export const PHONE_NUMBERS = [
  { display: "07509712149", e164: "9647509712149", tel: "tel:+9647509712149" },
] as const;

export const PHONE_LINKS = PHONE_NUMBERS.map((p) => ({
  display: p.display,
  href: p.tel,
}));

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
