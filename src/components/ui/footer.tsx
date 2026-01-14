import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  mainLinks: Array<{ href: string; label: string }>;
  legalLinks: Array<{ href: string; label: string }>;
  copyright: {
    text: string;
    license?: string;
  };
}

export function Footer({
  logo,
  brandName,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pt-16 pb-6 lg:pt-24 lg:pb-8">
      <div className="px-4 lg:px-8 max-w-7xl mx-auto">

        {/* TOPO */}
        <div
          className="
            flex flex-col items-center text-center gap-6
            md:flex-row md:items-start md:justify-between md:text-left
          "
        >
          {/* LOGO + NOME */}
          <a
            href="/"
            aria-label={brandName}
            className="flex items-center gap-2"
          >
            {logo}
            {brandName && (
              <span className="font-bold text-xl">{brandName}</span>
            )}
          </a>

          {/* REDES SOCIAIS */}
          <ul className="flex list-none gap-3">
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-green-300"
                asChild
              >
                <a
                  href="https://wa.me/5511964887010"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </li>

            <li>
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-pink-900"
                asChild
              >
                <a
                  href="https://www.instagram.com/jp3d.dream/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </li>
          </ul>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-10
            flex flex-col items-center text-center gap-6
            lg:grid lg:grid-cols-10 lg:items-start lg:text-left
          "
        >
          {/* COPYRIGHT */}
          <div
            className="
              text-sm leading-6 text-muted-foreground
              lg:col-[1/4] lg:row-[1/3]
            "
          >
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>

          {/* LINKS PRINCIPAIS */}
          <nav className="lg:col-[4/11]">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-white underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* LINKS LEGAIS */}
          <nav className="lg:col-[4/11]">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
