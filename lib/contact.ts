export const whatsappUrl =
  "https://wa.me/5511939206631?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20para%20meu%20SaaS";

export function getWhatsappUrl(diagnosticName: string) {
  const message = `Olá, gostaria de agendar o diagnóstico ${diagnosticName} para meu SaaS`;
  return `https://wa.me/5511939206631?text=${encodeURIComponent(message)}`;
}
