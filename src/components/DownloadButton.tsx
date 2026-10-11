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
      className="inline-flex items-center rounded-full bg-foreground px-24 py-6 text-lg font-medium text-clear transition hover:scale-105"
    >
      {children}
    </a>
  );
}
