import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { BrandIntro } from './components/BrandIntro';
import { CoffeeCollection } from './components/CoffeeCollection';
import { RoastingCraft } from './components/RoastingCraft';
import { DailyRitual } from './components/DailyRitual';
import { SubscriptionCTA } from './components/SubscriptionCTA';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { ProductModal } from './components/ProductModal';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#F5F0E7] text-[#24251F] flex flex-col font-sans selection:bg-[#24382E] selection:text-[#F5F0E7]">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* SECTION B: Hero Experience */}
          <HeroSection />

          {/* SECTION C: Brand Introduction */}
          <BrandIntro />

          {/* SECTION D: Signature Coffee Collection */}
          <CoffeeCollection />

          {/* SECTION E: Roasting Craft Story */}
          <RoastingCraft />

          {/* SECTION F: The Daily Ritual */}
          <DailyRitual />

          {/* SECTION G: Subscription CTA */}
          <SubscriptionCTA />

          {/* SECTION H: Newsletter Signup */}
          <Newsletter />
        </main>

        {/* SECTION I: Footer */}
        <Footer />

        {/* Interactive Shopping Bag Slide-Over Drawer */}
        <ShoppingBagDrawer />

        {/* Product Quick View & Grind Selection Modal */}
        <ProductModal />
      </div>
    </CartProvider>
  );
};

export default App;
