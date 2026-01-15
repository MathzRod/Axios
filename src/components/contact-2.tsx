"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Contact2 = () => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<null | "ok" | "error">(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-12 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10 lg:mx-0 lg:max-w-md lg:py-4">
            <div className="text-center lg:text-left">
              <h3 className="mb-3 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:mb-4 lg:text-7xl">
                Entre em Contato
              </h3>
              <p className="text-lg text-gray-400">
                Envie sua solicitação e vamos te responder no e-mail.
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-xl border border-[#C88D76] bg-[#c7775760] p-6 shadow-2xl shadow-purple-500/10 sm:p-10 lg:mx-0"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Nome</Label>
                <Input className="text-black " name="firstname" id="firstname" placeholder="Nome" required />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Sobrenome</Label>
                <Input className="text-black " name="lastname" id="lastname" placeholder="Sobrenome" required />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input className="text-black " name="email" type="email" id="email" placeholder="E-mail" required />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Assunto</Label>
              <Input className="text-black " name="subject" id="subject" placeholder="Assunto" required />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea className="text-black" name="message" id="message" placeholder="Escreva seu pedido." required />
            </div>

            <Button type="submit" className="w-full text-lg font-semibold py-6 bg-[#c77757]" disabled={loading}>
              {loading ? "Enviando..." : "Enviar Mensagem"}
            </Button>

            {status === "ok" && (
              <p className="text-sm text-green-300">Mensagem enviada com sucesso ✅</p>
            )}
            {status === "error" && (
              <p className="text-sm text-green-300">Enviado com Sucesso!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
