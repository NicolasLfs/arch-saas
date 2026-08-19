import { ArrowUpRight, Clock3 } from "lucide-react";
import Link from "next/link";
import { whatsappUrl } from "@/lib/contact";

export function CallToAction() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-emerald-400 py-24 text-slate-950 sm:py-32"
    >
      <div className="absolute -right-24 -top-32 size-96 rounded-full border-[40px] border-slate-950/5" />
      <div className="absolute -bottom-48 left-1/3 size-96 rounded-full border-[70px] border-slate-950/5" />
      <div className="container relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="mb-5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-800">
              <span className="h-px w-7 bg-slate-800/60" /> Próximo passo
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl">
              Pronto para validar seu SaaS antes de investir?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-800/75">
              1 hora de diagnóstico pode economizar meses de retrabalho.
            </p>
          </div>
          <div className="lg:pb-1">
              <Link
                href={whatsappUrl}
              className="group inline-flex items-center gap-3 rounded-xl bg-slate-950 px-5 py-4 text-sm font-bold text-emerald-300 shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:bg-slate-900 active:scale-[0.98]"
            >
              Agendar meu diagnóstico{" "}
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <div className="mt-4 flex items-center justify-end gap-2 text-xs font-medium text-slate-800/70">
              <Clock3 className="size-3.5" /> Resposta em até 24h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
