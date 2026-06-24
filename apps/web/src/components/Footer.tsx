'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">AIHub</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('tagline')}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('browse')}</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/categories" className="hover:text-primary-600">{nav('categories')}</Link></li>
              <li><Link href="/search" className="hover:text-primary-600">{nav('search')}</Link></li>
              <li><Link href="/submit" className="hover:text-primary-600">{nav('submit')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('biz')}</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/pricing" className="hover:text-primary-600">{nav('pricing')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t('about')}</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/about" className="hover:text-primary-600">{nav('about')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-700 text-center text-sm text-gray-400">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}