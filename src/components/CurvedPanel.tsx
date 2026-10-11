import type { ReactNode } from "react";

export default function CurvedPanel({ children }: { children: ReactNode }) {
  return (
    <section className="relative mx-3 mt-3 flex flex-1 flex-col overflow-hidden rounded-t-[2.5rem] bg-primary text-foreground sm:mx-4 sm:mt-4">
      <div className="relative z-10 flex w-full flex-1 flex-col px-6 pb-[calc(var(--curve)+1.5rem)] sm:px-10">
        {children}
      </div>

      {/* Courbe concave : ellipse couleur du fond (sombre), centrée sur le bord bas */}
      <div
        aria-hidden="true"
        className="absolute bottom-[calc(var(--curve)*-1)] left-1/2 h-[calc(var(--curve)*2)] w-[130%] -translate-x-1/2 rounded-[50%] bg-foreground"
      />
    </section>
  );
}
