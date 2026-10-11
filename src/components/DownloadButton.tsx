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
      className="inline-flex items-center justify-center rounded-full bg-foreground px-10 py-4 text-xl font-medium text-clear shadow-lg transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 sm:px-16 sm:py-5"
    >
      {children}
    </a>
  );
}
