"use client";


import WarpShaderHero from "@/components/wrap-shader";
import { LogoCloud } from "@/components/logo-cloud-3";
import Example from "@/components/ui/card"; // Renomear 'Example' se possível para algo mais descritivo
import { Footer } from "@/components/ui/footer";
import { Contact2 } from "@/components/contact-2";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { Feature } from "@/components/ui/feature-with-image";
import { FaqsSection } from "@/components/faqs-1";
import { SmoothLayout } from "@/components/ui/scrollSmooth";

// Bibliotecas
import { Github, Twitter } from "lucide-react";
import { motion } from "framer-motion"; // Assumindo que você usa 'framer-motion' ao invés de 'motion/react'
import { ModelSection } from "@/components/products";
import { AnimateIn } from "@/components/ui/animateIn";

// --- Dados ---

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const logos = [
  {
    src: "/3DPrime.png",
    alt: "3D Prime Logo",
  },
  {
    src: "/bambuLab.png",
    alt: "Bambu Lab Logo",
    className:"invert brightness-0"
  },
  {
    src: "/creality.png",
    alt: "Creality Logo",
  },
  {
    src: "/elegoo.png",
    alt: "Elegoo Logo",
  },
  {
    src: "/triade.png",
    alt: "Triade Logo",
  },

];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Componentes ---

const Testimonials = () => {
  return (
    <section className="relative my-20 bg-[#000030]">
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border border-[#C88D76] px-4 py-1 text-sm text-[#C88D76]">
              Testimonials
            </div>
          </div>
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            What our users say
          </h2>
          <p className="mt-5 text-center text-lg opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>
        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden bg-[#000030]
          [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default function Content() {
  const productImages = [
    "https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    "https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    "https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    "https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80",
    "https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80",
  ];

  return (
    
    <SmoothLayout>
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap");

          .work-sans {
            font-family: "Work Sans", sans-serif;
          }

          #menu-toggle:checked + #menu {
            display: block;
          }

          .hover\\:grow {
            transition: all 0.3s;
            transform: scale(1);
          }

          .hover\\:grow:hover {
            transform: scale(1.02);
          }

          .carousel-open:checked + .carousel-item {
            position: static;
            opacity: 100;
          }

          .carousel-item {
            -webkit-transition: opacity 0.6s ease-out;
            transition: opacity 0.6s ease-out;
          }

          #carousel-1:checked ~ .control-1,
          #carousel-2:checked ~ .control-2,
          #carousel-3:checked ~ .control-3 {
            display: block;
          }

          .carousel-indicators {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: 2%;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 10;
          }

          #carousel-1:checked
            ~ .control-1
            ~ .carousel-indicators
            li:nth-child(1)
            .carousel-bullet,
          #carousel-2:checked
            ~ .control-2
            ~ .carousel-indicators
            li:nth-child(2)
            .carousel-bullet,
          #carousel-3:checked
            ~ .control-3
            ~ .carousel-indicators
            li:nth-child(3)
            .carousel-bullet {
            color: #000;
          }

          body {
            background-color: #000030;
            color: #ffffff;  
          }

          .bg-white {
            background-color: #1e1e1e;
          }

          .text-gray-600 {
            color: #b0b0b0;
          }

          .text-gray-800 {
            color: #e0e0e0;
          }

          .text-gray-900 {
            color: #ffffff;
          }

          .border-gray-400 {
            border-color: #333333;
          }

          .hover\:text-black:hover {
            color: #ffffff;
          }

          .hover\:bg-gray-900:hover {
            background-color: #333333;
          }

          .hover\:border-black:hover {
            border-color: #ffffff;
          }

          .carousel-bullet {
            color: #555555;
          }

          .carousel-bullet:hover {
            color: #ffffff;
          }
        `}</style>

        <AnimateIn>
              <WarpShaderHero />
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <LogoCloud logos={logos} />
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <Feature />
        </AnimateIn>

        <AnimateIn>
          <ModelSection/>
        </AnimateIn>
        
        <AnimateIn >
          
            <Example />
          
        </AnimateIn>

        <AnimateIn >
          <Testimonials />
        </AnimateIn>

        <AnimateIn>
          <div id="contact" className="flex w-full justify-center bg-transparent">
            <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
              <Contact2
                // title="Entre em Contato"
                // description="Estamos disponíveis para dúvidas, feedback ou oportunidades de colaboração. Diga-nos como podemos ajudar!"
                // phone="(123) 34567890"
                // email="email@example.com"
                // web={{
                //   label: "shadcnblocks.com",
                //   url: "https://shadcnblocks.com",
                // }}
              />
            </div>
          </div>
        </AnimateIn>

        {/* <FaqsSection /> */}

        <AnimateIn>
          <Footer
            logo={
              <img
                src="/axios-removebg-preview.png"
                alt="Axios Studio Logo"
                className="h-40 w-40"
              />
            }
            brandName=""
            mainLinks={[
              { href: "/products", label: "Products" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ]}
            legalLinks={[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ]}
            copyright={{
              text: "© 2025 MathCode",
              license: "All rights reserved",
            }}
          />
        </AnimateIn>

    </SmoothLayout>
    );
}