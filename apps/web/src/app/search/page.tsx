import { searchItems, getFeaturedItems } from '@aihub/shared';
import { items } from '@/data';
import { SearchClient } from '@/components/SearchClient';

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  const results = query ? searchItems(query, items) : [];

  return <SearchClient query={query} results={results} popularItems={getFeaturedItems(items)} />;
}