import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Example = () => {
  return (
    <section
    id="about-me"
    aria-labelledby="about-me-title"
    className="
      flex
      flex-col md:flex-row
      items-center md:items-center
      justify-center
      gap-20
      w-full
      bg-gradient-to-b from-[#00001A] to-[#000030]
      px-6 md:px-52
      py-12
      flex-wrap
      mx-auto
    "
>


      {/* FOTO */}
      <TiltCard />

      {/* TEXTO */}
      <div className="text-white max-w-xl flex flex-col p-6 md:pt-20 md:pl-8">
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
  Marcos Roberto dos Santos Jr. <br />
  <span className="text-[#C88D76] text-xl font-bold">
    Especialista em soluções 3D e impressão 3D profissional
  </span>
</h2>

  <div className="space-y-6 text-base md:text-lg leading-relaxed text-center md:text-left opacity-85">
    <p>
      Acredito que o momento em que um colaborador entra na empresa ou um cliente
      fecha um contrato é sagrado. É ali que a mágica acontece. Criei a Axios
      para garantir que esse momento seja tangibilizado com perfeição.
    </p>

    <p>
      A Axios é o resultado da fusão entre a precisão da engenharia e a emoção da
      experiência humana.
    </p>

    <p>
      Com formação em Mecatrônica e graduando em Engenharia da Computação, trago
      para o mercado de brindes a mesma rigorosidade técnica que apliquei por anos
      no desenvolvimento de projetos para o mercado de luxo.
    </p>

    <p>
      Minha trajetória em Governança de TI me ensinou que empresas não compram
      apenas produtos; elas compram processos confiáveis. Por isso, construí uma
      Print Farm capaz de unir a personalização do 3D com a segurança de entrega
      industrial.
    </p>

    <p>
      Na Axios, uso meus 4 anos de especialização em manufatura aditiva
      (Resina e Filamento) para garantir que sua marca seja representada com a
      máxima fidelidade técnica.
    </p>
  </div>
</div>


      
    </section>
  );
};

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`
    rotateX(${xSpring}deg)
    rotateY(${ySpring}deg)
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; // remove tilt no mobile
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / rect.height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / rect.width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="
        relative 
        h-[420px] w-[300px] 
        md:h-[600px] md:w-[460px]
        md:justify-center
        rounded-xl 
        bg-[#c57252]
      "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="
          absolute inset-4 
          bg-[url('/marcos.jpeg')] 
          bg-cover bg-center 
          rounded-xl shadow-lg
        "
      />
    </motion.div>
  );
};

export default Example;
