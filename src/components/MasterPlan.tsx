import React, { useState } from "react";
import { ZoomIn, X } from "lucide-react";

interface MasterPlanProps {
  onSelectUnit?: (unitType: string) => void;
  onOpenBooking?: () => void;
}

export default function MasterPlan({ onSelectUnit, onOpenBooking }: MasterPlanProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="master-plan" className="w-full py-16 sm:py-24 bg-[#FAF8F5] text-[#161A22] overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header matching above sections (Left headline, Right description) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-10 sm:mb-14">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              A masterplan designed with purpose
            </h2>
          </div>

          {/* Right Description & Action */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              The ARS Svaasa masterplan offers a spacious and efficient layout, featuring well ventilated 1839 and 2083 sq. ft. units. Wide corridors, a dedicated fire lobby, and 3 high-speed lifts ensure easy access and safety, creating a perfect blend of luxury and practicality.
            </p>
            <div>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#0B4D8C] hover:bg-[#003B70] text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center gap-2"
              >
                <ZoomIn className="h-4 w-4" />
                <span>Enlarge Master Plan</span>
              </button>
            </div>
          </div>

        </div>

        {/* Big Minimalist Master Plan Image Showcase Card */}
        <div className="bg-white border border-gray-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm relative group overflow-hidden">
          
          {/* Main Master Plan Image Container */}
          <div
            onClick={() => setModalOpen(true)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] bg-[#FAF8F5] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer border border-gray-100"
          >
            <img
              src="/assets/silver_horizon/master_plan_layout.webp"
              alt="ARS Svaasa Master Plan & Parking Layout"
              loading="lazy"
              className="w-full h-full object-contain p-2 sm:p-6 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Subtle Zoom Hint on Hover */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
                <ZoomIn className="h-4 w-4" />
                <span>Click to expand full blueprint</span>
              </div>
            </div>
          </div>

          {/* Key Project Specifications Footnote Stats Bar matching Brochure style */}
          <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-[#2C5E3B] text-white p-3.5 rounded-xl shadow-sm border border-[#1F472B]">
              <span className="text-[11px] text-[#A3C9A6] uppercase tracking-wider block font-medium">No. of Flats</span>
              <span className="text-base sm:text-lg font-bold">88 Flats</span>
            </div>
            <div className="bg-[#2C5E3B] text-white p-3.5 rounded-xl shadow-sm border border-[#1F472B]">
              <span className="text-[11px] text-[#A3C9A6] uppercase tracking-wider block font-medium">No. of Floors</span>
              <span className="text-base sm:text-lg font-bold">G+22 Floors</span>
            </div>
            <div className="bg-[#2C5E3B] text-white p-3.5 rounded-xl shadow-sm border border-[#1F472B]">
              <span className="text-[11px] text-[#A3C9A6] uppercase tracking-wider block font-medium">Parking</span>
              <span className="text-base sm:text-lg font-bold">Basement</span>
            </div>
            <div className="bg-[#2C5E3B] text-white p-3.5 rounded-xl shadow-sm border border-[#1F472B]">
              <span className="text-[11px] text-[#A3C9A6] uppercase tracking-wider block font-medium">Lifts</span>
              <span className="text-base sm:text-lg font-bold">3 (Schindler 8 Pax)</span>
            </div>
          </div>

        </div>

      </div>

      {/* High-Resolution Fullscreen Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-6xl w-full p-4 sm:p-6 relative shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-normal text-[#161A22] tracking-tight">
                  ARS Svaasa: Site Master Plan & Parking Plan
                </h3>
                <p className="text-xs text-gray-500">
                  G+22 Floors • 88 Flats • 1839 & 2083 Sq.Ft Units • Basement Parking
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-auto flex-1 my-4 flex items-center justify-center bg-[#FAF8F5] p-2 sm:p-6 rounded-xl border border-gray-100">
              <img
                src="/assets/silver_horizon/master_plan_layout.webp"
                alt="ARS Svaasa Full Master Plan"
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-xs text-gray-400 hidden sm:block">
                All layouts subject to final approvals
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2.5 bg-[#0B4D8C] hover:bg-[#003B70] text-white rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
