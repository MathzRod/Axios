"use client";

import { ArrowRight, ArrowUpRight, Menu, Search, ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import TextType from "./ui/textAnimation"; 
import { WHATSAPP_QUOTE_LINK } from "@/lib/whatsapp";


// --- Componente Principal (CommerceHero) ---

export function CommerceHero() {
  return (
    <div className="w-full relative container mx-auto max-w-7xl px-2 min-h-screen">
      <div className="min-h-screen h-full w-full bg-[url('/path/to/image.jpg')] bg-cover bg-center flex justify-center items-center">
        
        <div className="relative mb-8 mt-2 rounded-2xl bg-transparent py-8 ">
          
          <motion.section
            className="w-full px-4 py-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mx-auto text-center">
              
              {/* Título e Descrição (com TextType) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight my-28  leading-tight">
                    
                    {/* Título animado */}
                    <TextType 
                      text={["Transformando ideias em precisão", "Criando soluções 3D para empresas"]}
                      typingSpeed={75}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                    />

                </h1>
                
              </motion.div>

              {/* Botão de Orçamento (com animação separada, para entrar depois) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
                className="mt-8" // Adiciona um espaçamento entre a descrição e o botão
              >
                <Button
                  variant="expandIcon"
                  Icon={() => <ArrowRight className="h-8 w-8" />}
                  iconPlacement="right"
                  className="h-24 px-12 text-2xl cursor-pointer"
                  onClick={() => window.open(WHATSAPP_QUOTE_LINK, "_blank")}
                >
                  Solicite seu Orçamento
                </Button>
              </motion.div>

              {/* Parágrafo de animação anterior (mantido por estar no original, mas vazio) */}
              <motion.p
                className="text-2xl md:text-3xl text-amber-200 max-w-4xl mx-auto px8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {/* Conteúdo Opcional */}
              </motion.p>
              
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}