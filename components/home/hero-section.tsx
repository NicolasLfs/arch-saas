import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  CircleCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ArchitectureDiagnostic } from "./architecture-diagnostic";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden border-b border-white/5 pt-40 sm:min-h-[820px] sm:pt-48">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.14),transparent_31%),radial-gradient(circle_at_10%_75%,rgba(14,165,233,0.08),transparent_28%),#020617]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.16)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
      <div className="container relative grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-8">
        <div className="relative z-10 max-w-2xl animate-in fade-in slide-in-from-bottom-5 duration-700">
          
          <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5.35rem]">
            Não deixe seu SaaS <span className="text-emerald-300">morrer</span>{" "}
            antes de nascer<span className="text-emerald-400">.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Diagnóstico técnico especializado para quem está construindo ou
            escalando um produto digital. Arquitetura validada, custos claros e
            um roadmap de 90 dias para você lançar com segurança.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pacotes"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_35px_rgba(52,211,153,0.2)] transition-all duration-200 hover:-translate-y-1 hover:bg-emerald-300 active:scale-[0.98]"
            >
              Agendar diagnóstico{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#pacotes"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07] active:scale-[0.98]"
            >
              Ver pacotes <ChevronDown className="size-4" />
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-5 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <CircleCheck className="size-4 text-emerald-400" /> Sem achismo
              técnico
            </span>
            <span className="flex items-center gap-2">
              <CircleCheck className="size-4 text-emerald-400" /> Documento
              profissional
            </span>
            <span className="flex items-center gap-2">
              <CircleCheck className="size-4 text-emerald-400" /> Resposta em
              até 24h
            </span>
          </div>
        </div>
        <div className="relative lg:-mr-20 xl:-mr-28">
          <div className="absolute -inset-12 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/65 p-2 shadow-[0_25px_100px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:p-3">
            <ArchitectureDiagnostic />
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md sm:bottom-8 sm:left-9 sm:right-9">
              <div>
                <div className="mb-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                  Architecture health
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />{" "}
                  Ready to build
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-2xl font-medium tracking-tight text-emerald-300">
                  90d
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  roadmap
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-4 hidden w-44 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:block">
            <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-500">
              <span>Infra cost</span>
              <BarChart3 className="size-3.5 text-emerald-400" />
            </div>
            <div className="font-mono text-xl text-white">
              R$ 1.2k<span className="ml-1 text-xs text-slate-500">/mês</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[62%] rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="container relative mt-20 flex justify-center pb-9 sm:mt-24">
        <Link
          href="#problema"
          className="group flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate-600 transition-colors hover:text-emerald-300"
        >
          <span>Explore o diagnóstico</span>
          <ChevronDown className="size-4 animate-bounce text-emerald-400/70" />
        </Link>
      </div>
    </section>
  );
}
