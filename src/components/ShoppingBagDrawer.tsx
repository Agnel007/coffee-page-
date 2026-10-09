import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ShoppingBagDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, subtotal } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'demo-placed'>('cart');

  if (!isCartOpen) return null;

  const handleDemoCheckout = () => {
    setCheckoutStep('demo-placed');
  };

  const handleClose = () => {
    setCheckoutStep('cart');
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#24251F]/50 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-[#F5F0E7] text-[#24251F] h-full shadow-2xl flex flex-col justify-between z-10 animate-slide-left border-l border-[#D8D1C5]">
        {/* Header */}
        <div className="p-6 border-b border-[#D8D1C5] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-[#24382E]" />
            <h2 className="font-serif text-xl text-[#24382E]">Your Coffee Bag</h2>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-[#24251F] hover:text-[#24382E] rounded-xs cursor-pointer focus:outline-hidden"
            aria-label="Close Bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {checkoutStep === 'demo-placed' ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-[#24382E] mx-auto" />
              <h3 className="font-serif text-2xl text-[#24382E]">Demo Order Prepared</h3>
              <p className="text-xs text-[#5C5E54] max-w-xs mx-auto leading-relaxed">
                This is a demonstration coffee website. No actual payment was taken or order placed. Thank you for testing the MORROW interactive bag experience.
              </p>
              <button
                onClick={handleClose}
                className="mt-4 bg-[#24382E] text-[#F5F0E7] px-6 py-2.5 text-xs uppercase tracking-wider font-medium rounded-xs cursor-pointer"
              >
                Return to Roastery
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3 text-[#92947A]">
              <ShoppingBag className="w-10 h-10 mx-auto opacity-40" />
              <p className="font-serif text-lg text-[#24251F]">Your bag is currently empty.</p>
              <p className="text-xs max-w-xs mx-auto">Explore our signature collection and select your preferred roast and grind.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-4 pb-6 border-b border-[#D8D1C5]/70">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover rounded-xs border border-[#D8D1C5]"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-base text-[#24382E]">{item.product.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#92947A] hover:text-red-700 p-1 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[0.68rem] text-[#604638] uppercase tracking-wider font-medium mt-0.5">
                      Grind: {item.grindSize}
                    </p>
                    <p className="text-xs font-semibold text-[#24251F] mt-1">
                      ${item.product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Modifier */}
                  <div className="flex items-center space-x-3 pt-2">
                    <div className="flex items-center border border-[#D8D1C5] rounded-xs bg-[#FAF7F2]">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-xs text-[#24251F] hover:bg-[#D8D1C5]/40"
                      >
                        -
                      </button>
                      <span className="px-2.5 text-xs font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-xs text-[#24251F] hover:bg-[#D8D1C5]/40"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xs font-serif text-[#92947A]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal & Action */}
        {checkoutStep === 'cart' && items.length > 0 && (
          <div className="p-6 border-t border-[#D8D1C5] bg-[#FAF7F2] space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-[#92947A]">Subtotal</span>
              <span className="font-serif text-xl font-semibold text-[#24382E]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <p className="text-[0.65rem] text-[#92947A] tracking-wide">
              Taxes and shipping calculated at demo checkout.
            </p>

            <button
              onClick={handleDemoCheckout}
              className="w-full bg-[#24382E] hover:bg-[#1A2A22] text-[#F5F0E7] py-3.5 px-6 text-xs font-medium uppercase tracking-[0.2em] rounded-xs cursor-pointer flex items-center justify-center space-x-2 shadow-xs transition-colors"
            >
              <span>Proceed to Demo Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
