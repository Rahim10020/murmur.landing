import type { Dispatch, SetStateAction } from "react";
import { site } from "../config/site";
import { languages, type Lang } from "../content";

type FooterProps = {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
};

export default function Footer({ lang, setLang }: FooterProps) {
  return (
    <footer className="flex items-center justify-center gap-6 px-6 py-5 text-sm text-white/60">
      <div className="flex gap-2">
        {languages.map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={lang === l ? "font-bold text-white" : "hover:text-white"}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
      <a href={site.github} className="hover:text-white">
        GitHub
      </a>
      <span>{site.version}</span>
    </footer>
  );
}
