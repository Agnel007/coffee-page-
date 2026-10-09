import React from 'react';
import { BRAND_VALUES } from '../data/coffeeData';

export const BrandIntro: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-[#24382E] text-[#F5F0E7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header Label */}
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#92947A]">
            02 / Philosophy
          </span>
          <div className="h-px bg-[#92947A]/30 flex-1"></div>
        </div>

        {/* Large Typographic Main Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.2] text-[#F5F0E7]">
              “Good coffee. No unnecessary fuss.”
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#F5F0E7]/80 font-light leading-relaxed max-w-2xl">
              We believe coffee should be an unhurried sanctuary in your daily routine. We don’t hide behind complex jargon or hyper-processed gimmicks—just meticulously sourced green coffee, roasted to highlight its inherent origin sweetness.
            </p>
          </div>

          {/* Small Tactile Photo Accent Detail */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="w-full max-w-xs aspect-4/3 overflow-hidden rounded-xs border border-[#92947A]/40">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
                alt="Tactile raw coffee beans texture"
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>
            <span className="mt-2 text-[0.65rem] tracking-[0.2em] text-[#92947A] uppercase">
              Tactile Quality · Batch Inspection
            </span>
          </div>
        </div>

        {/* 3 Brand Pillars - Editorial List with Fine Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#92947A]/30">
          {BRAND_VALUES.map((item) => (
            <div key={item.number} className="space-y-3 pr-4">
              <span className="font-serif text-xl text-[#92947A] font-light">
                {item.number}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#F5F0E7]">
                {item.title}
              </h3>
              <p className="text-xs text-[#F5F0E7]/70 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
