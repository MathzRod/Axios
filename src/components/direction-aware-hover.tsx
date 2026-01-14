"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("left");

  // ✅ novo: estado para mobile (tap)
  const [tapped, setTapped] = useState(false);

  const setDirFromPoint = (clientX: number, clientY: number) => {
    if (!ref.current) return;
    const { width: w, height: h, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    switch (d) {
      case 0: setDirection("top"); break;
      case 1: setDirection("right"); break;
      case 2: setDirection("bottom"); break;
      case 3: setDirection("left"); break;
      default: setDirection("left");
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    // desktop hover
    setTapped(false);
    setDirFromPoint(event.clientX, event.clientY);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    // ✅ mobile tap
    const t = event.touches[0];
    if (!t) return;
    setDirFromPoint(t.clientX, t.clientY);
    setTapped(true);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // ✅ mobile/desktop click alterna o "abrir"
    setDirFromPoint(event.clientX, event.clientY);
    setTapped((v) => !v);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      className={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative cursor-pointer select-none",
        className
      )}
      role="button"
      tabIndex={0}
      aria-label="Abrir detalhes"
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          // ✅ hover no desktop continua, mas no mobile usamos tapped
          animate={tapped ? direction : "initial"}
          whileHover={direction}
          exit="exit"
        >
          {/* ✅ overlay agora também aparece no tap */}
          <motion.div
            className={cn(
              "absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-300",
              tapped ? "block" : "hidden",
              "group-hover/card:block"
            )}
          />

          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              alt="Imagem do card"
              className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
              width={1000}
              height={1000}
              src={imageUrl}
              sizes="(max-width: 768px) 90vw, 384px"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("text-white absolute bottom-4 left-4 z-40", childrenClassName)}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: { x: 0, y: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

const textVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  exit: { y: 0, x: 0, opacity: 0 },
  top: { y: -20, opacity: 1 },
  bottom: { y: 2, opacity: 1 },
  left: { x: -2, opacity: 1 },
  right: { x: 20, opacity: 1 },
};
