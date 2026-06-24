import type { Category, SiteConfig, SiteStats } from '../types';

// ─── Site Configuration ───

export const SITE_CONFIG: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'AIHub',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'AI tool directory & review platform',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aihub.example.com',
  defaultLocale: (process.env.NEXT_PUBLIC_DEFAULT_LOCALE as 'zh-CN' | 'en') || 'zh-CN',
};

// ─── Categories ───

export const CATEGORIES: Category[] = [
  { id: '1', name: '聊天机器人', slug: 'chatbot', description: 'AI 对话助手，智能客服', icon: '💬', itemCount: 12, color: 'from-purple-500 to-indigo-600' },
  { id: '2', name: '图像生成', slug: 'image-generation', description: 'AI 绘画和图片创作工具', icon: '🎨', itemCount: 15, color: 'from-pink-500 to-rose-600' },
  { id: '3', name: '视频生成', slug: 'video-generation', description: 'AI 视频制作和编辑', icon: '🎬', itemCount: 8, color: 'from-blue-500 to-cyan-600' },
  { id: '4', name: '编程助手', slug: 'coding', description: 'AI 编程和代码辅助工具', icon: '💻', itemCount: 10, color: 'from-green-500 to-emerald-600' },
  { id: '5', name: '音频工具', slug: 'audio', description: 'AI 语音合成和音乐生成', icon: '🎵', itemCount: 7, color: 'from-orange-500 to-amber-600' },
  { id: '6', name: '办公效率', slug: 'productivity', description: 'AI 办公自动化和效率工具', icon: '📊', itemCount: 11, color: 'from-violet-500 to-purple-600' },
  { id: '7', name: '数据分析', slug: 'data-analysis', description: 'AI 数据处理和可视化', icon: '📈', itemCount: 6, color: 'from-teal-500 to-cyan-600' },
  { id: '8', name: 'AI 搜索', slug: 'ai-search', description: 'AI 搜索引擎和信息检索', icon: '🔍', itemCount: 5, color: 'from-red-500 to-orange-600' },
];

// ─── Stats ───

export const SITE_STATS: SiteStats = {
  itemCount: 11,
  categoryCount: 8,
  reviewCount: 3,
  year: '2026',
};

// ─── Locales ───

export const LOCALES = ['zh-CN', 'en'] as const;