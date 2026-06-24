import { getItemBySlug, getRelatedItems, getReviewsForItem } from '@aihub/shared';
import { notFound } from 'next/navigation';
import { items, reviews } from '@/data';
import { ToolDetailClient } from '@/components/ToolDetailClient';

export function generateStaticParams() {
  return items.map(i => ({ slug: i.slug }));
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getItemBySlug(params.slug, items);
  if (!tool) notFound();

  const toolReviews = getReviewsForItem(tool.id, reviews);
  const relatedTools = getRelatedItems(tool, items);

  return <ToolDetailClient tool={tool} reviews={toolReviews} relatedTools={relatedTools} />;
}