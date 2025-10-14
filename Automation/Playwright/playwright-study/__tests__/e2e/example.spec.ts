import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // playwright url로 이동하는 테스트
  await page.goto('https://playwright.dev/');

  // <title> 태그가 playwright을 포함하고 있는지 테스트
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // playwright url 진입
  await page.goto('https://playwright.dev/');

  // Get started라는 링크를 클릭
  await page.getByRole('link', { name: 'Get started' }).click();

  // 이동한 페이지의 제목이 Installation을 포함하는지 검사
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
