import { content, type Lang } from "../content";

export default function Marquee({ lang }: { lang: Lang }) {
  const phrases = content[lang].marquee;
  const row = phrases.join("  •  ") + "  •  ";

  return (
    <div
      aria-label="Bandeau défilant"
      className="relative overflow-hidden whitespace-nowrap bg-foreground py-2.5 text-sm font-medium text-clear"
    >
      <div className="animate-marquee inline-block will-change-transform">
        <span>{row.repeat(4)}</span>
        <span aria-hidden="true">{row.repeat(4)}</span>
      </div>
    </div>
  );
}
