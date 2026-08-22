import { test, expect } from '@playwright/test';

test.describe('Parabank API Tests', () => {
  
  test('TC-006: API - Get account information after UI login', async ({ page }) => {
    // Шаг 1: Логинимся через UI (создаёт сессию)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');
    
    // Ждём, пока попадём на overview
    await page.waitForURL('**/overview.htm', { timeout: 10000 });
    
    // Шаг 2: Делаем API-запрос (cookie подтянется автоматически)
    const apiResponse = await page.request.get(
      'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts'
    );
    
    console.log('API status:', apiResponse.status());
    expect(apiResponse.status()).toBe(200);
    
    // Шаг 3: Парсим JSON (не XML!)
    const accountsData = await apiResponse.json();
    console.log('Тип данных:', typeof accountsData);
    console.log('Количество счетов:', accountsData.length);
    
    // Проверяем, что это массив и он не пустой
    expect(Array.isArray(accountsData)).toBeTruthy();
    expect(accountsData.length).toBeGreaterThan(0);
    
    // Проверяем структуру первого счёта
    expect(accountsData[0]).toHaveProperty('id');
    expect(accountsData[0]).toHaveProperty('customerId');
    expect(accountsData[0]).toHaveProperty('type');
    expect(accountsData[0]).toHaveProperty('balance');
    
    console.log('Первый счёт:', accountsData[0]);
  });

  test('TC-007: API - Check balance from accounts after UI login', async ({ page }) => {
    // Шаг 1: Логинимся через UI
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');
    await page.click('input[value="Log In"]');
    
    await page.waitForURL('**/overview.htm', { timeout: 10000 });
    
    // Шаг 2: Делаем API-запрос
    const apiResponse = await page.request.get(
      'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts'
    );
    
    expect(apiResponse.ok()).toBeTruthy();
    
    // Шаг 3: Парсим JSON
    const accountsData = await apiResponse.json();
    
    // Проверяем, что у первого счёта есть баланс
    const firstAccount = accountsData[0];
    expect(firstAccount.balance).toBeDefined();
    
    // Баланс может быть любым числом (включая отрицательное)
    const balance = firstAccount.balance;
    console.log('Баланс первого счёта:', balance);
    expect(typeof balance).toBe('number');
    
    // Проверяем, что ID счёта существует
    expect(firstAccount.id).toBeTruthy();
    console.log('ID первого счёта:', firstAccount.id);
    
    // Дополнительно: выведем все типы счетов
    const types = accountsData.map((acc: any) => acc.type);
    const uniqueTypes = [...new Set(types)];
    console.log('Типы счетов:', uniqueTypes);
  });

});
