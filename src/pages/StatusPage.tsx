import React from "react";
import { projectSnapshot } from "../data";

interface StatusPageProps {
  title: string;
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
}

// Shared shell for standalone pages (thank-you, 404) outside the landing page
export default function StatusPage({ title, eyebrow, heading, children }: StatusPageProps) {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-[#090F1D] text-white font-body flex flex-col">
      <title>{title}</title>
      <meta name="robots" content="noindex, nofollow" />

      <img
        src="/assets/silver_horizon/cta.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[30%_top] opacity-35"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#090F1D]/70 via-[#090F1D]/80 to-[#090F1D] pointer-events-none" />

      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        <a href="/" aria-label="ARS Svaasa home">
          <img
            src="/assets/silver_horizon/ARS_LOGO_Black.svg"
            alt="ARS Svaasa"
            className="h-12 sm:h-16 w-auto object-contain filter brightness-0 invert"
            width="160"
            height="64"
          />
        </a>
        <a
          href={`tel:${projectSnapshot.phoneRaw}`}
          className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
        >
          {projectSnapshot.phonePrimary}
        </a>
      </header>

      <section className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 py-16">
        <div className="w-full max-w-xl text-center space-y-6 animate-slide-up">
          <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#C5A880] block">
            {eyebrow}
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal leading-[1.15] tracking-tight text-white">
            {heading}
          </h1>
          {children}
        </div>
      </section>
    </main>
  );
}

export const primaryButton =
  "bg-[#B36B4C] hover:bg-[#8F563D] text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 tracking-wide inline-flex items-center justify-center border border-white/20";

export const secondaryButton =
  "text-white/90 hover:text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-colors tracking-wide inline-flex items-center justify-center border border-white/30 hover:border-white/60";
