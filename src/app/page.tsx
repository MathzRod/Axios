"use client";

import { Header } from "../components/header-2";
import Content from "./content";





// --- Configurações de Estilo Global (Ajustadas para Dark Mode) ---
// **AVISO:** Este bloco de estilo global é desaconselhado no Next.js moderno/Tailwind.
// Recomenda-se configurar o Dark Mode e a fonte 'Work Sans' diretamente
// em 'tailwind.config.js' e 'globals.css'.
// Mantive a estrutura original, mas limpei as classes de cor hardcoded
// que conflitam com o fundo escuro, confiando nas cores Dark Mode padrão do Tailwind.

const GlobalStyles = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    const inter = Inter({
      subsets: ["latin"],
      weight: ["300", "400", "500", "600", "700"],
      variable: "--font-inter",
    });

    :root {
      /* Defina variáveis CSS para cores se precisar de mais controle fora do Tailwind */
      --color-background: #1e1e1e;
      --color-text-primary: #ffffff;
    }

    .work-sans {
      font-family: "Work Sans", sans-serif;
    }

    body {
      background-color: var(--color-background);
      color: var(--color-text-primary);
    }

    /* Regras de transição e animação (manter, mas revisar se são necessárias com Framer Motion) */
    .hover\\:grow {
      transition: all 0.3s;
      transform: scale(1);
    }

    .hover\\:grow:hover {
      transform: scale(1.02);
    }

    /* As classes de carousel devem ser refeitas com componentes modernos ou bibliotecas como Swiper */
    /* ... (Removido as classes complexas de carousel/menu para simplificação) ... */

    
  `}</style>
);

// --- Componente Principal ---

export default function Home() {
  

  return (
    <>
      <GlobalStyles />
      <div className="work-sans">
        <Header />
        <Content />
      </div>
    </>
  );
}