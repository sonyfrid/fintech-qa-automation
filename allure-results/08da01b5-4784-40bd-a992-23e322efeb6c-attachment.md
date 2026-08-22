# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\api.spec.ts >> Parabank API Tests >> TC-006: API - Get account information
- Location: tests\api\api.spec.ts:5:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Parabank API Tests', () => {
  4  |   
  5  |   test('TC-006: API - Get account information', async ({ request }) => {
  6  |     // Правильный URL из DevTools
  7  |     const response = await request.get(
  8  |       'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts'
  9  |     );
  10 |     
  11 |     console.log('Status:', response.status());
  12 |     
  13 |     // Проверяем, что запрос успешен
> 14 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  15 |     
  16 |     // Получаем данные
  17 |     const accountsData = await response.text();
  18 |     console.log('Response (первые 300 символов):', accountsData.substring(0, 300));
  19 |     
  20 |     // Проверяем, что в ответе есть счета
  21 |     expect(accountsData).toContain('<account>');
  22 |     
  23 |     // Считаем количество счетов
  24 |     const accountMatches = accountsData.match(/<account>/g);
  25 |     const accountCount = accountMatches ? accountMatches.length : 0;
  26 |     console.log('Количество счетов:', accountCount);
  27 |     
  28 |     expect(accountCount).toBeGreaterThan(0);
  29 |   });
  30 | 
  31 |   test('TC-007: API - Check account balance', async ({ request }) => {
  32 |     // Получаем счета
  33 |     const response = await request.get(
  34 |       'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts'
  35 |     );
  36 |     
  37 |     expect(response.ok()).toBeTruthy();
  38 |     
  39 |     const accountsData = await response.text();
  40 |     
  41 |     // Извлекаем баланс первого счёта
  42 |     const balanceMatch = accountsData.match(/<balance>([^<]+)<\/balance>/);
  43 |     
  44 |     if (balanceMatch) {
  45 |       const balance = parseFloat(balanceMatch[1]);
  46 |       console.log('Баланс первого счета:', balance);
  47 |       
  48 |       // Проверяем, что баланс — это число (может быть отрицательным)
  49 |       expect(balance).not.toBeNaN();
  50 |     }
  51 |     
  52 |     // Извлекаем ID первого счёта
  53 |     const accountIdMatch = accountsData.match(/<account><id>(\d+)<\/id>/);
  54 |     if (accountIdMatch) {
  55 |       console.log('ID первого счёта:', accountIdMatch[1]);
  56 |       expect(accountIdMatch[1]).toBeTruthy();
  57 |     }
  58 |   });
  59 | 
  60 | });
  61 | 
```