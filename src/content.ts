export const languages = ["fr", "en"] as const;
export type Lang = (typeof languages)[number];

export const content: Record<Lang, { title: string; cta: string; meta: string }> = {
  fr: {
    title: "Ton titre ici",
    cta: "Télécharger l'APK",
    meta: "Android · gratuit · sans compte",
  },
  en: {
    title: "Your title here",
    cta: "Download the APK",
    meta: "Android · free · no account",
  },
};
