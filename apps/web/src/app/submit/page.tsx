'use client';

import { useTranslations } from 'next-intl';
import { CATEGORIES } from '@aihub/shared';

export default function SubmitPage() {
  const t = useTranslations('submit');
  const tc = useTranslations('categories');

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t('title')}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{t('subtitle')}</p>

      <form className="card p-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('name')}</label>
          <input type="text" className="input" placeholder={t('name_placeholder')} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('url')}</label>
          <input type="url" className="input" placeholder={t('url_placeholder')} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('description')}</label>
          <input type="text" className="input" placeholder={t('description_placeholder')} required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('detail')}</label>
          <textarea className="input h-28" placeholder={t('detail_placeholder')} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('category')}</label>
          <select className="input" required>
            <option value="">{t('category_placeholder')}</option>
            {CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.slug}>{cat.icon} {tc(`${cat.slug}.name`)}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('logo_url')}</label>
            <input type="url" className="input" placeholder={t('logo_url_placeholder')} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('pricing_model')}</label>
            <select className="input">
              <option value="">{t('pricing_placeholder')}</option>
              <option value="free">{t('pricing_free')}</option>
              <option value="paid">{t('pricing_paid')}</option>
              <option value="freemium">{t('pricing_freemium')}</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('pricing_detail')}</label>
          <input type="text" className="input" placeholder={t('pricing_detail_placeholder')} />
        </div>

        <button type="submit" className="btn-primary w-full py-3 text-base">{t('submit_button')}</button>
        <p className="text-xs text-gray-400 text-center">{t('disclaimer')}</p>
      </form>
    </div>
  );
}