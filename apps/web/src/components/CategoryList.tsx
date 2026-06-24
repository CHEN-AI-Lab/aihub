'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Category } from '@aihub/shared';

export function CategoryList({ categories }: { categories: Category[] }) {
  const t = useTranslations('category');
  const tc = useTranslations('categories');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('title')}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{t('subtitle')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(cat => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="card p-6 hover:ring-2 hover:ring-primary-300 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl`}>
                {cat.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {tc(`${cat.slug}.name`)}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tc(`${cat.slug}.desc`)}</p>
                <span className="text-xs text-gray-400 mt-1 inline-block">{t('items_count', { count: cat.itemCount })}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}