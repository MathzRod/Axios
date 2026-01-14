'use client';
// Indica que este componente roda no cliente, pois usa hooks e animações.

import { cn } from '@/lib/utils';
// Função utilitária para juntar classes de forma segura.

import { useMotionValue, animate, motion } from 'framer-motion';
// useMotionValue → cria um valor animável (x ou y).
// animate → permite animar manualmente valores.
// motion → componentes animados (motion.div).

import { useState, useEffect } from 'react';
// useState → estados internos.
// useEffect → executa lógicas após renderização.

import useMeasure from 'react-use-measure';
// Hook que mede o tamanho de um elemento (width, height) em tempo real.

// -------------------------------
// Tipagem das Props
// -------------------------------
type InfiniteSliderProps = {
  children: React.ReactNode;   // Conteúdo interno, repetidos no loop.
  gap?: number;                // Espaço entre os itens do slider.
  duration?: number;           // Tempo total da animação (padrão 25s).
  durationOnHover?: number;    // Tempo alternativo quando o mouse está em hover.
  direction?: 'horizontal' | 'vertical'; // Direção do movimento.
  reverse?: boolean;           // Inverte o sentido do slider.
  className?: string;          // Classe adicional para o container.
};

// -------------------------------
// Componente Principal
// -------------------------------
export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  
  // Estado que controla a velocidade atual da animação:
  const [currentDuration, setCurrentDuration] = useState(duration);

  // Mede tamanho do conteúdo do slider (largura ou altura).
  const [ref, { width, height }] = useMeasure();

  // Variável animável do framer-motion (x ou y).
  const translation = useMotionValue(0);

  // Indica se estamos no meio de uma transição manual (hover mudando velocidade).
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Força o useEffect a reiniciar a animação sempre que algo muda.
  const [key, setKey] = useState(0);

  // -------------------------------
  // Efeito principal de animação contínua
  // -------------------------------
  useEffect(() => {
    if (width === 0 && height === 0) return;
    let controls;

    // Decide qual tamanho usar de acordo com a direção.
    const size = direction === 'horizontal' ? width : height;

    // Tamanho total do conteúdo + gap.
    const contentSize = size + gap;

    // Ponto inicial da animação.
    const from = reverse ? -contentSize / 2 : 0;

    // Ponto final da animação.
    const to = reverse ? 0 : -contentSize / 2;

    // Caso esteja mudando velocidade (hover), realiza transição suave:
    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        // Duração proporcional ao quanto falta para chegar ao destino.

        onComplete: () => {
          setIsTransitioning(false);  // Finaliza a fase de transição.
          setKey((prevKey) => prevKey + 1); // Reinicia animação com nova velocidade.
        },
      });
    } 
    
    // Animação contínua normal:
    else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from); // Reseta o valor para garantir looping perfeito.
        },
      });
    }

    return controls?.stop; // Limpa animação ao desmontar ou atualizar effect.
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  // -------------------------------
  // Evento de hover (se durationOnHover existir)
  // -------------------------------
  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);     // Ativa transição suave
          setCurrentDuration(durationOnHover); // Muda a velocidade
        },
        onHoverEnd: () => {
          setIsTransitioning(true);     // Ativa transição suave de volta
          setCurrentDuration(duration); // Retorna à velocidade original
        },
      }
    : {};

  // -------------------------------
  // Renderização
  // -------------------------------
  return (
    <div className={cn('overflow-hidden bg-[#00001A]', className)}>
      {/* Container externo que esconde o conteúdo excedente */}
      
      <motion.div
        className="flex items-center w-max h-14 md:h-16"
        style={{
          // Define se a animação é no eixo X ou Y:
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),

          gap: `${gap}px`, // Espaço entre elementos
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}        // Mede tamanho do conteúdo
        {...hoverProps}  // Adiciona eventos de hover, caso existam
      >
        {/* Duas cópias do conteúdo para criar looping infinito */}
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
