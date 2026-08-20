"use server";

import { Resend } from "resend";
import {
  contactFormSchema,
  saasMomentLabels,
  type ContactFormValues,
} from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_SECRET_KEY);

const FROM_EMAIL = "ArchSaaS <onboarding@resend.dev>";
const TO_EMAIL = process.env.MY_PERSONAL_EMAIL;

const GENERIC_ERROR_MESSAGE =
  "Não foi possível enviar sua mensagem agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.";

export type SendContactResult =
  | { status: "success" }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
    };

export async function sendContactEmail(
  values: ContactFormValues,
): Promise<SendContactResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormValues | undefined;
      if (key && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Verifique os campos destacados e tente novamente.",
      fieldErrors,
    };
  }

  // Guard against missing destination address instead of failing silently at the Resend API.
  if (!TO_EMAIL) {
    console.error(
      "[sendContactEmail] MY_PERSONAL_EMAIL environment variable is not set.",
    );
    return { status: "error", message: GENERIC_ERROR_MESSAGE };
  }

  const { name, email, moment, message } = parsed.data;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Novo contato ArchSaaS — ${name}`,
      html: buildContactEmailHtml({ name, email, moment, message }),
    });

    if (error) {
      console.error("[sendContactEmail] Resend API error:", error);
      return { status: "error", message: GENERIC_ERROR_MESSAGE };
    }

    return { status: "success" };
  } catch (error) {
    console.error("[sendContactEmail] Unexpected error:", error);
    return { status: "error", message: GENERIC_ERROR_MESSAGE };
  }
}

function buildContactEmailHtml({
  name,
  email,
  moment,
  message,
}: ContactFormValues) {
  const momentLabel = saasMomentLabels[moment];

  return `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; background-color: #f1f5f9; padding: 32px 16px;">
      <div style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        <div style="background-color: #020617; padding: 24px 32px;">
          <p style="margin: 0; color: #34d399; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
            ArchSaaS · Novo contato
          </p>
        </div>
        <div style="padding: 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
            <tbody>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px; vertical-align: top;">Nome</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">E-mail</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 15px;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #059669; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Momento do SaaS</td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 15px;">${escapeHtml(momentLabel)}</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px;">Mensagem</p>
            <p style="margin: 0; color: #0f172a; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
