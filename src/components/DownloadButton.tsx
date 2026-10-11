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
      className="inline-flex items-center rounded-full bg-foreground px-8 py-4 text-lg font-bold text-clear transition hover:scale-105"
    >
      {children}
    </a>
  );
}
