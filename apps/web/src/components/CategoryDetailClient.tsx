'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ToolCard } from './ToolCard';
import type { Item, Category } from '@aihub/shared';

export function CategoryClient({ category, tools }: { category: Category; tools: Item[] }) {
  const t = useTranslations('category');
  const tc = useTranslations('categories');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-primary-600 hover:text-primary-700 mb-2 inline-block">
          {t('back')}
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{category.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{tc(`${category.slug}.name`)}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{tc(`${category.slug}.desc`)}</p>
            <span className="text-sm text-gray-400 mt-1 inline-block">{tools.length} {t('items_count', { count: tools.length })}</span>
          </div>
        </div>
      </div>

      {tools.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">{t('empty')}</p>
          <Link href="/submit" className="text-primary-600 hover:text-primary-700 mt-2 inline-block">{t('submit_link')}</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}