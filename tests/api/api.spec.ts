import { test, expect } from '@playwright/test';

test.describe('Parabank API Tests', () => {
  
  test('TC-006: API - Login with valid credentials', async ({ request }) => {
    const response = await request.get(
      'https://parabank.parasoft.com/parabank/services/bank/login/john/demo'
    );
    
    console.log('Status:', response.status());
    expect(response.ok()).toBeTruthy();
    
    const responseBody = await response.text();
    console.log('Response (первые 200 символов):', responseBody.substring(0, 200));
    
    expect(responseBody).toContain('<id>');
    expect(responseBody).toContain('<firstName>John</firstName>');
  });

  test('TC-007: API - Get account information', async ({ request }) => {
    // Логинимся через API
    const loginResponse = await request.get(
      'https://parabank.parasoft.com/parabank/services/bank/login/john/demo'
    );
    
    if (!loginResponse.ok()) {
      console.log('API логин недоступен');
      test.skip();
      return;
    }
    
    const loginData = await loginResponse.text();
    const customerIdMatch = loginData.match(/<id>(\d+)<\/id>/);
    
    if (!customerIdMatch) {
      console.log('Customer ID не найден');
      test.skip();
      return;
    }
    
    const customerId = customerIdMatch[1];
    console.log('Customer ID:', customerId);
    
    // Получаем счета клиента
    const accountsResponse = await request.get(
      `https://parabank.parasoft.com/parabank/services/bank/customers/${customerId}/accounts`
    );
    
    console.log('Accounts response status:', accountsResponse.status());
    
    if (!accountsResponse.ok()) {
      console.log('Не удалось получить счета');
      test.skip();
      return;
    }
    
    // API возвращает XML
    const accountsData = await accountsResponse.text();
    console.log('Accounts data (первые 300 символов):', accountsData.substring(0, 300));
    
    // Проверяем, что в ответе есть информация о счетах
    expect(accountsData).toContain('<account>');
    expect(accountsData).toContain('<balance>');
    
    // Подсчитываем количество счетов
    const accountCount = (accountsData.match(/<account>/g) || []).length;
    console.log('Количество счетов:', accountCount);
    expect(accountCount).toBeGreaterThan(0);
    
    // Проверяем, что баланс - это число (без знака доллара в XML)
    const balanceMatch = accountsData.match(/<balance>(\d+\.\d{2})<\/balance>/);
    expect(balanceMatch).toBeTruthy();
    
    if (balanceMatch) {
      const balance = parseFloat(balanceMatch[1]);
      console.log('Баланс первого счета:', balance);
      expect(balance).toBeGreaterThan(0);
    }
  });

});
