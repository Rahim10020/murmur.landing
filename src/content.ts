export const languages = ["fr", "en"] as const;
export type Lang = (typeof languages)[number];

export const content: Record<
  Lang,
  {
    title: string;
    subtitle: string;
    cta: string;
    meta: string;
    marquee: string[];
  }
> = {
  fr: {
    title: "Une idée ? Murmurez-la.",
    subtitle:
      "100 % hors-ligne, sur votre téléphone. Rien n’est envoyé, rien n’est analysé. Programmez un rappel, ou laissez Murmur vous faire redécouvrir vos idées au bon moment.",
    cta: "Télécharger l'APK",
    meta: "Android · gratuit",
    marquee: [
      "murmure ton idée",
      "tes mots restent à toi",
      "gratuit · sans compte",
      "pense · murmure · rappelle",
    ],
  },
  en: {
    title: "Your title here",
    subtitle: "",
    cta: "Download the APK",
    meta: "Android · free · no account",
    marquee: [
      "whisper your idea",
      "your words stay yours",
      "free · no account",
      "think · whisper · recall",
    ],
  },
};
