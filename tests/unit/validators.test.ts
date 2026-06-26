import { describe, it, expect } from 'vitest'
import { submitItemSchema } from '../../shared/src/validators'

describe('submitItemSchema', () => {
  it('accepts valid input with all required fields', () => {
    const result = submitItemSchema.safeParse({
      name: 'My AI Tool',
      url: 'https://example.com/ai-tool',
      description: 'A great AI tool',
      category: 'chatbot',
    })
    expect(result.success).toBe(true)
  })

  it('rejects empty name', () => {
    const result = submitItemSchema.safeParse({
      name: '',
      url: 'https://example.com',
      description: 'A tool',
      category: 'chatbot',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toContain('Name is required')
    }
  })

  it('rejects name longer than 100 chars', () => {
    const result = submitItemSchema.safeParse({
      name: 'x'.repeat(101),
      url: 'https://example.com',
      description: 'A tool',
      category: 'chatbot',
    })
    expect(result.success).toBe(false)
  })

  it('rejects invalid URL', () => {
    const result = submitItemSchema.safeParse({
      name: 'My Tool',
      url: 'not-a-url',
      description: 'A tool',
      category: 'chatbot',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toContain('Must be a valid URL')
    }
  })

  it('rejects empty description', () => {
    const result = submitItemSchema.safeParse({
      name: 'Tool',
      url: 'https://example.com',
      description: '',
      category: 'chatbot',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].message).toContain('Description is required')
    }
  })

  it('rejects description longer than 200 chars', () => {
    const result = submitItemSchema.safeParse({
      name: 'Tool',
      url: 'https://example.com',
      description: 'x'.repeat(201),
      category: 'chatbot',
    })
    expect(result.success).toBe(false)
  })

  it('rejects empty category', () => {
    const result = submitItemSchema.safeParse({
      name: 'Tool',
      url: 'https://example.com',
      description: 'A tool',
      category: '',
    })
    expect(result.success).toBe(false)
  })

  it('accepts optional logoUrl', () => {
    const result = submitItemSchema.safeParse({
      name: 'Tool',
      url: 'https://example.com',
      description: 'A tool',
      category: 'chatbot',
      logoUrl: '',
    })
    expect(result.success).toBe(true)
  })

  it('accepts optional pricingModel', () => {
    const result = submitItemSchema.safeParse({
      name: 'Tool',
      url: 'https://example.com',
      description: 'A tool',
      category: 'chatbot',
      pricingModel: 'freemium',
    })
    expect(result.success).toBe(true)
  })

  it('rejects invalid pricingModel', () => {
    const result = submitItemSchema.safeParse({
      name: 'Tool',
      url: 'https://example.com',
      description: 'A tool',
      category: 'chatbot',
      pricingModel: 'invalid',
    })
    expect(result.success).toBe(false)
  })

  it('accepts optional detail', () => {
    const result = submitItemSchema.safeParse({
      name: 'Tool',
      url: 'https://example.com',
      description: 'A tool',
      category: 'chatbot',
      detail: 'Some extra detail',
    })
    expect(result.success).toBe(true)
  })
})
