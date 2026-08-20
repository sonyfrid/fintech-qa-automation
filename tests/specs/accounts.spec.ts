import { test, expect } from '../../fixtures/base.fixture';

test.describe('Account Operations', () => {
  
  test('TC-003: User can view account balance', async ({ loggedInUser, accountsPage }) => {
    // Ждём загрузки таблицы
    await accountsPage.accountsTable.waitFor({ state: 'visible', timeout: 10000 });
    
    // Проверяем, что таблица видна
    await expect(accountsPage.accountsTable).toBeVisible();
    
    // Проверяем, что есть хотя бы один счет
    const accountsCount = await accountsPage.getAccountsCount();
    console.log(`Найдено счетов: ${accountsCount}`);
    expect(accountsCount).toBeGreaterThan(0);
    
    // Проверяем, что баланс отображается в долларах
    const balance = await accountsPage.getBalance();
    console.log(`Баланс первого счета: ${balance}`);
    expect(balance).toMatch(/\$/);
  });

  test('TC-004: Account table has required columns', async ({ loggedInUser, accountsPage }) => {
    // Ждём загрузки таблицы
    await accountsPage.accountsTable.waitFor({ state: 'visible', timeout: 10000 });
    
    // Получаем заголовки колонок
    const headers = accountsPage.accountsTable.locator('th');
    const headerTexts = await headers.allTextContents();
    
    console.log('Заголовки таблицы:', headerTexts);
    
    // Проверяем наличие колонок
    expect(headerTexts.some(text => text.includes('Account'))).toBeTruthy();
    expect(headerTexts.some(text => text.includes('Balance'))).toBeTruthy();
    expect(headerTexts.some(text => text.includes('Available'))).toBeTruthy();
  });

});
