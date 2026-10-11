import type { ReactNode } from "react";

export default function DownloadButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      download
      className="inline-flex items-center rounded-full bg-clear px-8 py-4 text-lg font-bold text-foreground transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      {children}
    </a>
  );
}
