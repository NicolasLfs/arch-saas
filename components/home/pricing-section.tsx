import { ArrowUpRight, Check, Clock3, Sparkles } from "lucide-react";
import Link from "next/link";
import { plans } from "@/lib/content";
import { getWhatsappUrl } from "@/lib/contact";
import { SectionKicker } from "./section-kicker";

export function PricingSection() {
  return (
    <section
      id="pacotes"
      className="relative border-b border-white/5 bg-slate-950 py-24 sm:py-32"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionKicker>Investimento com clareza</SectionKicker>
          </div>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Escolha o diagnóstico ideal para o seu momento.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400">
            Da validação inicial ao setup completo. Sem surpresas.
          </p>
        </div>
        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[1.5rem] border p-6 transition-all duration-300 hover:-translate-y-1 ${plan.featured ? "border-emerald-300/60 bg-[linear-gradient(145deg,rgba(16,185,129,0.16),rgba(15,23,42,0.94)_45%)] shadow-[0_0_60px_rgba(16,185,129,0.12)] lg:-mt-4 lg:mb-4" : "border-white/10 bg-slate-900/65 hover:border-white/20"}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-6 rounded-full border border-emerald-300/30 bg-emerald-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-950">
                    Mais contratado
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon
                        className={`size-4 ${plan.featured ? "text-emerald-300" : "text-slate-500"}`}
                      />
                      <h3 className="text-xl font-semibold text-white">
                        {plan.name}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-emerald-200/80">
                      {plan.tag}
                    </p>
                  </div>
                  {plan.featured ? (
                    <Sparkles className="size-5 text-emerald-300" />
                  ) : (
                    <span className="font-mono text-xs text-slate-600">
                      0{index + 1}
                    </span>
                  )}
                </div>
                <p className="mt-5 min-h-[72px] text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>
                <div className="my-6 border-y border-white/10 py-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-slate-500">R$</span>
                    <span className="font-mono text-4xl font-medium tracking-[-0.06em] text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-500">{plan.cents}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                    <Clock3 className="size-3.5" /> {plan.duration}
                  </div>
                </div>
                <ul className="flex-1 space-y-3">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-5 text-slate-300"
                    >
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-emerald-300" : "text-slate-500"}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={getWhatsappUrl(plan.name)}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${plan.featured ? "bg-emerald-400 text-slate-950 shadow-[0_0_30px_rgba(52,211,153,0.18)] hover:-translate-y-0.5 hover:bg-emerald-300" : "border border-white/10 bg-white/[0.04] text-slate-200 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/[0.08]"}`}
                >
                  {plan.cta}
                  <ArrowUpRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-7 text-center text-xs text-slate-600">
          Todos os pacotes começam com uma conversa de alinhamento. Você só
          avança quando fizer sentido.
        </p>
      </div>
    </section>
  );
}
