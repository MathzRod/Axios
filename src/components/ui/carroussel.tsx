"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: {
    src: string;
    alt?: string;
  }[];
  className?: string;
  interval?: number;
};

export function ImageCarousel({
  images,
  className,
  interval = 4500,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div
      className={cn(
        "relative w-[420px] h-[520px] overflow-hidden rounded-2xl",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt ?? "Imagem do carrossel"}
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* INDICADORES */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              i === index
                ? "bg-[#C88D76] w-6"
                : "bg-white/40 hover:bg-white/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
