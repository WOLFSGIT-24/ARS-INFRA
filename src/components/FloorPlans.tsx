import React, { useState } from "react";
import { ArrowLeft, ArrowRight, MapPin, ZoomIn, Lock, X, Check } from "lucide-react";
import { floorPlansData } from "../data";
import { FloorPlanUnit } from "../types";

interface FloorPlansProps {
  onSelectUnit: (unitType: string) => void;
  isUnlocked: boolean;
  onUnlockRequest: () => void;
  onOpenBooking?: () => void;
}

export default function FloorPlans({
  onSelectUnit,
  isUnlocked,
  onUnlockRequest,
  onOpenBooking,
}: FloorPlansProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<FloorPlanUnit | null>(null);

  // Residence cards with exact floor plan blueprint images and brochure data
  const residenceCards = [
    {
      unitData: { ...floorPlansData[0], title: "Typical Floor - Unit 1", imageUrl: "/floor_plan_typical_1.webp" },
      image: "/floor_plan_typical_1.webp",
      tag: "Typical Floor",
      name: "Unit 1",
      location: "Standard Layout",
      sizeBadge: "Explore",
    },
    {
      unitData: { ...floorPlansData[1], title: "Typical Floor - Unit 2", imageUrl: "/floor_plan_typical_2.webp" },
      image: "/floor_plan_typical_2.webp",
      tag: "Typical Floor",
      name: "Unit 2",
      location: "Standard Layout",
      sizeBadge: "Explore",
    },
    {
      unitData: {
        ...floorPlansData[1],
        unitNo: "Flat No 4",
        title: "Typical Floor - Unit 4",
        imageUrl: "/floor_plan_typical_4.webp",
      },
      image: "/floor_plan_typical_4.webp",
      tag: "Typical Floor",
      name: "Unit 4",
      location: "Standard Layout",
      sizeBadge: "Explore",
    },
    {
      unitData: {
        ...floorPlansData[0],
        title: "Private Terrace - Unit 1",
        imageUrl: "/floor_plan_terrace_1.webp",
        highlights: [
          ...floorPlansData[0].highlights,
          "Private terrace garden area of 177 Sq.Ft with direct sit-out access",
        ],
      },
      image: "/floor_plan_terrace_1.webp",
      tag: "Private Terrace",
      name: "Unit 1",
      location: "Terrace Access",
      sizeBadge: "Explore",
    },
  ];

  const totalCards = residenceCards.length;

  const getMaxIndex = () => {
    if (typeof window === "undefined") return Math.max(0, totalCards - 1);
    if (window.innerWidth >= 1024) return Math.max(0, totalCards - 3);
    if (window.innerWidth >= 640) return Math.max(0, totalCards - 2);
    return Math.max(0, totalCards - 1);
  };

  const nextSlide = () => {
    const max = getMaxIndex();
    if (max === 0) return;
    setCurrentIndex((prev) => (prev >= max ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const max = getMaxIndex();
    if (max === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? max : prev - 1));
  };

  React.useEffect(() => {
    const handleResize = () => {
      const max = getMaxIndex();
      setCurrentIndex((prev) => Math.min(prev, max));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [totalCards]);

  const handleCardClick = (plan: FloorPlanUnit) => {
    if (!isUnlocked) {
      onUnlockRequest();
    } else {
      setSelectedPlan(plan);
    }
  };

  return (
    <section id="floor-plans" className="w-full py-16 sm:py-24 bg-[#FAF8F5] text-[#161A22] overflow-hidden font-body">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Header matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-12">
          
          {/* Left Large Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#161A22] leading-[1.15]">
              Explore your dream residence
            </h2>
          </div>

          {/* Right Description & Action */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-normal">
              Expansive 3 BHK residences in a G+26 floor development, crafted with three-side ventilation and sunlit private decks.
            </p>
            <div>
              {!isUnlocked ? (
                <button
                  onClick={onUnlockRequest}
                  className="bg-[#B36B4C] hover:bg-[#8F563D] text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Unlock floor plans</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (residenceCards[0]) setSelectedPlan(residenceCards[0].unitData);
                  }}
                  className="bg-[#0E172A] hover:bg-[#1E2D4A] text-white font-body text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer tracking-wide inline-flex items-center justify-center gap-2"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>View all floor plans</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Lock / Unlock Status Banner */}
        {!isUnlocked ? (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-center justify-between gap-4 flex-wrap shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#B36B4C]/15 flex items-center justify-center text-[#B36B4C] shrink-0 shadow-xs">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-[#161A22]">
                  Blueprints & Detailed Layouts are Locked
                </p>
                <p className="text-[11px] sm:text-xs text-gray-600 mt-0.5">
                  Fill our brief enquiry popup form to instantly unlock clear, high-resolution floor plans and room dimensions.
                </p>
              </div>
            </div>
            <button
              onClick={onUnlockRequest}
              className="bg-[#B36B4C] hover:bg-[#8F563D] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Unlock Now</span>
            </button>
          </div>
        ) : (
          <div className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 flex items-center gap-3 shadow-xs">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-emerald-900">
              Floor plans unlocked. Click any layout to zoom in and review room dimensions and architectural inclusions.
            </p>
          </div>
        )}

        {/* Sliding Portrait Cards Track matching screenshot */}
        <div className="relative overflow-hidden pb-4">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (typeof window !== "undefined" && window.innerWidth < 640 ? 88 : window.innerWidth < 1024 ? 46 : 32.5)}%)`,
            }}
          >
            {residenceCards.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(item.unitData)}
                className="w-[85vw] sm:w-[44vw] lg:w-[calc(33.333%-16px)] shrink-0 aspect-[4/5] sm:aspect-[3/4] relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group bg-white border border-gray-200/80 flex flex-col justify-between p-4 sm:p-5 select-none"
              >
                {/* Top Badges Row */}
                <div className="relative z-10 flex items-center justify-between">
                  {!isUnlocked ? (
                    <span className="bg-[#B36B4C] text-white text-[10px] sm:text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                      <Lock className="w-3 h-3" />
                      <span>Locked</span>
                    </span>
                  ) : (
                    <span className="bg-emerald-600 text-white text-[10px] sm:text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      <span>Unlocked</span>
                    </span>
                  )}
                  <span className="bg-[#0E172A] text-white text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* Floor Plan Blueprint Image Container */}
                <div className="absolute inset-0 flex items-center justify-center p-6 pt-12 pb-24 bg-white overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className={`max-w-full max-h-full object-contain transition-all duration-500 ${
                      !isUnlocked
                        ? "filter blur-md md:blur-lg scale-110 opacity-35"
                        : "transform group-hover:scale-105 opacity-100"
                    }`}
                  />
                  {/* Center Lock Overlay when locked */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-white/20 backdrop-blur-[2px]">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 shadow-xl border border-[#B36B4C]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-[#B36B4C]" />
                      </div>
                      <span className="inline-block bg-[#0E172A] text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full shadow-sm mb-1.5">
                        Floor Plan Locked
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#161A22] max-w-[200px]">
                        Fill form to view layout
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Floating Card matching screenshot */}
                <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-gray-200/60 flex items-center justify-between gap-3 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base sm:text-lg font-medium text-[#161A22] tracking-tight truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5 truncate">
                      <MapPin className="h-3.5 w-3.5 text-[#161A22] shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </p>
                  </div>

                  {!isUnlocked ? (
                    <div className="shrink-0 bg-[#B36B4C] group-hover:bg-[#8F563D] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-sm flex items-center gap-1.5 transition-colors">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Unlock</span>
                    </div>
                  ) : (
                    <div className="shrink-0 bg-[#E8E1CE] group-hover:bg-[#DFD5BE] text-[#42392E] font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-xs flex items-center gap-1.5 transition-colors">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Explore</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Centered Circular Arrow Navigation Controls matching screenshot */}
        <div className={`flex justify-center items-center gap-3 pt-8 sm:pt-10 ${totalCards <= 3 ? "lg:hidden" : ""}`}>
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#B36B4C] hover:bg-[#8F563D] text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Previous residences"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#B36B4C] hover:bg-[#8F563D] text-white flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next residences"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </div>

      {/* Blueprint Detail & Dimension Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 flex flex-col gap-6 relative shadow-2xl max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-2xl font-normal text-[#161A22] tracking-tight">
                  {selectedPlan.title}
                </h3>
                <p className="text-xs text-gray-500 font-medium uppercase mt-0.5">
                  SBUA: {selectedPlan.sbua} • Carpet Area: {selectedPlan.carpetArea} ({selectedPlan.facing})
                </p>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 cursor-pointer"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-[48vh] p-4 bg-[#FAF8F5] rounded-2xl border border-gray-100 flex items-center justify-center overflow-auto">
              <img
                src={selectedPlan.imageUrl}
                alt={selectedPlan.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Key Architectural Inclusions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {selectedPlan.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B36B4C] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body border-t border-gray-100 pt-4">
              <span className="text-gray-400 italic">
                *Dimension standards adhere to RERA carpet guidelines.
              </span>
              <button
                onClick={() => {
                  onSelectUnit(selectedPlan.type);
                  setSelectedPlan(null);
                }}
                className="bg-[#B36B4C] hover:bg-[#8F563D] text-white font-body text-xs font-semibold tracking-wide px-8 py-3 rounded-full transition-all shadow-md cursor-pointer"
              >
                Request Unit Pricing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
