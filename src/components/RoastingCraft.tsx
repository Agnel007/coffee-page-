import React from 'react';
import { ArrowRight } from 'lucide-react';

export const RoastingCraft: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F5F0E7] border-y border-[#D8D1C5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Image Anchor with Overlapping Text Layer */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-xs overflow-hidden shadow-lg border border-[#D8D1C5]">
              <img
                src="https://images.unsplash.com/photo-1525081907508-0b6c20140237?q=80&w=1400&auto=format&fit=crop"
                alt="Roasting coffee beans inside drum roaster"
                className="w-full h-full object-cover filter contrast-[1.03]"
              />
            </div>
            
            {/* Editorial Caption Tag */}
            <div className="mt-3 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.2em] text-[#92947A]">
              <span>FIG. 04 — THERMAL CONTROL & MAILLARD PHASE</span>
              <span>BATCH NO. 412</span>
            </div>
          </div>

          {/* Right Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#604638] font-semibold">
              04 / Craft & Precision
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#24382E] font-medium leading-[1.18]">
              Roasted with intention.
            </h2>

            <p className="text-sm md:text-base text-[#24251F]/80 font-light leading-relaxed">
              Roasting specialty coffee is the delicate art of thermal stewardship. Our goal is never to roast away the bean’s origin identity, but to illuminate it.
            </p>

            <p className="text-xs md:text-sm text-[#5C5E54] font-light leading-relaxed">
              By carefully controlling airflow, drum temperature, and Maillard development, we highlight natural sweetness and fruit acidity while avoiding harsh bitterness or dark roast oils.
            </p>

            {/* Micro Feature Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#D8D1C5]">
              <div>
                <h3 className="font-serif text-lg text-[#24382E]">Origin Clarity</h3>
                <p className="text-xs text-[#5C5E54] mt-1 font-light">
                  Light to medium roast profiles preserving micro-terroir character.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#24382E]">Weekly Cupping</h3>
                <p className="text-xs text-[#5C5E54] mt-1 font-light">
                  Every roast batch is sensory cup-tested prior to release.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#collection"
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#24382E] hover:text-[#604638] transition-colors border-b border-[#24382E] pb-1"
              >
                <span>Explore Current Roast Batches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
