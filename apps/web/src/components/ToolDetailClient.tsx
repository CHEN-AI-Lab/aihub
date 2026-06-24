'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { renderStars } from '@aihub/shared';
import type { Item, Review } from '@aihub/shared';

export function ToolDetailClient({ tool, reviews, relatedTools }: { tool: Item; reviews: Review[]; relatedTools: Item[] }) {
  const t = useTranslations('tool');
  const tc = useTranslations('categories');
  const tu = useTranslations('tools');
  const stars = renderStars(tool.rating);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-primary-600">{t('breadcrumb_home')}</Link>
        <span>/</span>
        <Link href={`/categories/${tool.categorySlug}`} className="hover:text-primary-600">{tc(`${tool.categorySlug}.name`)}</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">{tool.name}</span>
      </div>

      {/* Header */}
      <div className="card p-8 mb-6">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center text-2xl flex-shrink-0">
            {tool.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {tool.name}
              {tool.featured && <span className="ml-2 inline-block bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-sm px-2 py-0.5 rounded font-medium align-middle">{t('featured_badge')}</span>}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">{tu(`${tool.slug}.desc`)}</p>
            <div className="flex items-center gap-4 mt-3 flex-wrap">
              <span className="text-amber-500 text-lg">{stars}</span>
              <span className="font-semibold text-gray-900 dark:text-white">{tool.rating}</span>
              <span className="text-gray-500 dark:text-gray-400">({tool.reviewCount})</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-500 dark:text-gray-400">👍 {tool.upvotes}</span>
            </div>
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                tool.pricingModel === 'free' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                tool.pricingModel === 'paid' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
              }`}>
                {tool.pricingModel === 'free' ? t('pricing_free') : tool.pricingModel === 'paid' ? t('pricing_paid') : t('pricing_freemium')}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{tu(`${tool.slug}.pricingDetail`)}</span>
            </div>
            <div className="flex gap-3 mt-5">
              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                {t('visit_website')}
              </a>
              {tool.affiliateUrl && (
                <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer" className="btn-outline inline-block">
                  {t('use_now')}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('description')}</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{tu(`${tool.slug}.longDesc`)}</p>
          </div>

          {tool.features.length > 0 && (
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('features')}</h2>
              <div className="grid grid-cols-2 gap-2">
                {(tu.raw(`${tool.slug}.features`) as string[]).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-green-500">✓</span> {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="card p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3">{t('pros')}</h3>
                <ul className="space-y-2">
                  {(tu.raw(`${tool.slug}.pros`) as string[]).map((p, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-700 dark:text-red-400 mb-3">{t('cons')}</h3>
                <ul className="space-y-2">
                  {(tu.raw(`${tool.slug}.cons`) as string[]).map((c, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="card p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {t('reviews_title')} <span className="text-base font-normal text-gray-500">({reviews.length})</span>
            </h2>
            {reviews.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">{t('reviews_empty')}</p>
            ) : (
              <div className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="border-b border-gray-100 dark:border-slate-700 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-900 dark:text-white">{review.author}</div>
                      <span className="text-amber-500 text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                    </div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">{review.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{review.content}</p>
                    <div className="mt-2 text-xs text-gray-400">
                      ✅ Pros: {review.pros}
                      {review.cons && <span className="ml-2">⚠️ Cons: {review.cons}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('info')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">{t('category_label')}</span>
                <Link href={`/categories/${tool.categorySlug}`} className="text-primary-600 hover:text-primary-700">{tc(`${tool.categorySlug}.name`)}</Link>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">{t('price_label')}</span>
                <span>{tu(`${tool.slug}.pricingDetail`)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">{t('created_label')}</span>
                <span>{tool.createdAt}</span>
              </div>
            </div>
          </div>

          {relatedTools.length > 0 && (
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('related')}</h3>
              <div className="space-y-3">
                {relatedTools.map(t => (
                  <Link key={t.id} href={`/tools/${t.slug}`} className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-slate-700/50 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center text-sm flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-sm text-gray-900 dark:text-white truncate">{t.name}</div>
                      <div className="text-xs text-gray-400">⭐ {t.rating}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}