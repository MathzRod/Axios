import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
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
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24">
      <div className="px-4 lg:px-8">

        {/* TOPO */}
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-2"
            aria-label={brandName}
          >
            {logo}
            {brandName && (
              <span className="font-bold text-xl">{brandName}</span>
            )}
          </a>

          {/* REDES SOCIAIS FIXAS */}
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {/* WhatsApp */}
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

            {/* Instagram */}
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

        {/* LINKS */}
        <div className="pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">

          {/* LINKS PRINCIPAIS */}
          <nav className="lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
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
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-6 text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
