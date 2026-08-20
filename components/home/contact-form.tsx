"use client";

import { useState, useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

import { sendContactEmail } from "@/app/actions/send-contact";
import { whatsappUrl } from "@/lib/contact";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import {
  contactFormSchema,
  saasMoments,
  saasMomentLabels,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      moment: undefined,
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    setServerError(null);
    startTransition(async () => {
      const result = await sendContactEmail(values);

      if (result.status === "error") {
        setServerError(result.message);
        if (result.fieldErrors) {
          for (const [field, message] of Object.entries(result.fieldErrors)) {
            setError(field as keyof ContactFormValues, { message });
          }
        }
        return;
      }

      setIsSubmitted(true);
    });
  }

  if (isSubmitted) {
    return (
      <Card className="border-none bg-emerald-400/10 ring-1 ring-emerald-400/30">
        <CardContent className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:px-10">
          <CheckCircle2 className="size-12 text-emerald-400" />
          <p className="text-lg font-semibold text-slate-100 sm:text-xl">
            Mensagem recebida com sucesso!
          </p>
          <p className="max-w-md text-sm leading-6 text-slate-300">
            Obrigado pelo contacto. Analisaremos a tua proposta e
            responderemos em até 24 horas.
          </p>
          <Button
            variant="secondary"
            size="lg"
            nativeButton={false}
            render={
              <Link href={whatsappUrl} target="_blank" rel="noreferrer" />
            }
          >
            <WhatsappIcon className="size-5" /> Acelerar atendimento no WhatsApp
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor="name">Nome completo</Label>
        <Input
          id="name"
          placeholder="Como podemos te chamar?"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="voce@empresa.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="moment">Momento do SaaS</Label>
        <Controller
          control={control}
          name="moment"
          render={({ field }) => (
            <Select
              value={field.value ?? null}
              onValueChange={(value) => field.onChange(value)}
            >
              <SelectTrigger
                id="moment"
                className="w-full"
                aria-invalid={!!errors.moment}
              >
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                {saasMoments.map((value) => (
                  <SelectItem key={value} value={value}>
                    {saasMomentLabels[value]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.moment && (
          <p className="text-sm text-destructive">{errors.moment.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Descreva a sua necessidade</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Conte um pouco sobre o seu SaaS e o que você precisa validar ou resolver."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {serverError && (
        <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <Loader2 className="animate-spin" /> Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </Button>
    </form>
  );
}
