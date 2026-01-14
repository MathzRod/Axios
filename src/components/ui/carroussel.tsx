"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: { src: string; alt?: string }[];
  className?: string;
  interval?: number;

  /**
   * ✅ Use true APENAS no primeiro carrossel acima da dobra (se precisar).
   * Isso evita preloads em massa no mobile.
   */
  priorityFirstImage?: boolean;
};

export function ImageCarousel({
  images,
  className,
  interval = 4500,
  priorityFirstImage = false,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images]);

  useEffect(() => {
    if (safeImages.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [safeImages.length, interval]);

  if (safeImages.length === 0) return null;

  return (
    <div
      className={cn(
        // ✅ responsivo: no mobile ocupa quase toda a largura
        // e altura proporcional, ao invés de 420x520 fixo
        "relative w-full max-w-[420px] aspect-[420/520] overflow-hidden rounded-2xl",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.45, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={safeImages[index].src}
            alt={safeImages[index].alt ?? "Imagem do carrossel"}
            fill
            // ✅ object-contain evita cortes estranhos em produtos/artefatos
            className="object-contain rounded-2xl"
            // ✅ sizes = essencial para o Next mandar o tamanho certo no mobile
            sizes="(max-width: 768px) 92vw, 420px"
            // ✅ prioridade só na PRIMEIRA imagem se você pedir
            priority={priorityFirstImage && index === 0}
            // ✅ as outras imagens não devem travar o carregamento inicial
            loading={priorityFirstImage && index === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {/* INDICADORES */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {safeImages.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para imagem ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              i === index ? "bg-[#C88D76] w-6" : "bg-white/40 active:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
