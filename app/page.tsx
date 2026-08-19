import { CallToAction } from "@/components/home/call-to-action";
import { DiagnosticSection } from "@/components/home/diagnostic-section";
import { FaqSection } from "@/components/home/faq-section";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { PricingSection } from "@/components/home/pricing-section";
import { ProcessSection } from "@/components/home/process-section";
import { RisksSection } from "@/components/home/risks-section";

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-emerald-300 selection:text-slate-950"
    >
      <Header />
      <main>
        <HeroSection />
        <RisksSection />
        <DiagnosticSection />
        <PricingSection />
        <ProcessSection />
        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
