import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  workers: 1,
  use: {
    baseURL: 'https://parabank.parasoft.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
});
