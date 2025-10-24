
export type Page = 
  | 'Home' 
  | 'Features' 
  | 'Pricing' 
  | 'Portfolio' 
  | 'Market' 
  | 'About' 
  | 'FAQ' 
  | 'Support' 
  | 'Profile';

export interface NavLink {
  name: Page;
  href: string;
}

export interface PortfolioHolding {
  id: string;
  name: string;
  symbol: string;
  value: number;
  change: number;
  allocation: number;
}

export interface MarketNewsArticle {
  id: string;
  title: string;
  source: string;
  summary: string;
  timestamp: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  subscription: string;
  licenseKey: string;
  avatarUrl: string;
}
