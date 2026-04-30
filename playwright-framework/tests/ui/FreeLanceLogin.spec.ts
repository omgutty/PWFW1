import { test, expect } from '../../fixtures/test-fixture';
import loginData from '../../test-data/loginData.json';
import { Logger } from '../../utils/logger';



test('Freelancelongin with valid user',async ({page,freeLanceLoginPage})=>{
    Logger.info('Login started');
    
    await page.goto('/');
    await freeLanceLoginPage.Signin(
        loginData.Freelancevaliduser.email,
        loginData.Freelancevaliduser.password);
    await page.waitForTimeout(5000);
    
    //expect(await freeLanceLoginPage.isLoginUnsuccessful).toh
    //expect(await freeLanceLoginPage.isLoginSuccessful()).toBeTruthy();
    //Logger.error('Login failed'); add this in if condition, if expected to be failed. 
})