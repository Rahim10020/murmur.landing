import { useState } from "react";
import CurvedPanel from "./components/CurvedPanel";
import DownloadButton from "./components/DownloadButton";
import Footer from "./components/Footer";
import { content, type Lang } from "./content";
import { site } from "./config/site";

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const t = content[lang];

  return (
    <main className="flex min-h-svh flex-col bg-foreground">
      <CurvedPanel>
        <h1 className="mx-auto max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          {t.title}
        </h1>
        <div className="mt-10">
          <DownloadButton href={site.apkUrl}>{t.cta}</DownloadButton>
        </div>
        <p className="mt-4 text-sm opacity-80">{t.meta}</p>
      </CurvedPanel>
      <Footer lang={lang} setLang={setLang} />
    </main>
  );
}
