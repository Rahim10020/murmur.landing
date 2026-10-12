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
    title: "Vous avez une idée ? Murmurez-la.",
    subtitle:
      "Programmez un rappel, ou laissez Murmur vous faire redécouvrir vos idées au bon moment. 100 % hors-ligne, sur votre téléphone. Rien n’est envoyé, rien n’est analysé.",
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
    title: "Got an idea? Whisper it.",
    subtitle:
      "Schedule a reminder, or let Murmur bring your ideas back to you at the right moment. 100% offline, on your phone. Nothing is sent, nothing is analyzed.",
    cta: "Download the APK",
    meta: "Android · free",
    marquee: [
      "whisper your idea",
      "your words stay yours",
      "free · no account",
      "think · whisper · recall",
    ],
  },
};
