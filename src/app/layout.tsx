import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axios-gilt.vercel.app"),

  title: "Soluções 3D Profissionais para Empresas | Axios Studio",

  description:
    "Modelagem 3D, prototipagem e impressão 3D profissional para empresas. Brindes corporativos, produtos personalizados e soluções sob medida.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon3.png",
    apple: "/icon3.png",
  },

  openGraph: {
    title: "Soluções 3D Profissionais para Empresas | Axios Studio",
    description:
      "Soluções completas em modelagem e impressão 3D profissional para empresas e projetos corporativos.",
    url: "/",
    siteName: "Axios Studio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/axios-removebg-preview.png", // recomendo criar esse
        width: 1200,
        height: 630,
        alt: "Axios Studio - Soluções 3D Profissionais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Soluções 3D Profissionais para Empresas | Axios Studio",
    description:
      "Modelagem e impressão 3D profissional para empresas. Solicite um orçamento.",
    images: ["/og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
