import { content, type Lang } from "../content";

export default function Marquee({ lang }: { lang: Lang }) {
  const phrases = content[lang].marquee;
  const row = phrases.join("   •   ") + "   •   ";

  return (
    <div
      aria-label="Bandeau défilant"
      className="relative overflow-hidden whitespace-nowrap bg-foreground py-2.5 text-xl font-medium text-clear"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="animate-marquee inline-block will-change-transform">
        <span>{row.repeat(2)}</span>
        <span aria-hidden="true">{row.repeat(2)}</span>
      </div>
    </div>
  );
}
