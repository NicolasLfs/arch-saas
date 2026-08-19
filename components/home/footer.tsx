import { Brand } from "./brand";
import Link from "next/link";
import { whatsappUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Brand />
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Clareza técnica para construir produtos digitais que chegam mais
              longe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-slate-500">
            <Link
              href="#pacotes"
              className="transition-colors hover:text-emerald-300"
            >
              Pacotes
            </Link>
            <Link
              href="#diagnostico"
              className="transition-colors hover:text-emerald-300"
            >
              O diagnóstico
            </Link>
            <Link
              href="#processo"
              className="transition-colors hover:text-emerald-300"
            >
              Como funciona
            </Link>
            <Link href="#faq" className="transition-colors hover:text-emerald-300">
              FAQ
            </Link>
          </div>
          <div className="text-left md:text-right">
            <Link
                href={whatsappUrl}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-300"
            >
                Falar pelo WhatsApp
            </Link>
            <p className="mt-3 text-xs text-slate-700">
              © 2026 ArchSaaS
              <br />
              Privacidade · LGPD
            </p>
          </div>
        </div>
        <div className="mt-9 flex items-center gap-3 border-t border-white/5 pt-5 text-[10px] uppercase tracking-[0.15em] text-slate-700">
          <span className="size-1.5 rounded-full bg-emerald-400" /> Arquitetura
          antes do código
        </div>
      </div>
    </footer>
  );
}
