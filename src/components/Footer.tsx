import { site } from "../config/site";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 px-6 py-5 text-sm text-white/60">
      <a href={site.github} className="transition hover:text-white">
        GitHub
      </a>
      <span>{site.version}</span>
    </footer>
  );
}
