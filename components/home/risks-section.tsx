import { LockKeyhole } from "lucide-react";
import { riskCards } from "@/lib/content";
import { SectionKicker } from "./section-kicker";

const accents = {
  emerald: "border-emerald-300/20 bg-emerald-400/10 text-emerald-300",
  amber: "border-amber-300/20 bg-amber-400/10 text-amber-300",
  rose: "border-rose-300/20 bg-rose-400/10 text-rose-300",
};

export function RisksSection() {
  return (
    <section
      id="problema"
      className="relative border-b border-white/5 bg-slate-950 py-24 sm:py-32"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <SectionKicker>O custo da pressa</SectionKicker>
            <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">
              O que acontece quando você pula o diagnóstico?
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
              As decisões mais caras de um SaaS costumam ser as primeiras. Antes
              de escrever código, vale colocar as escolhas certas sobre a mesa.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                <LockKeyhole className="size-4 text-emerald-300" />
              </span>{" "}
              Prevenção técnica é uma decisão de negócio.
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {riskCards.map((risk) => {
              const Icon = risk.icon;
              return (
                <article
                  key={risk.number}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900"
                >
                  <div className="mb-12 flex items-start justify-between">
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl border ${accents[risk.accent]}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-slate-600">
                      {risk.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {risk.title}
                  </h3>
                  <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-500">
                    {risk.description}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="font-mono text-xl text-slate-200">
                      {risk.stat}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-600">
                      {risk.statLabel}
                    </div>
                  </div>
                  <div className="absolute -right-7 -top-7 size-24 rounded-full bg-emerald-400/5 blur-2xl transition-all group-hover:bg-emerald-400/10" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
