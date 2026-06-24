'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');
  const ts = useTranslations('site');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t('title')}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
      </div>

      {/* Mission */}
      <div className="card p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('mission_title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('mission_desc')}</p>
      </div>

      {/* Features */}
      <div className="card p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('features_title')}</h2>
        <div className="space-y-3">
          {(t.raw('features') as string[]).map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
              <span className="text-gray-600 dark:text-gray-300">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary-600">11+</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('stats_tools')}</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary-600">8</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('stats_categories')}</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary-600">3</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{t('stats_reviews')}</div>
        </div>
      </div>

      {/* Team */}
      <div className="card p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('team_title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{t('team_desc')}</p>
      </div>

      {/* Contact */}
      <div className="card p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{t('contact_title')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{t('contact_desc')}</p>
        <a href={`mailto:${t('email')}`} className="text-primary-600 hover:text-primary-700 font-medium">{t('email')}</a>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('cta_title')}</h2>
        <Link href="/submit" className="btn-primary inline-block text-lg px-8 py-3">{t('cta_button')}</Link>
      </div>
    </div>
  );
}