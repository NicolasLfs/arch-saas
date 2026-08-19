import type { LucideIcon } from "lucide-react";
import { BarChart3, Boxes, Crown, FileCheck2, FileText, Layers3, RefreshCw, Rocket, ScanSearch, Search, ShieldCheck, TrendingUp, Workflow } from "lucide-react";

export type IconCard = { icon: LucideIcon; title: string; description: string };

export const riskCards = [
  { icon: RefreshCw, number: "01", title: "Stack errada", description: "Reescrever tudo em 6 meses porque a primeira decisão técnica não acompanhou o produto.", stat: "6 meses", statLabel: "de retrabalho evitável", accent: "emerald" },
  { icon: TrendingUp, number: "02", title: "Infra surpresa", description: "A conta que começa em R$ 500 e chega a R$ 5.000/mês sem um plano de crescimento claro.", stat: "10×", statLabel: "de diferença no custo", accent: "amber" },
  { icon: ShieldCheck, number: "03", title: "Falha de segurança", description: "Dados expostos, confiança perdida e um risco de LGPD que poderia ter sido mapeado antes.", stat: "LGPD", statLabel: "desde a primeira decisão", accent: "rose" },
] as const;

export const pillars: IconCard[] = [
  { icon: Layers3, title: "Arquitetura validada", description: "Uma stack recomendada para o seu contexto, volume, time e estágio — não para seguir tendência." },
  { icon: BarChart3, title: "Custos mapeados", description: "Projeção de infraestrutura para os meses 1, 6 e 12, com decisões que evitam surpresas no caixa." },
  { icon: Workflow, title: "Roadmap de 90 dias", description: "O que construir primeiro, depois e depois. Sequência prática para transformar arquitetura em entrega." },
];

export const plans = [
  { icon: ScanSearch, name: "Express", price: "800", cents: ",00", tag: "Para quem está na ideia", description: "A validação objetiva para decidir se vale construir — e por onde começar.", duration: "1h de call + 1h de documentação", cta: "Agendar Express", featured: false, items: ["Revisão da proposta de SaaS", "Análise da stack", "Cálculo de custo de infra", "Relatório de 1 página com go/no-go", "3 recomendações prioritárias"] },
  { icon: Boxes, name: "Arquitetura Completo", price: "2.200", cents: ",00", tag: "Para quem vai construir", description: "A visão de engenharia sênior que organiza produto, tecnologia e investimento em uma única direção.", duration: "2h de calls + 3–4h de análise", cta: "Agendar Completo", featured: true, items: ["Arquitetura técnica documentada", "Stack completa definida", "Cálculo detalhado de custos", "Análise de segurança e LGPD", "Roadmap de 90 dias", "PDF profissional de 5–8 páginas"] },
  { icon: Crown, name: "Setup + Acompanhamento", price: "4.500", cents: ",00", tag: "Para começar com o pé direito", description: "Diagnóstico, base técnica e acompanhamento para tirar a primeira versão do papel com segurança.", duration: "1 semana", cta: "Agendar Setup", featured: false, items: ["Tudo do diagnóstico Completo", "Setup inicial do projeto", "Monorepo, Docker e CI/CD", "Base de autenticação", "4 calls de acompanhamento", "Acesso a grupo/comunidade"] },
] as const;

export const processSteps = [
  { icon: FileText, step: "01", title: "Briefing", text: "Você conta sobre seu SaaS, momento e objetivo." },
  { icon: Search, step: "02", title: "Análise", text: "Uma revisão técnica profunda, sem achismo." },
  { icon: FileCheck2, step: "03", title: "Entrega", text: "Relatório claro e call para apresentar as decisões." },
  { icon: Rocket, step: "04", title: "Decisão", text: "Você segue sabendo exatamente qual é o próximo passo." },
] as const;

export const faqs = [
  { question: "O diagnóstico inclui desenvolvimento de código?", answer: "Não. O diagnóstico é focado em análise, decisões e documentação. No pacote Setup + Acompanhamento, você recebe a base inicial do projeto com monorepo, Docker, CI/CD e autenticação." },
  { question: "E se eu já tiver um SaaS em produção?", answer: "Melhor ainda. Analisamos o que já está feito, identificamos gargalos de arquitetura, segurança e custo e sugerimos otimizações priorizadas para o seu estágio atual." },
  { question: "Quanto tempo leva para receber o relatório?", answer: "De 1 a 5 dias úteis, dependendo do pacote escolhido e da complexidade do seu produto. O prazo é combinado na confirmação do diagnóstico." },
  { question: "O relatório serve para mostrar para investidores ou sócios?", answer: "Sim. O documento é estruturado para ser útil internamente, alinhar sócios e também dar visibilidade profissional sobre decisões técnicas para investidores." },
  { question: "Posso contratar a implementação depois do diagnóstico?", answer: "Sim. Muitos clientes seguem para a implementação depois de ter clareza sobre a arquitetura, o roadmap e a ordem certa de construção." },
] as const;
