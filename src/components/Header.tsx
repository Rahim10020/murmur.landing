import type { Dispatch, SetStateAction } from "react";
import { languages, type Lang } from "../content";

type HeaderProps = {
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
};

export default function Header({ lang, setLang }: HeaderProps) {
  return (
    <header className="flex w-full items-center justify-between pt-5 sm:pt-6">
      <a href="#" aria-label="Murmur — accueil" className="shrink-0">
        <img
          src="/logo.svg"
          alt="Logo Murmur"
          width={56}
          height={56}
          className="h-10 w-10 rounded-full sm:h-12 sm:w-12 md:h-14 md:w-14"
        />
      </a>

      <nav
        aria-label="Sélecteur de langue"
        className="flex items-center gap-1 rounded-full bg-foreground px-2 py-1.5 text-sm text-clear shadow-md"
      >
        {languages.map((l, i) => (
          <span key={l} className="flex items-center gap-1">
            {i > 0 && (
              <span aria-hidden="true" className="text-clear/40">
                |
              </span>
            )}
            <button
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              aria-label={l === "fr" ? "Français" : "English"}
              className={
                lang === l
                  ? "rounded-full px-3 py-1 font-medium text-primary cursor-pointer"
                  : "rounded-full px-3 py-1 font-medium text-clear/60 transition hover:text-clear cursor-pointer"
              }
            >
              {l.toUpperCase()}
            </button>
          </span>
        ))}
      </nav>
    </header>
  );
}
