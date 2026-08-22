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
  6   |     // Логинимся через API
  7   |     const response = await request.get(
  8   |       'https://parabank.parasoft.com/services/bank/login/john/demo'
  9   |     );
  10  |     
  11  |     // Проверяем статус
  12  |     expect(response.status()).toBe(200);
  13  |     
  14  |     // Выводим для отладки
  15  |     const responseBody = await response.text();
  16  |     console.log('Status:', response.status());
  17  |     console.log('Response (первые 200 символов):', responseBody.substring(0, 200));
  18  |     
  19  |     // Проверяем, что в ответе есть customer id
  20  |     expect(responseBody).toContain('<customer>');
  21  |     expect(responseBody).toContain('<id>');
  22  |   });
  23  | 
  24  |   test('TC-007: API - Get account information', async ({ request }) => {
  25  |     // Логинимся через API чтобы получить customerId
  26  |     const loginResponse = await request.get(
  27  |       'https://parabank.parasoft.com/services/bank/login/john/demo'
  28  |     );
  29  |     
> 30  |     expect(loginResponse.ok()).toBeTruthy();
      |                                ^ Error: expect(received).toBeTruthy()
  31  |     const loginData = await loginResponse.text();
  32  |     
  33  |     // Извлекаем customerId из XML
  34  |     const customerIdMatch = loginData.match(/<id>(\d+)<\/id>/);
  35  |     expect(customerIdMatch).toBeTruthy();
  36  |     
  37  |     const customerId = customerIdMatch ? customerIdMatch[1] : null;
  38  |     console.log('Customer ID:', customerId);
  39  |     
  40  |     if (customerId) {
  41  |       // Получаем счета клиента
  42  |       const accountsResponse = await request.get(
  43  |         `https://parabank.parasoft.com/services/bank/customers/${customerId}/accounts`
  44  |       );
  45  |       
  46  |       console.log('Accounts response status:', accountsResponse.status());
  47  |       
  48  |       expect(accountsResponse.ok()).toBeTruthy();
  49  |       const accountsData = await accountsResponse.text();
  50  |       
  51  |       // Выводим первые 300 символов для отладки
  52  |       console.log('Accounts data (первые 300 символов):', accountsData.substring(0, 300));
  53  |       
  54  |       // Парсим XML вручную (без библиотек)
  55  |       // Считаем количество счетов
  56  |       const accountMatches = accountsData.match(/<account>/g);
  57  |       const accountCount = accountMatches ? accountMatches.length : 0;
  58  |       console.log('Количество счетов:', accountCount);
  59  |       
  60  |       // Проверяем, что есть хотя бы один счёт
  61  |       expect(accountCount).toBeGreaterThan(0);
  62  |       
  63  |       // Извлекаем баланс первого счёта
  64  |       const balanceMatch = accountsData.match(/<balance>([^<]+)<\/balance>/);
  65  |       
  66  |       if (balanceMatch) {
  67  |         const balance = parseFloat(balanceMatch[1]);
  68  |         console.log('Баланс первого счета:', balance);
  69  |         
  70  |         // Проверяем, что баланс — это число (не NaN)
  71  |         expect(balance).not.toBeNaN();
  72  |       } else {
  73  |         // Если баланс не найден — тест всё равно прошёл (счёт есть)
  74  |         console.log('Баланс не найден в ответе, но счёт существует');
  75  |       }
  76  |       
  77  |       // Извлекаем ID первого счёта
  78  |       const accountIdMatch = accountsData.match(/<account><id>(\d+)<\/id>/);
  79  |       if (accountIdMatch) {
  80  |         console.log('ID первого счёта:', accountIdMatch[1]);
  81  |         expect(accountIdMatch[1]).toBeTruthy();
  82  |       }
  83  |     }
  84  |   });
  85  | 
  86  |   test('TC-008: API - Create account', async ({ request }) => {
  87  |     // Создаём новый счёт через API
  88  |     const response = await request.post(
  89  |       'https://parabank.parasoft.com/services/bank/createAccount',
  90  |       {
  91  |         params: {
  92  |           customerId: '12212',
  93  |           newAccountType: 'SAVINGS',
  94  |           fromAccountId: '12345'
  95  |         }
  96  |       }
  97  |     );
  98  |     
  99  |     // Выводим статус
  100 |     console.log('Create account status:', response.status());
  101 |     
  102 |     // Проверяем, что запрос выполнен (может быть 200 или 201)
  103 |     expect(response.status()).toBeGreaterThanOrEqual(200);
  104 |     expect(response.status()).toBeLessThan(300);
  105 |     
  106 |     // Выводим ответ
  107 |     const responseBody = await response.text();
  108 |     console.log('Create account response:', responseBody);
  109 |     
  110 |     // Проверяем, что в ответе есть ID нового счёта
  111 |     expect(responseBody).toContain('<id>');
  112 |   });
  113 | 
  114 | });
  115 | 
```