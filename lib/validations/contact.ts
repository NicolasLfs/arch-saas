import { z } from "zod";

export const saasMoments = [
  "ideacao",
  "mvp-desenvolvimento",
  "mvp-lancado",
  "escalando",
  "producao-problemas",
] as const;

export type SaasMoment = (typeof saasMoments)[number];

export const saasMomentLabels: Record<SaasMoment, string> = {
  ideacao: "Ideação / validando a ideia",
  "mvp-desenvolvimento": "MVP em desenvolvimento",
  "mvp-lancado": "MVP lançado, buscando tração",
  escalando: "Escalando, mas com dores técnicas",
  "producao-problemas": "Em produção, com problemas de arquitetura ou custos",
};

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo")
    .max(120, "Nome muito longo"),
  email: z.string().trim().email("Informe um e-mail válido"),
  moment: z.enum(saasMoments, {
    message: "Selecione o momento do seu SaaS",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre sua necessidade (mín. 10 caracteres)")
    .max(2000, "Mensagem muito longa"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
