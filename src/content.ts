export const languages = ["fr", "en"] as const;
export type Lang = (typeof languages)[number];

export const content: Record<
  Lang,
  { title: string; cta: string; meta: string }
> = {
  fr: {
    title:
      "Une idée ? Murmurez-la. Vos mots restent à vous. On vous la rappelle.",
    cta: "Télécharger l'APK",
    meta: "Android · gratuit",
  },
  en: {
    title: "Your title here",
    cta: "Download the APK",
    meta: "Android · free · no account",
  },
};
