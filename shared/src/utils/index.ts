import type { Item, Category, Review } from '../types';

/**
 * Get item by its slug.
 */
export function getItemBySlug(slug: string, items: Item[]): Item | undefined {
  return items.find(i => i.slug === slug);
}

/**
 * Get items belonging to a category.
 */
export function getItemsByCategory(slug: string, items: Item[]): Item[] {
  return items.filter(i => i.categorySlug === slug);
}

/**
 * Get category by slug.
 */
export function getCategoryBySlug(slug: string, categories: Category[]): Category | undefined {
  return categories.find(c => c.slug === slug);
}

/**
 * Get featured (promoted) items.
 */
export function getFeaturedItems(items: Item[]): Item[] {
  return items.filter(i => i.featured);
}

/**
 * Get latest items, sorted by createdAt descending.
 */
export function getLatestItems(items: Item[]): Item[] {
  return [...items].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

/**
 * Search items by name, description, or category name.
 */
export function searchItems(query: string, items: Item[]): Item[] {
  const q = query.toLowerCase();
  return items.filter(i =>
    i.name.toLowerCase().includes(q) ||
    i.description.toLowerCase().includes(q) ||
    i.category.toLowerCase().includes(q)
  );
}

/**
 * Get related items from the same category.
 */
export function getRelatedItems(item: Item, items: Item[]): Item[] {
  return items.filter(i => i.categorySlug === item.categorySlug && i.id !== item.id).slice(0, 4);
}

/**
 * Get reviews for a specific item.
 */
export function getReviewsForItem(itemId: string, reviews: Review[]): Review[] {
  return reviews.filter(r => r.itemId === itemId);
}

/**
 * Format rating as star string.
 */
export function renderStars(rating: number): string {
  return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
}

/**
 * Generate static params for all item slugs.
 */
export function generateSlugParams(items: Item[]): { slug: string }[] {
  return items.map(i => ({ slug: i.slug }));
}

/**
 * Generate static params for all category slugs.
 */
export function generateCategoryParams(categories: Category[]): { slug: string }[] {
  return categories.map(c => ({ slug: c.slug }));
}