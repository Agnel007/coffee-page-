import React, { useState } from 'react';
import { Check, Calendar, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/coffeeData';

export const SubscriptionCTA: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedFrequency, setSelectedFrequency] = useState<'2weeks' | '4weeks'>('2weeks');
  const [selectedCoffee, setSelectedCoffee] = useState(PRODUCTS[0]);

  const handleSubscribeDemo = () => {
    addToCart(selectedCoffee, 'Whole Bean (Subscribed)', 1);
  };

  return (
    <section id="subscription" className="py-20 md:py-32 bg-[#F5F0E7] border-t border-[#D8D1C5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#24382E] text-[#F5F0E7] rounded-xs p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#92947A]">
                06 / Coffee Subscription
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] text-[#F5F0E7]">
                Your next favourite cup, on repeat.
              </h2>

              <p className="text-sm sm:text-base text-[#F5F0E7]/80 font-light leading-relaxed">
                Never run out of freshly roasted beans. Enjoy 10% off every shipment, free roastery dispatch, and complete flexibility to pause or skip anytime.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#92947A]/30">
                <div className="flex items-center space-x-3 text-xs text-[#F5F0E7]/90 font-light">
                  <Check className="w-4 h-4 text-[#92947A]" />
                  <span>Freshly roasted micro-batches dispatched weekly</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#F5F0E7]/90 font-light">
                  <Calendar className="w-4 h-4 text-[#92947A]" />
                  <span>Modify grind size, frequency, or pause with one click</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-[#F5F0E7]/90 font-light">
                  <Truck className="w-4 h-4 text-[#92947A]" />
                  <span>Complimentary eco-friendly shipping included</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Subscription Selector Box */}
            <div className="lg:col-span-6 bg-[#1A2A22] p-6 sm:p-8 rounded-xs border border-[#92947A]/40 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#92947A]/30">
                <span className="text-xs uppercase tracking-widest text-[#92947A]">Configure Subscription</span>
                <span className="bg-[#604638] text-[#F5F0E7] text-[0.6rem] uppercase tracking-widest px-2.5 py-0.5 rounded-xs font-semibold">
                  Save 10%
                </span>
              </div>

              {/* Coffee Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#92947A] mb-2">
                  Select Roast Blend
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => setSelectedCoffee(prod)}
                      className={`p-2.5 text-center text-xs rounded-xs border transition-all cursor-pointer ${
                        selectedCoffee.id === prod.id
                          ? 'border-[#F5F0E7] bg-[#24382E] text-[#F5F0E7]'
                          : 'border-[#92947A]/30 text-[#F5F0E7]/60 hover:text-[#F5F0E7]'
                      }`}
                    >
                      <span className="block font-serif font-medium">{prod.name}</span>
                      <span className="text-[0.6rem] opacity-70">${(prod.price * 0.9).toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Frequency */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#92947A] mb-2">
                  Delivery Frequency
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedFrequency('2weeks')}
                    className={`py-2.5 px-4 text-xs font-medium uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                      selectedFrequency === '2weeks'
                        ? 'border-[#F5F0E7] bg-[#24382E] text-[#F5F0E7]'
                        : 'border-[#92947A]/30 text-[#F5F0E7]/60 hover:text-[#F5F0E7]'
                    }`}
                  >
                    Every 2 Weeks
                  </button>
                  <button
                    onClick={() => setSelectedFrequency('4weeks')}
                    className={`py-2.5 px-4 text-xs font-medium uppercase tracking-wider rounded-xs border transition-all cursor-pointer ${
                      selectedFrequency === '4weeks'
                        ? 'border-[#F5F0E7] bg-[#24382E] text-[#F5F0E7]'
                        : 'border-[#92947A]/30 text-[#F5F0E7]/60 hover:text-[#F5F0E7]'
                    }`}
                  >
                    Monthly (4 Weeks)
                  </button>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-[#92947A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-wider text-[#92947A]">Subtotal Per Shipment</span>
                  <span className="font-serif text-2xl font-semibold text-[#F5F0E7]">
                    ${(selectedCoffee.price * 0.9).toFixed(2)}
                  </span>
                  <span className="text-[0.65rem] text-[#92947A] line-through ml-2">
                    ${selectedCoffee.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleSubscribeDemo}
                  className="w-full sm:w-auto bg-[#F5F0E7] hover:bg-[#FAF7F2] text-[#24382E] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all cursor-pointer flex items-center justify-center space-x-2 rounded-xs"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Start Demo Subscription</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
