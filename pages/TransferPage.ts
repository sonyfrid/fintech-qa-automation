import { Page, Locator } from '@playwright/test';

export class TransferPage {
  readonly page: Page;
  
  readonly amountInput: Locator;
  readonly fromAccountSelect: Locator;
  readonly toAccountSelect: Locator;
  readonly transferButton: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.amountInput = page.locator('input[id="amount"]');
    this.fromAccountSelect = page.locator('select[id="fromAccountId"]');
    this.toAccountSelect = page.locator('select[id="toAccountId"]');
    this.transferButton = page.locator('input[value="Transfer"]');
    this.pageHeading = page.locator('h1.title').first();
  }

  async transferFunds(amount: string) {
    await this.amountInput.fill(amount);
    
    // Проверяем, что есть достаточно счетов
    const fromOptions = await this.fromAccountSelect.locator('option').count();
    const toOptions = await this.toAccountSelect.locator('option').count();
    
    if (fromOptions >= 1 && toOptions >= 2) {
      await this.fromAccountSelect.selectOption({ index: 0 });
      await this.toAccountSelect.selectOption({ index: 1 });
      await this.transferButton.click();
      await this.page.waitForLoadState('networkidle');
      return true;
    }
    
    return false;
  }

  async getPageHeading(): Promise<string> {
    return await this.pageHeading.textContent() || '';
  }
}
