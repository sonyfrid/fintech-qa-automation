import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AccountsPage } from '../pages/AccountsPage';
import { TransferPage } from '../pages/TransferPage';

// Расширяем стандартные фикстуры Playwright
type MyFixtures = {
  loginPage: LoginPage;
  accountsPage: AccountsPage;
  transferPage: TransferPage;
  loggedInUser: LoginPage; // Уже залогиненный пользователь
};

export const test = base.extend<MyFixtures>({
  // Фикстура для страницы логина
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  // Фикстура для страницы счетов
  accountsPage: async ({ page }, use) => {
    const accountsPage = new AccountsPage(page);
    await use(accountsPage);
  },

  // Фикстура для страницы переводов
  transferPage: async ({ page }, use) => {
    const transferPage = new TransferPage(page);
    await use(transferPage);
  },

  // Фикстура: сразу залогиненный пользователь
  loggedInUser: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('john', 'demo');
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
