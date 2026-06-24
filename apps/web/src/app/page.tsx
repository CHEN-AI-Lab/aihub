import { CATEGORIES, getFeaturedItems, getLatestItems } from '@aihub/shared';
import { items, reviews } from '../data';
import { HomeClient } from '../components/HomeClient';

export default function HomePage() {
  const featuredTools = getFeaturedItems(items);
  const latestTools = getLatestItems(items).slice(0, 8);

  return (
    <HomeClient
      categories={CATEGORIES}
      featuredTools={featuredTools}
      latestTools={latestTools}
      totalItems={items.length}
      totalCategories={CATEGORIES.length}
      totalReviews={reviews.length}
    />
  );
}