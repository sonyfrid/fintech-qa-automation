import { test, expect } from '../../fixtures/base.fixture';

test.describe('Login Functionality', () => {
  
  test('TC-001: User can login with valid credentials', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login('john', 'demo');
    
    // Проверяем, что перешли на страницу счетов
    await expect(page).toHaveURL(/overview\.htm/);
    
    // Проверяем, что видим заголовок Accounts Overview
    const heading = page.getByRole('heading', { name: 'Accounts Overview' });
    await expect(heading).toBeVisible();
  });

  test('TC-002: Login with invalid password shows error', async ({ loginPage }) => {
    await loginPage.goto();
    
    // Используем attemptLogin (не ждём перехода)
    await loginPage.attemptLogin('john', 'wrongpassword');
    
    // Проверяем, что появилось сообщение об ошибке
    const errorText = await loginPage.getErrorMessage();
    console.log('Error message:', errorText);
    
    // Проверяем, что текст содержит ключевые слова
    expect(errorText).toMatch(/error|invalid|not verify|not be verified/i);
  });

});
