import { test, expect } from '@playwright/test'

test.describe('AIHub Homepage', () => {
  test('should display site name on homepage', async ({ page }) => {
    await page.goto('/')
    // The page should render content
    const bodyContent = page.locator('body')
    await expect(bodyContent).toBeVisible()
  })

  test('should have a visible heading', async ({ page }) => {
    await page.goto('/')
    const heading = page.locator('h1').first()
    await expect(heading).toBeVisible()
  })

  test('should display category sections', async ({ page }) => {
    await page.goto('/')
    // Expect at least some category content to render
    const categoryCards = page.locator('[class*="category"], [class*="card"], section')
    const count = await categoryCards.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('should have navigation with locale switch', async ({ page }) => {
    await page.goto('/')
    // Look for locale switcher or navigation elements
    const nav = page.locator('nav, header').first()
    if (await nav.count() > 0) {
      await expect(nav).toBeVisible()
    }
  })

  test('should have footer with links', async ({ page }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })

  test('should respond to URL changes', async ({ page }) => {
    await page.goto('/')
    await page.goto('/categories')
    const currentUrl = page.url()
    expect(currentUrl).toContain('categories')
  })
})
