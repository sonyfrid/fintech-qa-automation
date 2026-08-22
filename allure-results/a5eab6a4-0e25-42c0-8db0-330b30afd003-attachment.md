# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\api.spec.ts >> Parabank API Tests >> TC-006: API - Get account information after UI login
- Location: tests\api\api.spec.ts:5:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "<account>"
Received string:    "[{\"id\":12345,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":-3810.00},{\"id\":12456,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":310.45},{\"id\":12567,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":0.00},{\"id\":12678,\"customerId\":12212,\"type\":\"SAVINGS\",\"balance\":-200.00},{\"id\":12789,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":0.00},{\"id\":12900,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":0.00},{\"id\":13011,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":100.00},{\"id\":13122,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":1100.00},{\"id\":13233,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":100.00},{\"id\":13344,\"customerId\":12212,\"type\":\"SAVINGS\",\"balance\":1231.10},{\"id\":13677,\"customerId\":12212,\"type\":\"LOAN\",\"balance\":1000.00},{\"id\":13788,\"customerId\":12212,\"type\":\"LOAN\",\"balance\":5000.00},{\"id\":13899,\"customerId\":12212,\"type\":\"LOAN\",\"balance\":1000.00},{\"id\":14010,\"customerId\":12212,\"type\":\"LOAN\",\"balance\":1000.00},{\"id\":14121,\"customerId\":12212,\"type\":\"LOAN\",\"balance\":1000.00},{\"id\":14343,\"customerId\":12212,\"type\":\"LOAN\",\"balance\":1000.00},{\"id\":14454,\"customerId\":12212,\"type\":\"LOAN\",\"balance\":1000.00},{\"id\":54321,\"customerId\":12212,\"type\":\"CHECKING\",\"balance\":1351.12}]"
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e3]:
      - link:
        - /url: admin.htm
        - img [ref=f1e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm
        - img "ParaBank" [ref=f1e5] [cursor=pointer]
      - paragraph [ref=f1e6]: Experience the difference
    - generic [ref=f1e7]:
      - list [ref=f1e8]:
        - listitem [ref=f1e9]: Solutions
        - listitem [ref=f1e10]:
          - link "About Us" [ref=f1e11] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=f1e12]:
          - link "Services" [ref=f1e13] [cursor=pointer]:
            - /url: services.htm
        - listitem [ref=f1e14]:
          - link "Products" [ref=f1e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=f1e16]:
          - link "Locations" [ref=f1e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=f1e18]:
          - link "Admin Page" [ref=f1e19] [cursor=pointer]:
            - /url: admin.htm
      - list [ref=f1e20]:
        - listitem [ref=f1e21]:
          - link "home" [ref=f1e22] [cursor=pointer]:
            - /url: index.htm
        - listitem [ref=f1e23]:
          - link "about" [ref=f1e24] [cursor=pointer]:
            - /url: about.htm
        - listitem [ref=f1e25]:
          - link "contact" [ref=f1e26] [cursor=pointer]:
            - /url: contact.htm
    - generic [ref=f1e27]:
      - generic [ref=f1e28]:
        - paragraph [ref=f1e29]: Welcome John Smith
        - heading "Account Services" [level=2] [ref=f1e30]
        - list [ref=f1e31]:
          - listitem [ref=f1e32]:
            - link "Open New Account" [ref=f1e33] [cursor=pointer]:
              - /url: openaccount.htm
          - listitem [ref=f1e34]:
            - link "Accounts Overview" [ref=f1e35] [cursor=pointer]:
              - /url: overview.htm
          - listitem [ref=f1e36]:
            - link "Transfer Funds" [ref=f1e37] [cursor=pointer]:
              - /url: transfer.htm
          - listitem [ref=f1e38]:
            - link "Bill Pay" [ref=f1e39] [cursor=pointer]:
              - /url: billpay.htm
          - listitem [ref=f1e40]:
            - link "Find Transactions" [ref=f1e41] [cursor=pointer]:
              - /url: findtrans.htm
          - listitem [ref=f1e42]:
            - link "Update Contact Info" [ref=f1e43] [cursor=pointer]:
              - /url: updateprofile.htm
          - listitem [ref=f1e44]:
            - link "Request Loan" [ref=f1e45] [cursor=pointer]:
              - /url: requestloan.htm
          - listitem [ref=f1e46]:
            - link "Log Out" [ref=f1e47] [cursor=pointer]:
              - /url: logout.htm
      - generic [ref=f1e50]:
        - heading "Accounts Overview" [level=1] [ref=f1e51]
        - table [ref=f1e52]:
          - rowgroup [ref=f1e53]:
            - row [ref=f1e54]:
              - columnheader "Account" [ref=f1e55]
              - columnheader "Balance*" [ref=f1e56]
              - columnheader "Available Amount" [ref=f1e57]
          - rowgroup [ref=f1e58]:
            - row [ref=f1e59]:
              - cell [ref=f1e60]:
                - link "12345" [ref=f1e61] [cursor=pointer]:
                  - /url: activity.htm?id=12345
              - cell "-$3810.00" [ref=f1e62]
              - cell "$0.00" [ref=f1e63]
            - row [ref=f1e64]:
              - cell [ref=f1e65]:
                - link "12456" [ref=f1e66] [cursor=pointer]:
                  - /url: activity.htm?id=12456
              - cell "$310.45" [ref=f1e67]
              - cell "$310.45" [ref=f1e68]
            - row [ref=f1e69]:
              - cell [ref=f1e70]:
                - link "12567" [ref=f1e71] [cursor=pointer]:
                  - /url: activity.htm?id=12567
              - cell "$0.00" [ref=f1e72]
              - cell "$0.00" [ref=f1e73]
            - row [ref=f1e74]:
              - cell [ref=f1e75]:
                - link "12678" [ref=f1e76] [cursor=pointer]:
                  - /url: activity.htm?id=12678
              - cell "-$200.00" [ref=f1e77]
              - cell "$0.00" [ref=f1e78]
            - row [ref=f1e79]:
              - cell [ref=f1e80]:
                - link "12789" [ref=f1e81] [cursor=pointer]:
                  - /url: activity.htm?id=12789
              - cell "$0.00" [ref=f1e82]
              - cell "$0.00" [ref=f1e83]
            - row [ref=f1e84]:
              - cell [ref=f1e85]:
                - link "12900" [ref=f1e86] [cursor=pointer]:
                  - /url: activity.htm?id=12900
              - cell "$0.00" [ref=f1e87]
              - cell "$0.00" [ref=f1e88]
            - row [ref=f1e89]:
              - cell [ref=f1e90]:
                - link "13011" [ref=f1e91] [cursor=pointer]:
                  - /url: activity.htm?id=13011
              - cell "$100.00" [ref=f1e92]
              - cell "$100.00" [ref=f1e93]
            - row [ref=f1e94]:
              - cell [ref=f1e95]:
                - link "13122" [ref=f1e96] [cursor=pointer]:
                  - /url: activity.htm?id=13122
              - cell "$1100.00" [ref=f1e97]
              - cell "$1100.00" [ref=f1e98]
            - row [ref=f1e99]:
              - cell [ref=f1e100]:
                - link "13233" [ref=f1e101] [cursor=pointer]:
                  - /url: activity.htm?id=13233
              - cell "$100.00" [ref=f1e102]
              - cell "$100.00" [ref=f1e103]
            - row [ref=f1e104]:
              - cell [ref=f1e105]:
                - link "13344" [ref=f1e106] [cursor=pointer]:
                  - /url: activity.htm?id=13344
              - cell "$1231.10" [ref=f1e107]
              - cell "$1231.10" [ref=f1e108]
            - row [ref=f1e109]:
              - cell [ref=f1e110]:
                - link "13677" [ref=f1e111] [cursor=pointer]:
                  - /url: activity.htm?id=13677
              - cell "$1000.00" [ref=f1e112]
              - cell "$1000.00" [ref=f1e113]
            - row [ref=f1e114]:
              - cell [ref=f1e115]:
                - link "13788" [ref=f1e116] [cursor=pointer]:
                  - /url: activity.htm?id=13788
              - cell "$5000.00" [ref=f1e117]
              - cell "$5000.00" [ref=f1e118]
            - row [ref=f1e119]:
              - cell [ref=f1e120]:
                - link "13899" [ref=f1e121] [cursor=pointer]:
                  - /url: activity.htm?id=13899
              - cell "$1000.00" [ref=f1e122]
              - cell "$1000.00" [ref=f1e123]
            - row [ref=f1e124]:
              - cell [ref=f1e125]:
                - link "14010" [ref=f1e126] [cursor=pointer]:
                  - /url: activity.htm?id=14010
              - cell "$1000.00" [ref=f1e127]
              - cell "$1000.00" [ref=f1e128]
            - row [ref=f1e129]:
              - cell [ref=f1e130]:
                - link "14121" [ref=f1e131] [cursor=pointer]:
                  - /url: activity.htm?id=14121
              - cell "$1000.00" [ref=f1e132]
              - cell "$1000.00" [ref=f1e133]
            - row [ref=f1e134]:
              - cell [ref=f1e135]:
                - link "14343" [ref=f1e136] [cursor=pointer]:
                  - /url: activity.htm?id=14343
              - cell "$1000.00" [ref=f1e137]
              - cell "$1000.00" [ref=f1e138]
            - row [ref=f1e139]:
              - cell [ref=f1e140]:
                - link "14454" [ref=f1e141] [cursor=pointer]:
                  - /url: activity.htm?id=14454
              - cell "$1000.00" [ref=f1e142]
              - cell "$1000.00" [ref=f1e143]
            - row [ref=f1e144]:
              - cell [ref=f1e145]:
                - link "54321" [ref=f1e146] [cursor=pointer]:
                  - /url: activity.htm?id=54321
              - cell "$1351.12" [ref=f1e147]
              - cell "$1351.12" [ref=f1e148]
            - row [ref=f1e149]:
              - cell "Total" [ref=f1e150]
              - cell "$11182.67" [ref=f1e151]
              - cell [ref=f1e152]
          - rowgroup [ref=f1e153]:
            - row [ref=f1e154]:
              - cell "*Balance includes deposits that may be subject to holds" [ref=f1e155]
  - generic [ref=f1e157]:
    - list [ref=f1e158]:
      - listitem [ref=f1e159]:
        - link "Home" [ref=f1e160] [cursor=pointer]:
          - /url: index.htm
        - text: "|"
      - listitem [ref=f1e161]:
        - link "About Us" [ref=f1e162] [cursor=pointer]:
          - /url: about.htm
        - text: "|"
      - listitem [ref=f1e163]:
        - link "Services" [ref=f1e164] [cursor=pointer]:
          - /url: services.htm
        - text: "|"
      - listitem [ref=f1e165]:
        - link "Products" [ref=f1e166] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=f1e167]:
        - link "Locations" [ref=f1e168] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=f1e169]:
        - link "Forum" [ref=f1e170] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=f1e171]:
        - link "Site Map" [ref=f1e172] [cursor=pointer]:
          - /url: sitemap.htm
        - text: "|"
      - listitem [ref=f1e173]:
        - link "Contact Us" [ref=f1e174] [cursor=pointer]:
          - /url: contact.htm
    - paragraph [ref=f1e175]: © Parasoft. All rights reserved.
    - list [ref=f1e176]:
      - listitem [ref=f1e177]: "Visit us at:"
      - listitem [ref=f1e178]:
        - link "www.parasoft.com" [ref=f1e179] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Parabank API Tests', () => {
  4  |   
  5  |   test('TC-006: API - Get account information after UI login', async ({ page, request }) => {
  6  |     // Шаг 1: Логинимся через UI (создаёт сессию)
  7  |     await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  8  |     await page.fill('input[name="username"]', 'john');
  9  |     await page.fill('input[name="password"]', 'demo');
  10 |     await page.click('input[value="Log In"]');
  11 |     
  12 |     // Ждём, пока попадём на overview
  13 |     await page.waitForURL('**/overview.htm', { timeout: 10000 });
  14 |     
  15 |     // Шаг 2: Получаем cookie из браузера
  16 |     const cookies = await page.context().cookies();
  17 |     console.log('Cookies:', cookies.map(c => `${c.name}=${c.value.substring(0, 10)}...`));
  18 |     
  19 |     // Находим JSESSIONID
  20 |     const jsessionCookie = cookies.find(c => c.name === 'JSESSIONID');
  21 |     expect(jsessionCookie).toBeTruthy();
  22 |     
  23 |     // Шаг 3: Делаем API-запрос с cookie
  24 |     // Используем request из page.context(), который автоматически подхватывает cookie
  25 |     const apiResponse = await page.request.get(
  26 |       'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts'
  27 |     );
  28 |     
  29 |     console.log('API status:', apiResponse.status());
  30 |     
  31 |     // Проверяем, что запрос успешен
  32 |     expect(apiResponse.status()).toBe(200);
  33 |     
  34 |     // Получаем данные
  35 |     const accountsData = await apiResponse.text();
  36 |     console.log('Response (первые 300 символов):', accountsData.substring(0, 300));
  37 |     
  38 |     // Проверяем, что в ответе есть счета
> 39 |     expect(accountsData).toContain('<account>');
     |                          ^ Error: expect(received).toContain(expected) // indexOf
  40 |     
  41 |     // Считаем количество счетов
  42 |     const accountMatches = accountsData.match(/<account>/g);
  43 |     const accountCount = accountMatches ? accountMatches.length : 0;
  44 |     console.log('Количество счетов:', accountCount);
  45 |     
  46 |     expect(accountCount).toBeGreaterThan(0);
  47 |   });
  48 | 
  49 |   test('TC-007: API - Check balance from accounts after UI login', async ({ page }) => {
  50 |     // Шаг 1: Логинимся через UI
  51 |     await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  52 |     await page.fill('input[name="username"]', 'john');
  53 |     await page.fill('input[name="password"]', 'demo');
  54 |     await page.click('input[value="Log In"]');
  55 |     
  56 |     await page.waitForURL('**/overview.htm', { timeout: 10000 });
  57 |     
  58 |     // Шаг 2: Делаем API-запрос из браузерного контекста (cookie подтянется автоматически)
  59 |     const apiResponse = await page.request.get(
  60 |       'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/12212/accounts'
  61 |     );
  62 |     
  63 |     console.log('API status:', apiResponse.status());
  64 |     
  65 |     expect(apiResponse.ok()).toBeTruthy();
  66 |     
  67 |     const accountsData = await apiResponse.text();
  68 |     
  69 |     // Извлекаем первый баланс
  70 |     const balanceMatch = accountsData.match(/<balance>([^<]+)<\/balance>/);
  71 |     
  72 |     if (balanceMatch) {
  73 |       const balance = parseFloat(balanceMatch[1]);
  74 |       console.log('Баланс первого счета:', balance);
  75 |       
  76 |       // Баланс может быть любым числом (включая отрицательное)
  77 |       expect(balance).not.toBeNaN();
  78 |     }
  79 |     
  80 |     // Извлекаем ID первого счёта
  81 |     const accountIdMatch = accountsData.match(/<id>(\d+)<\/id>/);
  82 |     if (accountIdMatch) {
  83 |       console.log('ID первого счёта:', accountIdMatch[1]);
  84 |       expect(accountIdMatch[1]).toBeTruthy();
  85 |     }
  86 |   });
  87 | 
  88 | });
  89 | 
```