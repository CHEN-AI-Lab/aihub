'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { CATEGORIES } from '@aihub/shared';
import type { Item } from '@aihub/shared';

export function SearchClient({ query, results, popularItems }: { query: string; results: Item[]; popularItems: Item[] }) {
  const t = useTranslations('search');
  const tc = useTranslations('categories');
  const tu = useTranslations('tools');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('title')}</h1>

      <form action="/search" method="GET" className="mb-8">
        <div className="relative">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder={t('placeholder')}
            className="input text-base py-3 pr-24"
            autoFocus
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary text-sm">
            {t('button')}
          </button>
        </div>
      </form>

      {query && (
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          {t('results', { query, count: results.length })}
        </div>
      )}

      {!query && (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('popular_categories')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CATEGORIES.map(cat => (
                <Link key={cat.id} href={`/categories/${cat.slug}`} className="card p-4 text-center hover:shadow-md transition-all">
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <div className="font-medium text-gray-900 dark:text-white text-sm">{tc(`${cat.slug}.name`)}</div>
                  <div className="text-xs text-gray-500">{cat.itemCount} tools</div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('popular_tools')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {popularItems.map(tool => {
                const toolSlug = tool.slug;
                return (
                  <Link key={tool.id} href={`/tools/${toolSlug}`} className="card p-4 text-center hover:shadow-md transition-all">
                    <div className="text-xl mb-1">{tool.name.charAt(0)}</div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">{tool.name}</div>
                    <div className="text-xs text-gray-400 mt-1">⭐ {tool.rating}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {query && results.length === 0 && (
        <div className="card p-12 text-center">
          <div className="text-4xl mb-3">{t('empty_title')}</div>
          <p className="text-gray-500 dark:text-gray-400">{t('empty_desc')}</p>
          <Link href="/submit" className="text-primary-600 hover:text-primary-700 mt-2 inline-block">{t('submit_link')}</Link>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-3">
          {results.map(tool => (
            <Link key={tool.id} href={`/tools/${tool.slug}`} className="card p-5 block hover:ring-2 hover:ring-primary-300 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center text-xl flex-shrink-0">
                  {tool.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h2>
                    <span className="text-xs text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded">{tc(`${tool.categorySlug}.name`)}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tu(`${tool.slug}.desc`)}</p>
                  <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
                    <span>⭐ {tool.rating}</span>
                    <span>💬 {tool.reviewCount}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}