import { processSteps } from "@/lib/content";
import { SectionKicker } from "./section-kicker";

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden border-b border-white/5 bg-slate-900/55 py-24 sm:py-32"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionKicker>Sem caixa-preta</SectionKicker>
            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Como funciona o diagnóstico.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-400">
              Um processo curto, transparente e pensado para você sair da
              conversa sabendo o que fazer.
            </p>
          </div>
          <div className="relative grid gap-8 sm:grid-cols-4 sm:gap-4">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative">
                  <div className="mb-5 flex items-center gap-3 sm:block">
                    <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-400/10 text-emerald-300">
                      <Icon className="size-5" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-12 top-6 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-emerald-300/40 to-white/10 sm:block" />
                    )}
                  </div>
                  <div className="font-mono text-xs text-emerald-300/70">
                    {item.step}
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
