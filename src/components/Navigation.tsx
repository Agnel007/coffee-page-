import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navigation: React.FC = () => {
  const { totalCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F0E7]/90 backdrop-blur-md border-b border-[#D8D1C5]/60 py-4 shadow-xs'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#24382E] rounded-xs"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.25em] text-[#24382E] group-hover:text-[#604638] transition-colors">
              MORROW
            </span>
            <span className="text-[0.6rem] tracking-[0.3em] text-[#92947A] uppercase font-sans font-medium -mt-1">
              Coffee Co.
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('collection')}
              className="text-xs font-medium tracking-[0.18em] uppercase text-[#24251F] hover:text-[#604638] transition-colors py-1 cursor-pointer focus:outline-hidden"
            >
              Shop Coffee
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-xs font-medium tracking-[0.18em] uppercase text-[#24251F] hover:text-[#604638] transition-colors py-1 cursor-pointer focus:outline-hidden"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('ritual')}
              className="text-xs font-medium tracking-[0.18em] uppercase text-[#24251F] hover:text-[#604638] transition-colors py-1 cursor-pointer focus:outline-hidden"
            >
              The Ritual
            </button>
          </nav>

          {/* Shopping Bag CTA & Mobile Toggle */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Bag"
              className="relative inline-flex items-center space-x-2 border border-[#D8D1C5] hover:border-[#24382E] px-4 py-2 rounded-xs bg-[#F5F0E7]/80 text-[#24382E] text-xs tracking-wider font-medium transition-all duration-200 cursor-pointer focus:outline-hidden"
            >
              <ShoppingBag className="w-4 h-4 text-[#24382E]" />
              <span className="hidden sm:inline text-[0.7rem] uppercase tracking-[0.15em]">Bag</span>
              {totalCount > 0 && (
                <span className="bg-[#24382E] text-[#F5F0E7] text-[0.65rem] font-bold w-4 h-4 rounded-full flex items-center justify-center -mr-1">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 text-[#24251F] hover:text-[#24382E] focus:outline-hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5F0E7] flex flex-col justify-between p-8 md:hidden animate-fade-in">
          <div className="flex justify-between items-center pb-6 border-b border-[#D8D1C5]">
            <div>
              <span className="font-serif text-xl font-bold tracking-[0.25em] text-[#24382E]">
                MORROW
              </span>
              <p className="text-[0.65rem] tracking-[0.3em] text-[#92947A] uppercase">Coffee Co.</p>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#24251F] hover:text-[#24382E]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-8 my-auto text-left">
            <button
              onClick={() => scrollToSection('collection')}
              className="text-left font-serif text-2xl text-[#24382E] hover:text-[#604638]"
            >
              01 / Shop Coffee
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-left font-serif text-2xl text-[#24382E] hover:text-[#604638]"
            >
              02 / Our Story
            </button>
            <button
              onClick={() => scrollToSection('ritual')}
              className="text-left font-serif text-2xl text-[#24382E] hover:text-[#604638]"
            >
              03 / The Ritual
            </button>
            <button
              onClick={() => scrollToSection('subscription')}
              className="text-left font-serif text-2xl text-[#24382E] hover:text-[#604638]"
            >
              04 / Coffee Subscriptions
            </button>
          </div>

          <div className="pt-6 border-t border-[#D8D1C5] text-xs text-[#92947A]">
            <p className="tracking-widest uppercase">Make Room for a Better Morning.</p>
          </div>
        </div>
      )}
    </>
  );
};
