"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { whatsappUrl } from "@/lib/contact";
import { Brand } from "./brand";

const links = [
  { href: "#diagnostico", label: "O diagnóstico" },
  { href: "#pacotes", label: "Pacotes" },
  { href: "#processo", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container pt-5">
        <nav
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:px-5"
          aria-label="Navegação principal"
        >
          <Brand />
          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={whatsappUrl}
            className="hidden items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 md:flex"
          >
            Agendar diagnóstico <ArrowUpRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 md:hidden"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
            <div className="grid gap-1 text-sm text-slate-300">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-3 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
