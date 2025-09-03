const { test, expect } = require('@playwright/test');

test('Valid login test', async ({ page }) => {
  await page.goto('https://example.com/login');
  
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password');
  await page.click('#login');

  await expect(page.locator('#welcome')).toBeVisible();
});
