import React from 'react';
import { PRODUCTS, CoffeeProduct } from '../data/coffeeData';
import { useCart } from '../context/CartContext';
import { Plus, Eye } from 'lucide-react';

export const CoffeeCollection: React.FC = () => {
  const { addToCart, setQuickViewProduct } = useCart();

  return (
    <section id="collection" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#D8D1C5]">
        <div>
          <span className="text-[0.68rem] uppercase tracking-[0.25em] text-[#92947A]">
            03 / Signature Collection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#24382E] font-medium mt-2">
            Curated Whole Bean & Ground Coffees.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-xs text-[#5C5E54] max-w-xs font-light">
          Demonstration catalog. All bags packaged in compostable valve bags, roasted to order.
        </p>
      </div>

      {/* Editorial Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
        {PRODUCTS.map((product: CoffeeProduct) => (
          <div
            key={product.id}
            className="group flex flex-col justify-between border-b border-[#D8D1C5] pb-8 transition-colors"
          >
            {/* Product Image Frame */}
            <div className="relative aspect-4/5 bg-[#D8D1C5]/20 overflow-hidden mb-6 rounded-xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover filter contrast-[1.02] group-hover:scale-103 transition-transform duration-500"
              />
              
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 bg-[#F5F0E7]/90 backdrop-blur-xs text-[#24382E] text-[0.62rem] uppercase tracking-[0.15em] px-3 py-1 font-semibold border border-[#D8D1C5]">
                  {product.badge}
                </div>
              )}

              {/* Quick View Hover Button */}
              <button
                onClick={() => setQuickViewProduct(product)}
                className="absolute inset-x-4 bottom-4 bg-[#24382E]/90 hover:bg-[#24382E] text-[#F5F0E7] text-xs uppercase tracking-[0.15em] py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-2 rounded-xs shadow-md cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Quick View & Select Grind</span>
              </button>
            </div>

            {/* Product Metadata & Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#92947A] uppercase tracking-widest">
                <span>{product.roastLevel} Roast</span>
                <span className="font-semibold text-[#24382E]">${product.price.toFixed(2)}</span>
              </div>

              <h3 className="font-serif text-2xl text-[#24382E] group-hover:text-[#604638] transition-colors">
                {product.name}
              </h3>

              <p className="text-xs text-[#24251F]/70 line-clamp-2 font-light">
                {product.description}
              </p>

              {/* Tasting Notes Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.notes.map((note) => (
                  <span
                    key={note}
                    className="text-[0.65rem] bg-[#D8D1C5]/40 text-[#604638] px-2.5 py-1 rounded-xs uppercase tracking-wider font-medium"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex items-center space-x-3">
              <button
                onClick={() => addToCart(product, 'Whole Bean')}
                className="flex-1 border border-[#24382E] hover:bg-[#24382E] hover:text-[#F5F0E7] text-[#24382E] py-2.5 px-4 text-xs uppercase tracking-[0.15em] font-medium transition-colors flex items-center justify-center space-x-2 rounded-xs cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Whole Bean</span>
              </button>
              
              <button
                onClick={() => setQuickViewProduct(product)}
                aria-label={`View details for ${product.name}`}
                className="border border-[#D8D1C5] hover:border-[#24382E] p-2.5 text-[#24382E] rounded-xs cursor-pointer transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
