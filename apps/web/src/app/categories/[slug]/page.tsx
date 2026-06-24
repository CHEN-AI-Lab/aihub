import { CATEGORIES, getCategoryBySlug, getItemsByCategory } from '@aihub/shared';
import { notFound } from 'next/navigation';
import { items } from '@/data';
import { CategoryClient } from '@/components/CategoryDetailClient';

export function generateStaticParams() {
  return CATEGORIES.map(cat => ({ slug: cat.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug, CATEGORIES);
  if (!category) notFound();

  const tools = getItemsByCategory(category.slug, items);

  return <CategoryClient category={category} tools={tools} />;
}