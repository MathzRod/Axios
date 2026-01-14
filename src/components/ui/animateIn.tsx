"use client";

import React from "react";
import { motion, easeInOut } from "framer-motion";

type AnimateInProps = {
  children: React.ReactNode;
  delay?: number;
  disable?: boolean;
  once?: boolean;        // anima só 1 vez (default true)
  amount?: number;       // quanto do elemento precisa aparecer (0.1 a 1)
};

const variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const transitionConfig = { duration: 0.7, ease: easeInOut };

function hasMotionProps(node: React.ReactNode) {
  if (!React.isValidElement(node)) return false;
  const p = (node.props ?? {}) as Record<string, unknown>;
  return (
    "initial" in p ||
    "animate" in p ||
    "whileInView" in p ||
    "whileHover" in p ||
    "whileTap" in p ||
    "variants" in p ||
    "transition" in p ||
    "layout" in p
  );
}

export function AnimateIn({
  children,
  delay = 0,
  disable = false,
  once = true,
  amount = 0.25,
}: AnimateInProps) {
  if (disable) return <>{children}</>;

  const nodes = React.Children.toArray(children);

  return (
    <>
      {nodes.map((child, i) => {
        if (hasMotionProps(child)) return <React.Fragment key={i}>{child}</React.Fragment>;

        return (
          <motion.div
            key={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once,        // true: anima só na primeira vez que aparece
              amount,      // 0.25 = anima quando 25% entrou na tela
              margin: "0px 0px -15% 0px", // opcional: dispara um pouco antes
            }}
            transition={{ ...transitionConfig, delay: delay + i * 0.06 }}
          >
            {child}
          </motion.div>
        );
      })}
    </>
  );
}
