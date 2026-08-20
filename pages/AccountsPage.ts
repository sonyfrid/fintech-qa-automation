import { Page, Locator } from '@playwright/test';

export class AccountsPage {
  readonly page: Page;
  
  readonly accountsTable: Locator;
  readonly balanceCell: Locator;
  readonly transferLink: Locator;
  readonly openNewAccountLink: Locator;
  readonly accountsOverviewLink: Locator;
  readonly billPayLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountsTable = page.locator('#accountTable');
    this.balanceCell = page.locator('td').filter({ hasText: /\$/ }).first();
    this.transferLink = page.locator('a[href*="transfer"]');
    this.openNewAccountLink = page.locator('a[href*="openaccount"]');
    this.accountsOverviewLink = page.locator('a[href*="overview"]');
    this.billPayLink = page.locator('a[href*="billpay"]');
  }

  async getBalance(): Promise<string> {
    // Ждём появления таблицы
    await this.accountsTable.waitFor({ state: 'visible', timeout: 10000 });
    return await this.balanceCell.textContent() || '';
  }

  async getAccountsCount(): Promise<number> {
    // Ждём появления таблицы
    await this.accountsTable.waitFor({ state: 'visible', timeout: 10000 });
    
    // Ищем строки с данными (не заголовки)
    const rows = this.accountsTable.locator('tr');
    const allRows = await rows.count();
    
    // Вычитаем заголовок (первая строка)
    const dataRows = Math.max(0, allRows - 1);
    
    console.log(`Всего строк: ${allRows}, данных: ${dataRows}`);
    return dataRows;
  }

  async goToTransfer() {
    await this.transferLink.click();
    await this.page.waitForLoadState('networkidle');
  }
}
