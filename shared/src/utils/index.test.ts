import { describe, it, expect } from 'vitest';
import { searchItems, getItemBySlug, getFeaturedItems, renderStars, getItemsByCategory, getRelatedItems } from './index';
import type { Item } from '../types';

const mockItems: Item[] = [
  {
    id: '1', name: 'TestAI', slug: 'test-ai',
    description: 'A test AI tool',
    longDescription: 'Long description here',
    url: 'https://test.ai', logo: '',
    category: 'Chatbots', categorySlug: 'chatbot',
    pricingModel: 'free', pricingDetail: 'Free',
    featured: true, rating: 4.5, reviewCount: 100, upvotes: 500,
    features: ['Feature 1'], pros: ['Pro 1'], cons: ['Con 1'],
    screenshots: [], createdAt: '2024-01-01',
  },
  {
    id: '2', name: 'AnotherAI', slug: 'another-ai',
    description: 'Another image generator',
    longDescription: 'Another long description',
    url: 'https://another.ai', logo: '',
    category: 'Image Gen', categorySlug: 'image-generation',
    pricingModel: 'paid', pricingDetail: '$20/mo',
    featured: false, rating: 4.0, reviewCount: 50, upvotes: 200,
    features: ['Feature A'], pros: ['Pro A'], cons: ['Con A'],
    screenshots: [], createdAt: '2024-02-01',
  },
];

describe('searchItems', () => {
  it('returns matching items by name', () => {
    expect(searchItems('test', mockItems)).toHaveLength(1);
    expect(searchItems('test', mockItems)[0].slug).toBe('test-ai');
  });

  it('returns matching items by description', () => {
    expect(searchItems('image', mockItems)).toHaveLength(1);
  });

  it('returns matching items by category', () => {
    expect(searchItems('chatbots', mockItems)).toHaveLength(1);
  });

  it('returns empty for no match', () => {
    expect(searchItems('nonexistent', mockItems)).toHaveLength(0);
  });

  it('is case insensitive', () => {
    expect(searchItems('TEST', mockItems)).toHaveLength(1);
  });
});

describe('getItemBySlug', () => {
  it('finds item by slug', () => {
    expect(getItemBySlug('test-ai', mockItems)?.name).toBe('TestAI');
  });

  it('returns undefined for missing slug', () => {
    expect(getItemBySlug('missing', mockItems)).toBeUndefined();
  });
});

describe('getFeaturedItems', () => {
  it('returns only featured items', () => {
    expect(getFeaturedItems(mockItems)).toHaveLength(1);
    expect(getFeaturedItems(mockItems)[0].featured).toBe(true);
  });
});

describe('renderStars', () => {
  it('renders correct stars for 4.5', () => {
    expect(renderStars(4.5)).toBe('★★★★★');
  });

  it('renders correct stars for 3.0', () => {
    expect(renderStars(3)).toBe('★★★☆☆');
  });

  it('renders correct stars for 1.2', () => {
    expect(renderStars(1.2)).toBe('★☆☆☆☆');
  });
});

describe('getItemsByCategory', () => {
  it('filters items by category slug', () => {
    expect(getItemsByCategory('image-generation', mockItems)).toHaveLength(1);
  });

  it('returns empty for unknown category', () => {
    expect(getItemsByCategory('video', mockItems)).toHaveLength(0);
  });
});

describe('getRelatedItems', () => {
  it('returns related items excluding self', () => {
    const item = mockItems[0];
    expect(getRelatedItems(item, mockItems)).toHaveLength(0);
  });

  it('returns items from same category', () => {
    const sameCatItem: Item = { ...mockItems[1], id: '3', slug: 'third', categorySlug: 'image-generation' };
    const items = [...mockItems, sameCatItem];
    expect(getRelatedItems(mockItems[1], items)).toHaveLength(1);
  });
});