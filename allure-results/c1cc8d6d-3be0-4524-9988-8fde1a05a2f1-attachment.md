# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\api.spec.ts >> Parabank API Tests >> TC-007: API - Get account information
- Location: tests\api\api.spec.ts:24:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Parabank API Tests', () => {
  4   |   
  5   |   test('TC-006: API - Login with valid credentials', async ({ request }) => {
  6   |     // Правильный URL с services_proxy
  7   |     const response = await request.get(
  8   |       'https://parabank.parasoft.com/parabank/services_proxy/bank/login/john/demo'
  9   |     );
  10  |     
  11  |     console.log('Login status:', response.status());
  12  |     
  13  |     // Проверяем, что запрос успешен
  14  |     expect(response.status()).toBe(200);
  15  |     
  16  |     // Выводим ответ
  17  |     const responseBody = await response.text();
  18  |     console.log('Response:', responseBody.substring(0, 200));
  19  |     
  20  |     // Проверяем, что в ответе есть customer id
  21  |     expect(responseBody).toContain('<id>');
  22  |   });
  23  | 
  24  |   test('TC-007: API - Get account information', async ({ request }) => {
  25  |     // Логинимся через API
  26  |     const loginResponse = await request.get(
  27  |       'https://parabank.parasoft.com/parabank/services_proxy/bank/login/john/demo'
  28  |     );
  29  |     
  30  |     console.log('Login status:', loginResponse.status());
> 31  |     expect(loginResponse.ok()).toBeTruthy();
      |                                ^ Error: expect(received).toBeTruthy()
  32  |     
  33  |     const loginData = await loginResponse.text();
  34  |     
  35  |     // Извлекаем customerId из XML
  36  |     const customerIdMatch = loginData.match(/<id>(\d+)<\/id>/);
  37  |     expect(customerIdMatch).toBeTruthy();
  38  |     
  39  |     const customerId = customerIdMatch ? customerIdMatch[1] : null;
  40  |     console.log('Customer ID:', customerId);
  41  |     
  42  |     if (customerId) {
  43  |       // Получаем счета с правильным URL
  44  |       const accountsResponse = await request.get(
  45  |         `https://parabank.parasoft.com/parabank/services_proxy/bank/customers/${customerId}/accounts`
  46  |       );
  47  |       
  48  |       console.log('Accounts status:', accountsResponse.status());
  49  |       expect(accountsResponse.ok()).toBeTruthy();
  50  |       
  51  |       const accountsData = await accountsResponse.text();
  52  |       console.log('Accounts data (первые 300 символов):', accountsData.substring(0, 300));
  53  |       
  54  |       // Проверяем, что есть счета
  55  |       const accountMatches = accountsData.match(/<account>/g);
  56  |       const accountCount = accountMatches ? accountMatches.length : 0;
  57  |       console.log('Количество счетов:', accountCount);
  58  |       
  59  |       expect(accountCount).toBeGreaterThan(0);
  60  |       
  61  |       // Извлекаем баланс первого счёта
  62  |       const balanceMatch = accountsData.match(/<balance>([^<]+)<\/balance>/);
  63  |       
  64  |       if (balanceMatch) {
  65  |         const balance = parseFloat(balanceMatch[1]);
  66  |         console.log('Баланс первого счета:', balance);
  67  |         
  68  |         // Проверяем, что баланс — это число
  69  |         expect(balance).not.toBeNaN();
  70  |       }
  71  |     }
  72  |   });
  73  | 
  74  |   test('TC-008: API - Create account', async ({ request }) => {
  75  |     // Создаём новый счёт через правильный URL
  76  |     const response = await request.post(
  77  |       'https://parabank.parasoft.com/parabank/services_proxy/bank/createAccount',
  78  |       {
  79  |         params: {
  80  |           customerId: '12212',
  81  |           newAccountType: 'SAVINGS',
  82  |           fromAccountId: '12345'
  83  |         }
  84  |       }
  85  |     );
  86  |     
  87  |     console.log('Create account status:', response.status());
  88  |     
  89  |     // Проверяем ответ
  90  |     if (response.status() === 200 || response.status() === 201) {
  91  |       const responseBody = await response.text();
  92  |       console.log('Create account response:', responseBody);
  93  |       expect(responseBody).toContain('<id>');
  94  |     } else {
  95  |       // Если не получилось создать — пропускаем
  96  |       console.log('Create account API недоступен, пропускаем тест');
  97  |       test.skip();
  98  |     }
  99  |   });
  100 | 
  101 | });
  102 | 
```