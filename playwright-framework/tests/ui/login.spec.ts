import { test, expect } from '../../fixtures/baseTest';
import loginData from '../../test-data/loginData.json';

test('Sauce Demo Login test', async ({ page, loginPage }) => {
    await page.goto('/');

    await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await expect(page).toHaveURL(/inventory.html/);
  //specifically failing to check the video recording 
  //await expect(page).toHaveURL(/wrong-url/);
  
});