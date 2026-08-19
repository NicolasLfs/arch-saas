"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { whatsappUrl } from "@/lib/contact";
import { SectionKicker } from "./section-kicker";

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="relative border-b border-white/5 bg-slate-900/55 py-24 sm:py-32"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionKicker>Sem perguntas escondidas</SectionKicker>
            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Perguntas frequentes.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-7 text-slate-400">
              Se a sua dúvida não estiver aqui, escreva. A resposta começa com
              uma conversa honesta.
            </p>
            <Link
                href={whatsappUrl}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
            >
              Falar sobre meu SaaS <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-sm font-medium text-slate-200 transition-colors hover:text-white"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-lg border transition-all ${isOpen ? "border-emerald-300/30 bg-emerald-400/10 text-emerald-300" : "border-white/10 text-slate-500"}`}
                    >
                      {isOpen ? (
                        <Minus className="size-4" />
                      ) : (
                        <Plus className="size-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-5 pr-12 text-sm leading-7 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
