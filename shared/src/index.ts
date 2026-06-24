// ─── Shared package barrel export ───

export * from './types';
export * from './constants';
export * from './utils';
export * from './validators';

// ─── Messages (i18n) ───

import zhCN from './messages/zh-CN.json';
import en from './messages/en.json';

export const messages: Record<string, Record<string, unknown>> = {
  'zh-CN': zhCN as Record<string, unknown>,
  'en': en as Record<string, unknown>,
};

export type MessageKey = keyof typeof zhCN;
export type MessageSection = keyof typeof zhCN;
export type Messages = typeof zhCN;
