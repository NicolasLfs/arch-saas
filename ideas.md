# Brainstorming de Design - Landing Page: Diagnóstico Técnico SaaS

## 1. Abordagens Estéticas Propostas

### Abordagem 1: "Vercel / Linear Precision" (Moderna, Minimalista e Técnica)
- **Theme Name**: Precision Dark
- **Very Brief Intro**: Visual inspirado em ferramentas de desenvolvedor de alto padrão (Vercel, Linear, Resend), focado em dark mode profundo (slate-950), tipografia limpa, acentos em verde esmeralda vibrante e bordas com gradientes sutis.

### Abordagem 2: "Stripe Enterprise Clean" (Light Mode Profissional e Sofisticado)
- **Theme Name**: Corporate Emerald
- **Very Brief Intro**: Visual corporativo moderno em light mode com fundos brancos e cinza gelo, tipografia em azul marinho profundo e detalhes em verde esmeralda institucional, transmitindo solidez financeira e segurança em investimentos de tecnologia.

### Abordagem 3: "Cybernetic Architect" (Futurista e Estrutural)
- **Theme Name**: Blueprint Cyber
- **Very Brief Intro**: Inspirado em esquemas de arquitetura de software e blueprints de engenharia, com linhas de grade sutis no fundo, acentos em ciano e esmeralda, e blocos modulares que remetem a microsserviços.

## 2. Abordagem Escolhida e Detalhada

A abordagem escolhida é a **Abordagem 1: "Vercel / Linear Precision" (Precision Dark)**.

- **Design Movement**: Modern Tech / Developer-First Aesthetic
- **Core Principles**:
  1. Contraste absoluto entre fundo escuro profundo e acentos luminosos em esmeralda.
  2. Hierarquia tipográfica rigorosa com Geist/Inter sans-serif.
  3. UI cards com bordas refinadas (`border-white/10`), backdrop blur e efeitos sutis de glow.
  4. Foco total em clareza técnica, valor de engenharia sênior e conversão direta.
- **Color Philosophy**: Fundo `bg-slate-950` / `slate-900` com acentos em `emerald-400` para CTAs e destaques de sucesso, e texto em `slate-100` e `slate-400`.
- **Layout Paradigm**: Seções assimétricas com respiro generoso, grid de cartões com hover effects suaves e seções de destaque em gradiente sutil.
- **Signature Elements**: badge superior de credibilidade, cards de precificação em três níveis e FAQ em acordeão minimalista.
- **Interaction Philosophy**: Micro-interações suaves, hover scale em botões e cards com transições de 150ms ease-out.
- **Typography System**: Sans-serif moderna; títulos em semibold/bold e corpo em regular.
- **Brand Essence**: Rigor técnico, clareza arquitetural e velocidade de lançamento para fundadores de SaaS.
- **Brand Voice**: Direto, autoritário, seguro e focado em ROI técnico.
- **Wordmark & Logo**: Símbolo geométrico de nós conectados e terminal.
- **Signature Brand Color**: `emerald-400` (`#34d399`) sobre `slate-950` (`#020617`).

## 3. Decisões de Implementação

- A landing page é uma Client Component no App Router, pois menu mobile e FAQ usam estado local.
- O visual de arquitetura é construído na própria página com SVG/CSS, sem dependência de assets externos ou da estrutura do projeto Vite.
- Os links de agendamento usam e-mail com assunto pré-preenchido até que um calendário comercial seja definido.