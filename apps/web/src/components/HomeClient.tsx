'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ToolCard } from './ToolCard';
import type { Item, Category } from '@aihub/shared';

interface HomeClientProps {
  categories: Category[];
  featuredTools: Item[];
  latestTools: Item[];
  totalItems: number;
  totalCategories: number;
  totalReviews: number;
}

export function HomeClient({ categories, featuredTools, latestTools, totalItems, totalCategories, totalReviews }: HomeClientProps) {
  const t = useTranslations('home');
  const ts = useTranslations('site');
  const tc = useTranslations('categories');
  const tt = useTranslations('tools');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{ts('slogan')}</h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8">{ts('subtitle')}</p>
            <form action="/search" method="GET" className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  name="q"
                  placeholder={t('hero_search_placeholder')}
                  className="w-full px-5 py-3.5 rounded-xl text-gray-900 bg-white shadow-lg text-base focus:ring-2 focus:ring-primary-300 outline-none"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-500 hover:bg-primary-400 text-white px-4 py-1.5 rounded-lg text-sm transition-colors">
                  {t('search_button')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="card p-4 flex items-center gap-3 hover:shadow-md transition-all group"
            >
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">{tc(`${cat.slug}.name`)}</div>
                <div className="text-xs text-gray-500">({cat.itemCount} {t('stats_tools').toLowerCase()})</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('featured_title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Latest Tools */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('latest_title')}</h2>
          <Link href="/search" className="text-primary-600 hover:text-primary-700 text-sm font-medium">{t('view_all')}</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} compact />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('cta_title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{t('cta_desc')}</p>
          <Link href="/submit" className="btn-primary inline-block text-lg px-8 py-3">{t('cta_button')}</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: totalItems, label: t('stats_tools') },
            { num: totalCategories, label: t('stats_categories') },
            { num: totalReviews, label: t('stats_reviews') },
            { num: '2026', label: t('stats_year') },
          ].map((stat, i) => (
            <div key={i} className="card p-6">
              <div className="text-3xl font-bold text-primary-600">{stat.num}</div>
              <div className="text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}