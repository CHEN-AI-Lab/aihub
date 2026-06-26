import { describe, it, expect } from 'vitest'
import { SITE_CONFIG, CATEGORIES, SITE_STATS, LOCALES } from '../../shared/src/constants'

describe('SITE_CONFIG', () => {
  it('has required fields', () => {
    expect(SITE_CONFIG).toHaveProperty('name')
    expect(SITE_CONFIG).toHaveProperty('description')
    expect(SITE_CONFIG).toHaveProperty('url')
    expect(SITE_CONFIG).toHaveProperty('defaultLocale')
  })

  it('has default locale as zh-CN or en', () => {
    expect(['zh-CN', 'en']).toContain(SITE_CONFIG.defaultLocale)
  })
})

describe('CATEGORIES', () => {
  it('has 8 categories', () => {
    expect(CATEGORIES).toHaveLength(8)
  })

  it('each category has all required fields', () => {
    for (const cat of CATEGORIES) {
      expect(cat).toHaveProperty('id')
      expect(cat).toHaveProperty('name')
      expect(cat).toHaveProperty('slug')
      expect(cat).toHaveProperty('description')
      expect(cat).toHaveProperty('icon')
      expect(cat).toHaveProperty('itemCount')
      expect(cat).toHaveProperty('color')
    }
  })

  it('has unique slugs', () => {
    const slugs = CATEGORIES.map(c => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('includes expected categories', () => {
    const slugs = CATEGORIES.map(c => c.slug)
    expect(slugs).toContain('chatbot')
    expect(slugs).toContain('image-generation')
    expect(slugs).toContain('coding')
  })
})

describe('SITE_STATS', () => {
  it('has required fields', () => {
    expect(SITE_STATS).toHaveProperty('itemCount')
    expect(SITE_STATS).toHaveProperty('categoryCount')
    expect(SITE_STATS).toHaveProperty('reviewCount')
    expect(SITE_STATS).toHaveProperty('year')
  })

  it('matches category count to CATEGORIES length', () => {
    expect(SITE_STATS.categoryCount).toBe(CATEGORIES.length)
  })
})

describe('LOCALES', () => {
  it('contains zh-CN and en', () => {
    expect(LOCALES).toContain('zh-CN')
    expect(LOCALES).toContain('en')
  })

  it('is a readonly tuple', () => {
    expect(LOCALES).toHaveLength(2)
  })
})
