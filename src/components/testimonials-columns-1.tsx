"use client";
import React from "react";
// Assumindo que você usa 'framer-motion'
import { motion } from "framer-motion";

// Definição de tipo temporária para 'testimonials'
// NOTE: Na vida real, você deve importar o tipo ou a lista de 'testimonials'
// de onde ela foi definida (por exemplo, no arquivo 'Home' anterior).
type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[]; // Usando o tipo simplificado
  duration?: number;
}) => {
  return (
    // O container externo, que pode ser escondido em telas menores
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%", // Move o conteúdo para cima (loop)
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        // O elemento de rolagem
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {/*
          Duplica o array para criar a ilusão de rolagem infinita.
          Quando o primeiro conjunto termina, o segundo começa, e a animação
          reseta suavemente para o início.
        */}
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  key={i}
                  className="w-full max-w-xs rounded-3xl border border-[#C88D76] bg-[#00001A50] p-8 shadow-xl shadow-primary/20 backdrop-blur-sm"
                >
                  {/* Texto do Testemunho */}
                  <p className="text-base text-gray-200">{text}</p>
                  
                  {/* Informações do Cliente */}
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-500/50"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold tracking-tight leading-5 text-white">
                        {name}
                      </p>
                      <p className="text-sm tracking-tight leading-5 text-gray-400">
                        {role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};