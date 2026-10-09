import React, { useState } from 'react';
import { X, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ProductModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedGrind, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-[#24251F]/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#F5F0E7] rounded-xs shadow-2xl overflow-hidden z-10 border border-[#D8D1C5] max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 bg-[#F5F0E7]/80 hover:bg-[#F5F0E7] text-[#24251F] rounded-full cursor-pointer focus:outline-hidden"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="md:w-1/2 relative bg-[#D8D1C5]/30 aspect-4/5 md:aspect-auto">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            className="w-full h-full object-cover"
          />
          {quickViewProduct.badge && (
            <div className="absolute top-4 left-4 bg-[#24382E] text-[#F5F0E7] text-[0.62rem] uppercase tracking-widest px-3 py-1 font-semibold">
              {quickViewProduct.badge}
            </div>
          )}
        </div>

        {/* Product Details & Selection Controls */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-5 flex flex-col justify-between">
          <div>
            <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[#92947A]">
              {quickViewProduct.roastLevel} Roast · {quickViewProduct.weight}
            </span>
            <h2 className="font-serif text-3xl text-[#24382E] mt-1">{quickViewProduct.name}</h2>
            <p className="text-xs text-[#604638] uppercase tracking-widest font-medium">
              {quickViewProduct.subtitle}
            </p>
            <p className="font-serif text-xl font-semibold text-[#24382E] mt-2">
              ${quickViewProduct.price.toFixed(2)}
            </p>

            <p className="text-xs text-[#5C5E54] font-light leading-relaxed mt-4">
              {quickViewProduct.description}
            </p>

            {/* Micro Details Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#D8D1C5] text-xs text-[#24251F]">
              <div>
                <span className="block text-[0.62rem] uppercase tracking-wider text-[#92947A]">Origin</span>
                <span className="font-medium">{quickViewProduct.origin}</span>
              </div>
              <div>
                <span className="block text-[0.62rem] uppercase tracking-wider text-[#92947A]">Process</span>
                <span className="font-medium">{quickViewProduct.process}</span>
              </div>
              <div>
                <span className="block text-[0.62rem] uppercase tracking-wider text-[#92947A]">Elevation</span>
                <span className="font-medium">{quickViewProduct.elevation}</span>
              </div>
              <div>
                <span className="block text-[0.62rem] uppercase tracking-wider text-[#92947A]">Roast Score</span>
                <span className="font-medium">{quickViewProduct.roastScore} / 5</span>
              </div>
            </div>

            {/* Grind Selection */}
            <div className="pt-4">
              <label className="block text-xs uppercase tracking-wider text-[#92947A] mb-2 font-medium">
                Select Grind Preparation
              </label>
              <div className="grid grid-cols-2 gap-2">
                {quickViewProduct.recommendedGrind.map((grind) => (
                  <button
                    key={grind}
                    onClick={() => setSelectedGrind(grind)}
                    className={`py-2 px-3 text-left text-xs rounded-xs border transition-all cursor-pointer flex items-center justify-between ${
                      selectedGrind === grind
                        ? 'border-[#24382E] bg-[#24382E] text-[#F5F0E7]'
                        : 'border-[#D8D1C5] bg-[#FAF7F2] text-[#24251F] hover:border-[#92947A]'
                    }`}
                  >
                    <span>{grind}</span>
                    {selectedGrind === grind && <Check className="w-3.5 h-3.5 text-[#F5F0E7]" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart Footer Actions */}
          <div className="pt-4 border-t border-[#D8D1C5] flex items-center space-x-3">
            <div className="flex items-center border border-[#D8D1C5] rounded-xs bg-[#FAF7F2]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-xs font-medium text-[#24251F] hover:bg-[#D8D1C5]/30 cursor-pointer"
              >
                -
              </button>
              <span className="px-3 text-xs font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-xs font-medium text-[#24251F] hover:bg-[#D8D1C5]/30 cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#24382E] hover:bg-[#1A2A22] text-[#F5F0E7] py-3 px-6 text-xs uppercase tracking-[0.18em] font-medium transition-colors flex items-center justify-center space-x-2 rounded-xs cursor-pointer shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Bag (${(quickViewProduct.price * quantity).toFixed(2)})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
