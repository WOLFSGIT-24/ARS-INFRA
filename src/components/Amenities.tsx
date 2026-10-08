import React, { useState } from "react";
import { 
  PartyPopper, Building, TreePine, Dumbbell, Waves, Gamepad2, 
  ArrowLeft, ArrowRight, Trophy, Ticket, Dog, Flower2, Circle, Smile 
} from "lucide-react";

interface AmenitiesProps {
  onOpenBooking?: () => void;
  onRequestDownload?: () => void;
}

export default function Amenities({ onOpenBooking, onRequestDownload }: AmenitiesProps) {
  const amenitiesList = [
    { icon: PartyPopper, label: "OUTDOOR\nPARTY LAWN" },
    { icon: Building, label: "CLUB HOUSE" },
    { icon: TreePine, label: "PARK &\nGARDEN" },
    { icon: Dumbbell, label: "INDOOR GYM" },
    { icon: Waves, label: "SWIMMING\nPOOL WITH\nTODDLERS'\nPOOL" },
    { icon: Gamepad2, label: "INDOOR GAME\nROOM" },
    { icon: Trophy, label: "MINI FOOTBALL\nGROUND" },
    { icon: Ticket, label: "AMPHITHEATER" },
    { icon: Dog, label: "PET PARK" },
    { icon: Flower2, label: "YOGA &\nMEDITATION HALL" },
    { icon: Circle, label: "BASKETBALL\nCOURT" },
    { icon: Smile, label: "CHILDREN\nPLAY AREA" },
  ];

  const [page, setPage] = useState(0);
  
  // Calculate items per page based on screen size (6 on desktop, 4 on tablet, 2 on mobile roughly, but we'll use a fixed track slide approach)
  const totalPages = Math.ceil(amenitiesList.length / 6);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="amenities" className="w-full py-16 sm:py-24 bg-[#FAFAF8] text-[#161A22] overflow-hidden font-body relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              35+ thoughtfully curated amenities
            </h2>
          </div>
          <div className="lg:col-span-6 space-y-5">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              From the expansive 14,962 sq.ft. Pavilion Clubhouse to active sports arenas and quiet nature trails, every space is designed around daily joy, wellness, and community warmth.
            </p>
            <div>
              <button
                onClick={onOpenBooking}
                className="bg-[#B36B4C] hover:bg-[#8F563D] text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center"
              >
                Book now
              </button>
            </div>
          </div>
        </div>

        {/* Icon Slider Grid Layout */}
        <div className="relative w-full flex items-center justify-center px-4 md:px-16">
          
          {/* Decorative Left Arrow */}
          <button 
            onClick={prevPage}
            className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors bg-white shadow-sm hover:shadow active:scale-95"
            aria-label="Previous amenities"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Slider Viewport */}
          <div className="overflow-hidden w-full max-w-5xl mx-auto">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {/* Group items by 6 (2 rows of 3) per page */}
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full shrink-0 flex-none px-2">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-12 md:gap-x-24 gap-y-12 sm:gap-y-16 w-full">
                    {amenitiesList.slice(pageIndex * 6, (pageIndex + 1) * 6).map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center justify-center group text-center cursor-pointer">
                          {/* Circle */}
                          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#F5F2EB] flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-105 shadow-sm border border-[#EBE6DA]">
                            <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#2C3338] stroke-[1.5]" />
                          </div>
                          {/* Label */}
                          <span className="text-[9px] sm:text-[10px] font-semibold text-[#161A22] uppercase tracking-[0.15em] whitespace-pre-line leading-relaxed">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Right Arrow */}
          <button 
            onClick={nextPage}
            className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:text-gray-900 cursor-pointer transition-colors bg-white shadow-sm hover:shadow active:scale-95"
            aria-label="Next amenities"
          >
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                page === idx ? "w-8 bg-[#B36B4C]" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
