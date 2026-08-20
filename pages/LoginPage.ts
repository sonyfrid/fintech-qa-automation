import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly registerLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[value="Log In"]');
    this.errorMessage = page.locator('.error');
    this.registerLink = page.locator('a[href*="register"]');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  // Успешный логин (ждёт переход на overview)
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL('**/overview.htm', { timeout: 10000 });
  }

  // Попытка логина (не ждёт переход)
  async attemptLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    // Ждём немного, чтобы страница обновилась
    await this.page.waitForTimeout(2000);
  }

  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.textContent() || '';
  }
}
