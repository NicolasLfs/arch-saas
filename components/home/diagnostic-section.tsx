import { BadgeCheck, Database } from "lucide-react";
import { ArchitectureDiagnostic } from "./architecture-diagnostic";
import { pillars } from "@/lib/content";
import { SectionKicker } from "./section-kicker";

export function DiagnosticSection() {
  return (
    <section
      id="diagnostico"
      className="relative overflow-hidden border-b border-white/5 bg-slate-900/55 py-24 sm:py-32"
    >
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_30%,rgba(52,211,153,0.08),transparent_52%)]" />
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-24">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 p-2 shadow-2xl">
              <ArchitectureDiagnostic />
              <div className="absolute bottom-6 left-6 rounded-xl border border-emerald-300/20 bg-slate-950/80 px-3 py-2 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-200">
                  <span className="size-1.5 rounded-full bg-emerald-400" />{" "}
                  production-ready thinking
                </div>
              </div>
            </div>
            <div className="absolute -right-5 -top-6 hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 p-3 shadow-xl sm:flex">
              <span className="flex size-9 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <Database className="size-4" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-slate-600">
                  Data layer
                </div>
                <div className="text-sm font-medium text-slate-200">
                  PostgreSQL em escala
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionKicker>O diagnóstico</SectionKicker>
            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Um olhar de engenheiro no seu SaaS.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              Você não precisa de mais uma opinião genérica. Precisa de alguém
              que já colocou produtos digitais em produção para transformar
              incerteza em decisões práticas.
            </p>
            <div className="mt-9 space-y-7">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="group flex gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-emerald-300 transition-colors group-hover:border-emerald-300/30 group-hover:bg-emerald-400/10">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                        0{index + 1} /{" "}
                        {index === 0
                          ? "Estrutura"
                          : index === 1
                            ? "Clareza"
                            : "Ritmo"}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-100">
              <BadgeCheck className="size-5 text-emerald-300" />
              <span>Baseado em produtos reais em produção</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
