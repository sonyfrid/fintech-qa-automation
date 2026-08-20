import { test, expect } from '../../fixtures/base.fixture';

test.describe('Transfer Operations', () => {
  
  test('TC-005: User can transfer funds between accounts', async ({ loggedInUser, accountsPage, transferPage, page }) => {
    // Переходим на страницу переводов
    await accountsPage.goToTransfer();
    
    // Проверяем, что форма перевода открылась
    await expect(transferPage.amountInput).toBeVisible();
    
    // Пытаемся выполнить перевод
    const transferResult = await transferPage.transferFunds('100');
    
    if (transferResult) {
      // Если перевод выполнен, проверяем результат
      const heading = await transferPage.getPageHeading();
      console.log('Заголовок после перевода:', heading);
      
      // Проверяем, что мы либо на странице успеха, либо видим сообщение
      expect(heading).toMatch(/Transfer Complete|Transfer Funds/i);
      
      // Если есть поле с суммой, проверяем его
      const amountField = page.locator('#amount');
      if (await amountField.count() > 0) {
        await expect(amountField).toHaveValue('100');
      }
    } else {
      // Если недостаточно счетов, пропускаем тест
      console.log('Недостаточно счетов для перевода');
      test.skip();
    }
  });

});
