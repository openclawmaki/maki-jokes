import { test, expect } from '@playwright/test';

test('has title and main elements', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Maki Jokes/);

  // Check for the heading
  await expect(page.getByRole('heading', { name: 'Maki Jokes 🍣' })).toBeVisible();

  // Check for the joke box
  await expect(page.locator('.box')).toBeVisible();

  // Check for the button
  await expect(page.getByRole('button', { name: '¡Otro!' })).toBeVisible();

  // Visual check: take a screenshot
  await page.screenshot({ path: 'tests/visual-snapshot.png' });
});

test('button changes the joke', async ({ page }) => {
  await page.goto('/');

  const initialJoke = await page.locator('.joke-setup').innerText();
  await page.getByRole('button', { name: '¡Otro!' }).click();
  const newJoke = await page.locator('.joke-setup').innerText();

  expect(initialJoke).not.toBe(newJoke);
});
