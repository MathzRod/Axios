"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type SmoothLayoutProps = { children: ReactNode };

export function SmoothLayout({ children }: SmoothLayoutProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current!,
        content: contentRef.current!,
        smooth: 2,
        effects: true,
        normalizeScroll: true,
      });

      // ✅ AQUI: registra globalmente pra Header/Footer poderem usar
      (window as any).__smoother = smoother;

      return () => {
        smoother.kill();
      };
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} id="smooth-wrapper" className="min-h-screen">
      <div ref={contentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
}
