'use client';

import { useTranslations, useLocale } from 'next-intl';
import { setCookie } from '../i18n/client';

export function LanguageSwitcher() {
  const t = useTranslations('site');
  const locale = useLocale();
  const nextLocale = locale === 'zh-CN' ? 'en' : 'zh-CN';
  const label = nextLocale === 'zh-CN' ? '中文' : 'EN';

  const switchLocale = () => {
    setCookie('locale', nextLocale, 365);
    window.location.reload();
  };

  return (
    <button
      onClick={switchLocale}
      className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors border border-gray-300 dark:border-slate-600 rounded-md px-2 py-1"
      aria-label={`Switch to ${nextLocale}`}
    >
      {label}
    </button>
  );
}