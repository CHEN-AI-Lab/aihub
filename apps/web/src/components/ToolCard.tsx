'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { renderStars } from '@aihub/shared';
import type { Item } from '@aihub/shared';

interface ToolCardProps {
  tool: Item;
  compact?: boolean;
  locale?: string;
}

export function ToolCard({ tool, compact }: ToolCardProps) {
  const t = useTranslations('tool');
  const tc = useTranslations('tools');
  const stars = renderStars(tool.rating);
  const toolDesc = tc(`${tool.slug}.desc`);

  return (
    <Link href={`/tools/${tool.slug}`} className="card p-4 block hover:ring-2 hover:ring-primary-300 transition-all">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center text-lg flex-shrink-0">
          {tool.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 flex-nowrap">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate shrink min-w-0">{tool.name}</h3>
            {tool.featured && <span className="bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs px-1.5 py-0.5 rounded font-medium shrink-0">{t('featured_badge')}</span>}
            {tool.pricingModel === 'free' && <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs px-1.5 py-0.5 rounded shrink-0">{t('pricing_free')}</span>}
            {tool.pricingModel === 'paid' && <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-1.5 py-0.5 rounded shrink-0">{t('pricing_paid')}</span>}
            {tool.pricingModel === 'freemium' && <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs px-1.5 py-0.5 rounded shrink-0">{t('pricing_freemium')}</span>}
          </div>
          {!compact && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{toolDesc}</p>
          )}
          <div className="flex items-center gap-2 mt-1.5 text-sm">
            <span className="text-amber-500">{stars}</span>
            <span className="text-gray-500 dark:text-gray-400">{tool.rating}</span>
            <span className="text-gray-400 dark:text-gray-500">({tool.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}