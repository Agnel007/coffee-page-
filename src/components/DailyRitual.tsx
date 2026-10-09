import React, { useState } from 'react';
import { BREW_GUIDE_DATA } from '../data/coffeeData';
import { Sparkles, Clock, Flame, Scale } from 'lucide-react';

export const DailyRitual: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<'pourover' | 'espresso'>('pourover');
  const currentGuide = BREW_GUIDE_DATA[activeMethod];

  return (
    <section id="ritual" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#D8D1C5]">
        <div>
          <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#92947A]">
            05 / The Morning Ceremony
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#24382E] font-medium mt-2">
            The Daily Ritual.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-xs text-[#5C5E54] max-w-xs font-light">
          The sound of grinding beans, the bloom of hot water, and the warm aromafilling the kitchen.
        </p>
      </div>

      {/* Editorial Photo Trio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-[#D8D1C5]/30 group">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop"
            alt="Warm ceramic mug with hot coffee in morning sun"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter saturate-[0.95]"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#F5F0E7]/90 backdrop-blur-xs p-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#24382E] border border-[#D8D1C5]">
            01 · Unhurried Mornings
          </div>
        </div>

        <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-[#D8D1C5]/30 group mt-0 md:-mt-4">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop"
            alt="Hand pouring hot water over fresh coffee grounds"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter saturate-[0.95]"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#24382E]/90 backdrop-blur-xs p-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#F5F0E7] border border-[#F5F0E7]/20">
            02 · Precision Bloom & Pour
          </div>
        </div>

        <div className="relative aspect-4/5 overflow-hidden rounded-xs bg-[#D8D1C5]/30 group">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop"
            alt="Freshly brewed coffee cup on textured wooden table"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter saturate-[0.95]"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-[#F5F0E7]/90 backdrop-blur-xs p-3 text-[0.68rem] uppercase tracking-[0.18em] text-[#24382E] border border-[#D8D1C5]">
            03 · Sensory Experience
          </div>
        </div>
      </div>

      {/* Interactive Brew Ratio Guide Component */}
      <div className="bg-[#24382E] text-[#F5F0E7] p-8 md:p-12 rounded-xs border border-[#92947A]/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#92947A]/30">
          <div>
            <div className="flex items-center space-x-2 text-[0.68rem] uppercase tracking-[0.2em] text-[#92947A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Brew Ratio Guide</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mt-1 text-[#F5F0E7]">
              Master Your Home Brew.
            </h3>
          </div>

          {/* Brew Method Tabs */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0 bg-[#1A2A22] p-1 rounded-xs border border-[#92947A]/30">
            <button
              onClick={() => setActiveMethod('pourover')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-xs transition-colors cursor-pointer ${
                activeMethod === 'pourover'
                  ? 'bg-[#F5F0E7] text-[#24382E]'
                  : 'text-[#F5F0E7]/70 hover:text-[#F5F0E7]'
              }`}
            >
              Pour Over
            </button>
            <button
              onClick={() => setActiveMethod('espresso')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-xs transition-colors cursor-pointer ${
                activeMethod === 'espresso'
                  ? 'bg-[#F5F0E7] text-[#24382E]'
                  : 'text-[#F5F0E7]/70 hover:text-[#F5F0E7]'
              }`}
            >
              Espresso
            </button>
          </div>
        </div>

        {/* Selected Brew Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brew Metrics */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-start space-x-3">
              <Scale className="w-4 h-4 text-[#92947A] mt-1 shrink-0" />
              <div>
                <span className="block text-[0.65rem] uppercase tracking-widest text-[#92947A]">Brew Ratio</span>
                <span className="text-base font-semibold text-[#F5F0E7]">{currentGuide.ratio}</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Flame className="w-4 h-4 text-[#92947A] mt-1 shrink-0" />
              <div>
                <span className="block text-[0.65rem] uppercase tracking-widest text-[#92947A]">Water Temp</span>
                <span className="text-base font-semibold text-[#F5F0E7]">{currentGuide.temp}</span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-[#92947A] mt-1 shrink-0" />
              <div>
                <span className="block text-[0.65rem] uppercase tracking-widest text-[#92947A]">Target Extraction Time</span>
                <span className="text-base font-semibold text-[#F5F0E7]">{currentGuide.time}</span>
              </div>
            </div>
          </div>

          {/* Step by Step Guide */}
          <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-[#92947A]/30 pt-6 lg:pt-0 lg:pl-8">
            <h4 className="font-serif text-lg text-[#F5F0E7] mb-4">
              Step-by-Step Brew Sequence
            </h4>
            <ol className="space-y-3">
              {currentGuide.steps.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm text-[#F5F0E7]/80 font-light">
                  <span className="font-serif text-[#92947A] font-medium text-sm">0{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
