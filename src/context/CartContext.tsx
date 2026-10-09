import React, { createContext, useContext, useState } from 'react';
import { CoffeeProduct } from '../data/coffeeData';

export interface CartItem {
  id: string; // unique cart item id (product id + grind)
  product: CoffeeProduct;
  grindSize: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: CoffeeProduct, grindSize: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewProduct: CoffeeProduct | null;
  setQuickViewProduct: (product: CoffeeProduct | null) => void;
  totalCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([
    // Start with 1 default item in demo cart so user sees active cart state immediately if opened
    {
      id: 'house-no-01-Whole Bean',
      product: {
        id: 'house-no-01',
        name: 'HOUSE NO. 01',
        subtitle: 'Everyday Signature Blend',
        description: 'Our foundational espresso and filter roast.',
        notes: ['Chocolate', 'Hazelnut', 'Caramel'],
        roastLevel: 'Medium',
        roastScore: 3,
        origin: 'Guatemala & Brazil',
        elevation: '1,350 - 1,800m',
        process: 'Washed & Natural',
        price: 21.00,
        weight: '250g',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop',
        recommendedGrind: ['Whole Bean', 'Espresso', 'Filter']
      },
      grindSize: 'Whole Bean',
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<CoffeeProduct | null>(null);

  const addToCart = (product: CoffeeProduct, grindSize: string, quantity = 1) => {
    const itemKey = `${product.id}-${grindSize}`;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.id === itemKey ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemKey, product, grindSize, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        setQuickViewProduct,
        totalCount,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
