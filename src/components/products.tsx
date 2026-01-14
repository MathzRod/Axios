"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WHATSAPP_QUOTE_LINK } from "@/lib/whatsapp";
import { ImageCarousel } from "./ui/carroussel";

export function ModelSection() {
  return (
    <section className="relative w-full bg-[#00001A] text-white py-24">
      {/* CONTAINER */}
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TÍTULO */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            MANUFATURA DE <span className="text-[#C88D76]">ALTA FIDELIDADE</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-1xs">
            Acreditamos que a excelência está nos detalhes visíveis e táteis. Oferecemos peças com manufatura aditiva.  Não entregamos plástico; entregamos ativos de marca.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* MODELO GERAL */}
          <div className="space-y-2 ">
            <h3 className="text-2xl font-semibold text-[#C88D76]">
              Branding de Bolso
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Do digital para o físico. Acessórios com geometria exclusiva e cores fundidas. 
            </p>
            <p className="text-gray-300 leading-relaxed ">
              Transforme seu logo em um objeto de desejo que acompanha seu cliente onde ele for.
            </p>

            <Button onClick={() => window.open(WHATSAPP_QUOTE_LINK, "_blank")} className="bg-[#C88D76] text-black hover:bg-[#d3957c]">
              Começar Gratuitamente
            </Button>
          </div>

          {/* IMAGEM MODELO GERAL */}
          <div className="relative flex justify-center">
            <ImageCarousel
              images={[
                { src: "/chaveiros/chaveiro1.png", alt: "Modelo Geral 1" },
                { src: "/chaveiros/chaveiro2.png", alt: "Modelo Geral 2" },
                { src: "/chaveiros/chaveiro3.png", alt: "Modelo Geral 3" },
                { src: "/chaveiros/chaveiro4.png", alt: "Modelo Geral 4" },
              ]}
              className="drop-shadow-[0_0_120px_rgba(200,141,118,0.35)]"
            />
          </div>

          {/* IMAGEM MODELO RETRATO */}
          <div className="relative flex justify-center order-last lg:order-none mb-16">
            <ImageCarousel
              images={[
                { src: "/totens/totem1.png", alt: "Modelo Geral 1" },
                { src: "/totens/totem2.png", alt: "Modelo Geral 2" },
                { src: "/totens/totem3.png", alt: "Modelo Geral 3" },
                {src: "/totens/totem4.png", alt: "Modelo Geral 4" },
              ]}
              className="drop-shadow-[0_0_120px_rgba(200,141,118,0.35)]"
            />
          </div>

          {/* MODELO DE RETRATO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#C88D76]">
              Totens de Legado Corporativo
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Chega de placas genéricas. Criamos estatuetas exclusivas que eternizam a cultura da sua empresa. 
            </p>
            <p className="text-gray-300 leading-relaxed ">
              Design proprietário, personalização total e a garantia de que ninguém no mercado terá um igual.
            </p>

            <Button  className="bg-[#C88D76] text-black hover:bg-[#d3957c]">
              Começar Gratuitamente
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
