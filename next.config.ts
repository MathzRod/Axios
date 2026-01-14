import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    // se usar outros domínios, é só colocar aqui também
    // domains: ["images.unsplash.com", "another-domain.com"],
  },
};

export default nextConfig;
