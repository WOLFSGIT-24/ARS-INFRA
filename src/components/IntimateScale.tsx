import React from "react";

interface IntimateScaleProps {
  onRequestDownload?: () => void;
  onOpenEnquiry?: () => void;
}

export default function IntimateScale({ onRequestDownload, onOpenEnquiry }: IntimateScaleProps) {
  // Bottom Auto-Scrolling Building Images
  const autoScrollImages = [
    {
      src: "/assets/silver_horizon/building_slide_01.webp",
      alt: "ARS Svasa Architectural View 1",
    },
    {
      src: "/assets/silver_horizon/building_slide_02.webp",
      alt: "ARS Svasa Facade View 2",
    },
    {
      src: "/assets/silver_horizon/building_slide_03.webp",
      alt: "ARS Svasa Elevated Landmark View 3",
    },
    {
      src: "/assets/silver_horizon/building_slide_04.webp",
      alt: "ARS Svasa Residential Skyline View 4",
    },
    {
      src: "/assets/silver_horizon/building_slide_05.webp",
      alt: "ARS Svasa Tower Perspective View 5",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white text-[#161A22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header Grid matching reference screenshot typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-14">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#C5A880] uppercase block mb-2">
              Elegant Heights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15] capitalize">
              The Architectural Beauty of ARS Svasa
            </h2>
          </div>

          {/* Right Description & CTA */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              The elevation of ARS Svasa combines modern elegance with impressive height, featuring sleek lines and uniform balconies that draw the eye upward. Its warm-toned facade blends harmoniously with the surroundings, creating a refined, luxurious presence that redefines urban living.
            </p>
            <div>
              <button
                onClick={onOpenEnquiry}
                className="bg-black hover:bg-neutral-800 text-white font-body text-xs sm:text-sm font-semibold px-8 py-3 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide"
              >
                Explore
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Full-Width Horizontal Auto-Scrolling Image Gallery */}
      <style>{`
        @keyframes autoScrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-autoscroll {
          display: flex;
          width: max-content;
          animation: autoScrollMarquee 35s linear infinite;
        }
        .animate-autoscroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full overflow-hidden relative pt-2">
        <div className="animate-autoscroll gap-6 px-6">
          {[...autoScrollImages, ...autoScrollImages].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[620px] aspect-[16/11] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-[#FAF8F5] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
