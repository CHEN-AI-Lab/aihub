'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { SITE_CONFIG } from '@aihub/shared';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const ts = useTranslations('site');

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-3 gap-4">
          {[
            { num: '50K+', label: t('stats_users') },
            { num: '11+', label: t('stats_tools') },
            { num: '100K+', label: t('stats_chinese') },
          ].map((stat, i) => (
            <div key={i} className="card p-6 text-center">
              <div className="text-3xl font-bold text-primary-600">{stat.num}</div>
              <div className="text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="card p-8 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('free_plan_name')}</h3>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('free_plan_price')}</div>
            <ul className="space-y-3 mb-8 flex-1">
              {(t.raw('free_features') as string[]).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-green-500 mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <Link href="/submit" className="btn-outline text-center block">{t('free_cta')}</Link>
          </div>

          {/* Featured Plan */}
          <div className="card p-8 flex flex-col ring-2 ring-primary-500 relative">
            <span className="absolute -top-3 right-6 bg-primary-500 text-white text-xs px-3 py-1 rounded-full font-medium">{t('featured_badge')}</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('featured_plan_name')}</h3>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-1">{t('featured_plan_price')}<span className="text-lg text-gray-500 font-normal">{t('featured_plan_period')}</span></div>
            <p className="text-xs text-gray-400 mb-6">按年付 ¥2999/年（省 17%）</p>
            <ul className="space-y-3 mb-8 flex-1">
              {(t.raw('featured_features') as string[]).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-green-500 mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="mailto:hi@aihub.com" className="btn-primary text-center block">{t('featured_cta')}</a>
          </div>

          {/* Enterprise Plan */}
          <div className="card p-8 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('enterprise_plan_name')}</h3>
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('enterprise_plan_price')}</div>
            <ul className="space-y-3 mb-8 flex-1">
              {(t.raw('enterprise_features') as string[]).map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-green-500 mt-0.5">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="mailto:hi@aihub.com" className="btn-outline text-center block">{t('enterprise_cta')}</a>
          </div>
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
    </div>
  );
}