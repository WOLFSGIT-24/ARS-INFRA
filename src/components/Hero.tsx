import React from "react";

interface HeroProps {
  onOpenEnquiry: () => void;
  onRequestDownload?: () => void;
}

export default function Hero({ onOpenEnquiry, onRequestDownload }: HeroProps) {
  return (
    <section
      id="overview"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center text-center overflow-hidden bg-[#8bb4dd]"
    >
      {/* Background Photography - Instant High-Priority LCP Render */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/silver_horizon/banner.png"
          alt="ARS Svaasa Architectural Landmark"
          className="w-full h-full object-cover object-[center_top] sm:object-[center_top]"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />

        {/* Soft subtle sky gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4b82]/45 via-transparent to-transparent pointer-events-none" />


      </div>

      {/* Upper Empty Spacer for Fixed Header */}
      <div className="h-20 sm:h-36 w-full relative z-10 shrink-0" />

      {/* Main Content: Slightly below center on Mobile, Middle-Left on Desktop */}
      <div className="flex w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 justify-start my-auto pt-16 sm:pt-4 pb-12 sm:pb-32">
        <div className="max-w-xl lg:max-w-2xl text-left flex flex-col items-start space-y-2.5 sm:space-y-6">
          
          {/* Large Headline */}
          <h1 
            className="font-display text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] capitalize"
          >
            Welcome to Svaasa <br className="hidden sm:inline" />
            Luxury Living, Elevated
          </h1>

          {/* Location, Specification, Price */}
          <div className="space-y-0.5 sm:space-y-1.5 text-white/95 font-body text-xs sm:text-base md:text-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] font-medium">
            <p>Sarjapura Road, Yamare, Bengaluru</p>
            <p>3 BHK Luxury Residences (1839 & 2083 SQ.FT)</p>
            <p>Price On Request</p>
          </div>

          {/* Action Buttons */}
          <div 
            className="pt-1.5 sm:pt-2 flex flex-row items-center justify-start gap-2.5 sm:gap-3 w-auto"
          >
            <button
              onClick={onOpenEnquiry}
              className="bg-[#B36B4C] hover:bg-[#8F563D] text-white font-body text-xs sm:text-sm font-semibold px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-full border border-white/20 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
            >
              Book today
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6 sm:h-10 w-full relative z-10 shrink-0" />
    </section>
  );
}
