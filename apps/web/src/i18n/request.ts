import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';
import { cookies } from 'next/headers';
import type { Locale } from '@aihub/shared';

const LOCALES = ['zh-CN', 'en'] as const;
const DEFAULT_LOCALE: Locale = 'zh-CN';

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const localeCookie = cookieStore.get('locale')?.value;
  const locale = localeCookie && isLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

  // Import messages via shared package
  const { messages } = await import('@aihub/shared');
  const msgs = (messages[locale] || messages[DEFAULT_LOCALE]) as AbstractIntlMessages;

  return {
    locale,
    messages: msgs,
  };
});