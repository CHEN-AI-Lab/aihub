import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'AIHub - AI Tool Directory', template: '%s | AIHub' },
  description: 'Discover the best AI tools with Chinese reviews, comparisons, and recommendations.',
  keywords: 'AI tools, AI directory, ChatGPT, Claude, AI reviews',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-slate-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-[calc(100vh-8rem)]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}