"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import TextType from "./ui/textAnimation";
import { WHATSAPP_QUOTE_LINK } from "@/lib/whatsapp";

export function CommerceHero() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full relative container mx-auto max-w-7xl px-2 min-h-screen">
      <div className="min-h-screen h-full w-full bg-[url('/path/to/image.jpg')] bg-cover bg-center flex justify-center items-center">
        <div className="relative mb-8 mt-2 rounded-2xl bg-transparent py-8">
          <motion.section
            className="w-full px-4 py-24"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mx-auto text-center">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                {/* ✅ 1) Reserva altura fixa (evita jump) */}
                {/* ✅ 2) Mantém sempre 2 linhas no mobile */}
                <h1
                  className="
                    font-bold tracking-tight leading-tight
                    text-4xl md:text-5xl lg:text-7xl
                    my-20 md:my-28
                    mx-auto
                    max-w-[18ch] sm:max-w-[24ch] lg:max-w-[32ch]
                    min-h-[5.6em] sm:min-h-[4.6em] lg:min-h-[3.2em]
                  "
                >
                  {/* ✅ Conteúdo “real” para SEO (não muda visual) */}
                  <span className="sr-only">Soluções 3D profissionais para empresas</span>

                  {/* ✅ Força estrutura de 2 linhas para não variar com quebras */}
                  <span className="block">
                    <TextType
                      text={[
                        // quebrei em 2 linhas “conceituais” (você pode ajustar o copy)
                        "Transformando ideias em precisão",
                        "Criando soluções 3D para empresas",
                      ]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                className="mt-8"
              >
                <Button
                  variant="expandIcon"
                  Icon={() => <ArrowRight className="h-8 w-8" />}
                  iconPlacement="right"
                  className="h-16 sm:h-20 md:h-24 px-8 sm:px-10 md:px-12 text-lg sm:text-xl md:text-2xl cursor-pointer"
                  onClick={() => window.open(WHATSAPP_QUOTE_LINK, "_blank", "noopener,noreferrer")}
                >
                  Solicite seu Orçamento
                </Button>
              </motion.div>

              <motion.p
                className="text-xl md:text-3xl text-amber-200 max-w-4xl mx-auto leading-relaxed"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
