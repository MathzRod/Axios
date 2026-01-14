import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WHATSAPP_QUOTE_LINK } from "@/lib/whatsapp";

function Feature() {
  return (
    // Fundo escuro total (dark:bg-black) com padding generoso
    <section className="w-full py-24 lg:py-32 bg-[#000030] text-white border-y bg-[#000030]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 lg:items-center">
          
          {/* Lado Esquerdo - Visual (Mockup) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-800 rounded-xl w-full aspect-[4/3] shadow-2xl shadow-gray-700/50 overflow-hidden border border-gray-700 transition-transform hover:scale-[1.02] duration-300">
              {/* Conteúdo do Mockup, simulando uma tela iluminada */}
              <div className="flex items-center justify-center h-full text-gray-500 font-semibold text-lg bg-gray-900/50 backdrop-blur-sm">
                <img
                  src="/Principal.jpeg"
                  alt="Mockup Visual"
                  className="object-cover w-full h-full"
                />
            </div>
            </div>
          </div>

          {/* Lado Direito - Conteúdo e Texto */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            
            {/* Badge em destaque com cor vibrante e brilho sutil */}
            <div>
              <Badge className="bg-[#C88D76]  text-gray-950 font-bold shadow-lg shadow-[#C88D76] px-3 py-1 text-sm uppercase">
                Soluções Personalizadas
              </Badge>
            </div>
            
            <div className="flex gap-4 flex-col">
              {/* Título de alto contraste */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight font-extrabold text-left text-white">
                Brindes genéricos diluem a sua marca.
              </h2>
              
              {/* Parágrafo e Lista (Texto levemente acinzentado para leitura suave) */}
              <p className="text-xl max-w-xl leading-relaxed tracking-normal text-gray-300 text-left mt-2">
                A maior parte das empresas precisa de itens que representem cultura, propósito e presença — mas encontram três barreiras:
              </p>
              
              {/* Lista estilizada com marcadores de cor vibrante */}
              <ul className="list-disc pl-5 mt-4 space-y-3 text-lg text-gray-200">
                <li className="marker:text-[#C88D76]">Catálogos idênticos que repetem as mesmas soluções para todos.</li>
                <li className="marker:text-[#C88D76]">Produção lenta, rígida e com mínimos abusivos.</li>
                <li className="marker:text-[#C88D76]">Artesanato que não escala e perde consistência na repetição.</li>
              </ul>
              
              {/* Chamada Final em destaque */}
              <p className="text-xl max-w-xl leading-relaxed tracking-normal font-semibold text-white text-left mt-4">
                Sua marca precisa de algo melhor que isso.
              </p>
              
              {/* Botão de Chamada para Ação vibrante */}
              <div className="mt-4">
                <Button 
                  size="lg"
                  onClick={() => window.open(WHATSAPP_QUOTE_LINK, "_blank")} 
                  className="bg-[#C88D76] hover:bg-[#C88D76] text-gray-950 font-extrabold text-lg shadow-2xl shadow-[#bd785d] hover:shadow-[#C88D76] transition-all duration-300 transform hover:scale-[1.03]"
                >
                    Descubra Nossas Soluções
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Feature };