import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#24251F] text-[#F5F0E7] pt-16 pb-12 border-t border-[#92947A]/30 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#92947A]/20">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-[0.25em] text-[#F5F0E7]">
                MORROW
              </span>
              <p className="text-[0.65rem] tracking-[0.3em] text-[#92947A] uppercase">Coffee Co.</p>
            </div>
            <p className="text-[#F5F0E7]/70 font-light max-w-sm leading-relaxed">
              An independent specialty coffee roastery focused on carefully sourced beans, thoughtful roasting, exceptional flavour, and the everyday morning ritual.
            </p>
            <p className="text-[0.68rem] tracking-widest text-[#92947A] uppercase pt-2">
              “Make Room for a Better Morning.”
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-[#92947A]">
              Navigation
            </span>
            <ul className="space-y-2 text-[#F5F0E7]/80 font-light">
              <li>
                <a href="#collection" className="hover:text-[#F5F0E7] transition-colors">
                  Signature Collection
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F5F0E7] transition-colors">
                  Roastery Philosophy
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-[#F5F0E7] transition-colors">
                  The Daily Ritual Guide
                </a>
              </li>
              <li>
                <a href="#subscription" className="hover:text-[#F5F0E7] transition-colors">
                  Coffee Subscriptions
                </a>
              </li>
            </ul>
          </div>

          {/* Roastery Details & Social Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-[#92947A]">
              Roastery & Inquiries
            </span>
            <div className="text-[#F5F0E7]/80 font-light space-y-1">
              <p>Morrow Roasting Lab</p>
              <p>Batch Roasted & Dispatched Weekly</p>
              <p className="text-[#92947A]">hello@morrowcoffee.demo</p>
            </div>

            <div className="pt-2 flex items-center space-x-4 text-[0.68rem] tracking-wider text-[#92947A]">
              <span className="hover:text-[#F5F0E7] cursor-pointer">INSTAGRAM</span>
              <span>·</span>
              <span className="hover:text-[#F5F0E7] cursor-pointer">SUBSTACK</span>
              <span>·</span>
              <span className="hover:text-[#F5F0E7] cursor-pointer">VIMEO</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[0.68rem] text-[#92947A] tracking-wider">
          <p>© {new Date().getFullYear()} MORROW COFFEE CO. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Design-first Specialty Coffee Demonstration Concept.</p>
        </div>
      </div>
    </footer>
  );
};
