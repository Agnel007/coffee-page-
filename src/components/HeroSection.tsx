import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Top Editorial Metadata Line */}
      <div className="flex items-center justify-between pb-6 mb-8 md:mb-12 border-b border-[#D8D1C5]/70 text-[0.7rem] uppercase tracking-[0.2em] text-[#92947A]">
        <span>EST. 2024 · SPECIALTY ROASTERY</span>
        <span className="hidden sm:inline">SMALL BATCH · ETHICAL SOURCING</span>
        <span>ORIGIN & BLENDS</span>
      </div>

      {/* Main Asymmetrical Editorial Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline, Narrative & Actions */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8 pr-0 lg:pr-4">
          <div className="space-y-3">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#604638]">
              Morrow Coffee Co.
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24382E] leading-[1.12] tracking-tight font-medium">
              Make Room for a Better Morning.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#24251F]/80 max-w-lg font-light leading-relaxed">
            Thoughtfully roasted coffee for the moments that make a day. Crafted with patience, natural texture, and absolute flavor clarity.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToCollection}
              className="bg-[#24382E] hover:bg-[#1A2A22] text-[#F5F0E7] px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 shadow-xs hover:shadow-md flex items-center justify-center space-x-3 cursor-pointer group rounded-xs"
            >
              <span>Explore Our Coffee</span>
              <ArrowDownRight className="w-4 h-4 text-[#92947A] group-hover:text-[#F5F0E7] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={scrollToStory}
              className="border-b border-[#24251F]/40 hover:border-[#24382E] text-[#24251F] hover:text-[#24382E] py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors text-center sm:text-left cursor-pointer"
            >
              Discover Our Craft
            </button>
          </div>

          {/* Micro Detail Metadata */}
          <div className="pt-6 grid grid-cols-2 gap-4 border-t border-[#D8D1C5]/50 text-xs text-[#5C5E54]">
            <div>
              <span className="block text-[0.65rem] uppercase tracking-wider text-[#92947A]">Roast Frequency</span>
              <span className="font-medium text-[#24251F]">Weekly Micro-Batches</span>
            </div>
            <div>
              <span className="block text-[0.65rem] uppercase tracking-wider text-[#92947A]">Shipment</span>
              <span className="font-medium text-[#24251F]">Fresh Roast Guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Editorial Photo Anchor with Subtle Framing */}
        <div className="lg:col-span-6 relative mt-4 lg:mt-0">
          <div className="relative z-10 overflow-hidden bg-[#D8D1C5]/30 rounded-xs aspect-4/5 sm:aspect-5/4 lg:aspect-4/5 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop"
              alt="Pour over coffee being brewed with warm morning light"
              className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02] hover:scale-102 transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Subtle photographic detail badge */}
            <div className="absolute bottom-4 left-4 bg-[#24382E]/90 backdrop-blur-xs text-[#F5F0E7] px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] border border-[#F5F0E7]/20">
              01 / Fresh Pour Over Ritual
            </div>
          </div>

          {/* Asymmetric Offset Background Accent Box */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#92947A]/30 -z-0 rounded-xs hidden sm:block"></div>
        </div>
      </div>
    </section>
  );
};
