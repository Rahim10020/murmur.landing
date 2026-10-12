import { useState } from "react";
import CurvedPanel from "./components/CurvedPanel";
import DownloadButton from "./components/DownloadButton";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import { content, type Lang } from "./content";
import { site } from "./config/site";

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = content[lang];

  return (
    <main className="flex min-h-svh flex-col bg-foreground">
      <Marquee lang={lang} />
      <CurvedPanel>
        <Header lang={lang} setLang={setLang} />
        <div className="flex flex-1 flex-col items-center justify-center gap-12 py-12 text-center sm:py-16">
          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {t.title}
          </h1>
          <p className="mx-auto max-w-sm lg:max-w-4xl text-2xl lg:text-4xl font-normal text-foreground leading-relaxed">
            {t.subtitle}
          </p>
          <div className="mt-10">
            <DownloadButton href={site.apkUrl}>{t.cta}</DownloadButton>
          </div>
          <p className="mt-4 text-sm font-medium opacity-70 flex items-center gap-4">
            {t.meta}{" "}
            <a href={site.github} className="transition hover:text-black">
              GitHub
            </a>
            <span>{site.version}</span>
          </p>
        </div>
      </CurvedPanel>
    </main>
  );
}
