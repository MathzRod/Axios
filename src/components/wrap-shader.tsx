import { Warp } from "@paper-design/shaders-react"
import { CommerceHero } from "./commerce-hero"

export default function WarpShaderHero() {
  return (
    // O container principal deve ter altura mínima para preencher a tela e ser relative
    <main className="relative min-h-screen overflow-hidden"> 
      
      {/* 1. Container para o Background (Warp e Máscara) */}
      <div 
        className="absolute inset-0" // Preenche todo o <main>
        style={{ zIndex: 0 }} // Garante que fique no fundo
      >
        
        {/* Máscara/Overlay Escuro: position: absolute para cobrir o Warp abaixo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.55)', /* Ajuste a opacidade (0.4) para mais ou menos escuridão */
            zIndex: 1, /* Fica acima do Warp */
          }}
        />

        {/* Componente Warp: position: absolute para cobrir o contêiner */}
        <Warp
          className="absolute inset-0"
          style={{ zIndex: 0 }} /* Fica abaixo da máscara */
          proportion={0.45}
          softness={1}
          distortion={0.35}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.2}
          scale={1}
          rotation={0}
          speed={0.5}
          // Você pode escurecer um pouco as cores aqui também se quiser um efeito mais profundo
          colors={["hsla(240, 100%, 8%, 1)" , "hsla(240, 100%, 8%, 1)","hsla(220, 55%, 15%, 1)", "hsla(15, 45%, 55%, 1)", "hsla(15, 45%, 55%, 1)"]}
        />
      </div>

      {/* 2. Conteúdo Principal (CommerceHero) - Fica por cima do background */}
      {/* O CommerceHero precisa de um zIndex maior que 1 e/ou estar fora da div do background. */}
      {/* Como ele está fora da div de zIndex=0, ele naturalmente fica por cima. */}
      <CommerceHero /> 
      
    </main>
  )
}