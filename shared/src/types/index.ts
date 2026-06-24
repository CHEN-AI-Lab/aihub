// ─── Generic Item Model ───

export type PricingModel = 'free' | 'paid' | 'freemium';

export interface Item {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  url: string;
  affiliateUrl?: string;
  logo: string;
  category: string;
  categorySlug: string;
  pricingModel: PricingModel;
  pricingDetail: string;
  featured: boolean;
  rating: number;
  reviewCount: number;
  upvotes: number;
  features: string[];
  pros: string[];
  cons: string[];
  screenshots: string[];
  createdAt: string;
}

// ─── Review ───

export interface Review {
  id: string;
  itemId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  pros: string;
  cons: string;
  createdAt: string;
}

// ─── Category ───

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  itemCount: number;
  color: string;
}

// ─── i18n ───

export type Locale = 'zh-CN' | 'en';

// ─── Site Config ───

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  defaultLocale: Locale;
}

// ─── Stats ───

export interface SiteStats {
  itemCount: number;
  categoryCount: number;
  reviewCount: number;
  year: string;
}