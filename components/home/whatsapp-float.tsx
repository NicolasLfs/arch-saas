import Link from "next/link";
import { whatsappUrl } from "@/lib/contact";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export function WhatsappFloat() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-emerald-400 text-slate-950 shadow-[0_8px_30px_rgba(52,211,153,0.35)] transition-transform duration-200 hover:scale-105 hover:bg-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 sm:bottom-7 sm:right-7"
    >
      <WhatsappIcon className="size-8" />
      <span className="sr-only">Falar pelo WhatsApp</span>
    </Link>
  );
}