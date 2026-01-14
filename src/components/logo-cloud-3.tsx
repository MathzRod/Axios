import { InfiniteSlider } from "@/components/ui/infinite-slider";

import { cn } from "@/lib/utils";

type Logo = {
  src: string;       // Caminho da imagem (URL ou asset local).
  alt: string;       // Texto alternativo da imagem (acessibilidade).
  width?: number;    // Largura opcional.
  height?: number;   // Altura opcional.
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];    // Array de logos que será exibido no slider.
};


export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {

  return (
    <div
      {...props} // repassa id, role, style, etc. caso tenha sido enviado
      className={cn(
        "overflow-hidden py-4  bg-[#00001A]  ",
        className // adiciona classes customizadas enviadas pelo usuário
      )}
    >
      <InfiniteSlider gap={42} reverse duration={45} durationOnHover={20}>
       

        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="
              flex items-center justify-center
              h-20 w-48
              md:h-24 md:w-64
              invert brightness-0
            "
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}

      </InfiniteSlider>
    </div>
  );
}
