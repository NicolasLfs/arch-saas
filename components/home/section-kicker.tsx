import type { ReactNode } from "react";

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <div className=" mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
      <span className="h-px w-7 bg-emerald-400/70" />
      {children}
    </div>
  );
}
