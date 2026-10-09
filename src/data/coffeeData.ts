export interface CoffeeProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  notes: string[];
  roastLevel: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  roastScore: number; // 1 to 5 scale
  origin: string;
  elevation: string;
  process: string;
  price: number;
  weight: string;
  image: string;
  badge?: string;
  recommendedGrind: string[];
}

export const PRODUCTS: CoffeeProduct[] = [
  {
    id: 'house-no-01',
    name: 'HOUSE NO. 01',
    subtitle: 'Everyday Signature Blend',
    description: 'Our foundational espresso and filter roast. Crafted for depth, warmth, and complete balance every single morning.',
    notes: ['Chocolate', 'Hazelnut', 'Caramel'],
    roastLevel: 'Medium',
    roastScore: 3,
    origin: 'Huehuetenango, Guatemala & Mogiana, Brazil',
    elevation: '1,350 - 1,800m',
    process: 'Washed & Natural',
    price: 21.00,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop',
    badge: 'Roaster’s Favorite',
    recommendedGrind: ['Whole Bean', 'Espresso', 'Filter / Pour Over', 'French Press']
  },
  {
    id: 'sunday-decaf',
    name: 'SUNDAY DECAF',
    subtitle: 'Swiss Water Processed',
    description: 'Rich, comforting decaffeinated coffee with zero compromise on flavor clarity or body. Perfect for quiet evenings.',
    notes: ['Cocoa', 'Toasted Almond', 'Brown Sugar'],
    roastLevel: 'Medium',
    roastScore: 3,
    origin: 'Huila, Colombia',
    elevation: '1,500 - 1,900m',
    process: 'Swiss Water Decaf',
    price: 22.00,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1000&auto=format&fit=crop',
    badge: 'Chemical-Free',
    recommendedGrind: ['Whole Bean', 'Filter / Pour Over', 'Stovetop Moka', 'French Press']
  },
  {
    id: 'origin-no-03',
    name: 'ORIGIN NO. 03',
    subtitle: 'Single Origin Micro-Lot',
    description: 'An expressive, floral light roast bursting with vibrant red fruit brightness and delicate jasmine tea aromatics.',
    notes: ['Red Fruit', 'Citrus', 'Floral Finish'],
    roastLevel: 'Light',
    roastScore: 1,
    origin: 'Yirgacheffe, Ethiopia',
    elevation: '1,900 - 2,200m',
    process: 'Sun-Dried Natural',
    price: 24.00,
    weight: '250g',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop',
    badge: 'Limited Harvest',
    recommendedGrind: ['Whole Bean', 'Filter / Pour Over', 'Aeropress']
  }
];

export const BRAND_VALUES = [
  {
    number: '01',
    title: 'Mindful Sourcing',
    description: 'We source directly from smallholder farms where soil health and agricultural craftsmanship are prized above volume.'
  },
  {
    number: '02',
    title: 'Gentle Thermal Profiling',
    description: 'Our small-batch drum roaster develops natural sugars without scorching delicate organic acids.'
  },
  {
    number: '03',
    title: 'Peak Freshness',
    description: 'Roasting in small weekly micro-batches ensures your coffee arrives at optimal degassing maturity.'
  }
];

export const BREW_GUIDE_DATA = {
  pourover: {
    title: 'Chemex / V60 Pour Over',
    ratio: '1:16 (18g coffee to 288g water)',
    temp: '93°C (200°F)',
    grind: 'Medium-Fine (like sea salt)',
    time: '3:00 - 3:30 mins',
    steps: [
      'Rinse filter paper with hot water and drain.',
      'Add 18g freshly ground coffee, level the bed.',
      'Pour 50g water for a 45-second bloom sequence.',
      'Pour remaining water in gentle concentric spirals up to 288g.'
    ]
  },
  espresso: {
    title: 'Home Espresso',
    ratio: '1:2 (18g in to 36g out)',
    temp: '92°C - 94°C',
    grind: 'Fine (powdery, slightly tactile)',
    time: '26 - 30 seconds',
    steps: [
      'Purge grouphead, wipe basket dry.',
      'Dose 18g, distribute evenly, tamp firm and level.',
      'Initiate brew immediately; aim for 36g liquid espresso.'
    ]
  }
};
