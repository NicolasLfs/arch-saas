export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://saasarchitecturereview.com",
);

export const siteConfig = {
  name: "ArchSaaS",
  title: "Diagnóstico técnico para SaaS com clareza e segurança",
  description:
    "Diagnóstico técnico para construir e escalar produtos SaaS com arquitetura validada, custos claros e um roadmap de 90 dias.",
};
