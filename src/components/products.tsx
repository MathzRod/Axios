"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_QUOTE_LINK } from "@/lib/whatsapp";
import { ImageCarousel } from "./ui/carroussel";

export function ModelSection() {
  const handleWhatsApp = React.useCallback(() => {
    window.open(WHATSAPP_QUOTE_LINK, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section
      aria-labelledby="model-section-title"
      className="relative w-full bg-[#00001A] text-white py-24"
    >
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-6">
        {/* TÍTULO */}
        <div className="text-center mb-20">
          <h2
            id="model-section-title"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            MANUFATURA DE{" "}
            <span className="text-[#C88D76]">ALTA FIDELIDADE</span>
          </h2>

          {/* Tailwind fix: text-1xs não existe por padrão */}
          <p className="text-gray-400 max-w-3xl mx-auto text-xs sm:text-sm">
            Acreditamos que a excelência está nos detalhes visíveis e táteis.
            Oferecemos peças com manufatura aditiva. Não entregamos plástico;
            entregamos ativos de marca.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* BLOCO 1 */}
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-[#C88D76]">
              Branding de Bolso
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Do digital para o físico. Acessórios com geometria exclusiva e
              cores fundidas.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Transforme seu logo em um objeto de desejo que acompanha seu
              cliente onde ele for.
            </p>

            <Button
              onClick={handleWhatsApp}
              className="bg-[#C88D76] text-black hover:bg-[#d3957c]"
            >
              Começar Gratuitamente
            </Button>
          </div>

          {/* CARROSSEL 1 */}
          <div className="relative flex justify-center">
            <ImageCarousel
              priorityFirstImage
              images={[
                { src: "/chaveiros/chaveiro1.jpeg", alt: "Chaveiro personalizado 3D - modelo 1" },
                { src: "/chaveiros/chaveiro2.png", alt: "Chaveiro personalizado 3D - modelo 2" },
                { src: "/chaveiros/chaveiro3.jpeg", alt: "Chaveiro personalizado 3D - modelo 3" },
                { src: "/chaveiros/chaveiro4.jpeg", alt: "Chaveiro personalizado 3D - modelo 4" },
              ]}
              // Performance: sombra mais leve no mobile, mais forte no md+
              className="drop-shadow-[0_0_40px_rgba(200,141,118,0.25)] md:drop-shadow-[0_0_120px_rgba(200,141,118,0.35)]"
            />
          </div>

          {/* CARROSSEL 2 */}
          <div className="relative flex justify-center order-last lg:order-none mb-16">
            <ImageCarousel
              images={[
                { src: "/totens/totem1.jpeg", alt: "Totem corporativo 3D - modelo 1" },
                { src: "/totens/totem2.jpeg", alt: "Totem corporativo 3D - modelo 2" },
                { src: "/totens/totem3.png", alt: "Totem corporativo 3D - modelo 3" },
                { src: "/totens/totem4.png", alt: "Totem corporativo 3D - modelo 4" },
              ]}
              className="drop-shadow-[0_0_40px_rgba(200,141,118,0.25)] md:drop-shadow-[0_0_120px_rgba(200,141,118,0.35)]"
            />
          </div>

          {/* BLOCO 2 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#C88D76]">
              Totens de Legado Corporativo
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Chega de placas genéricas. Criamos estatuetas exclusivas que
              eternizam a cultura da sua empresa.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Design proprietário, personalização total e a garantia de que
              ninguém no mercado terá um igual.
            </p>

            {/* Padronizei pra abrir WhatsApp também (se não quiser, troca por outro handler) */}
            <Button
              onClick={handleWhatsApp}
              className="bg-[#C88D76] text-black hover:bg-[#d3957c]"
            >
              Começar Gratuitamente
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
