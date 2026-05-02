import { test, expect } from '../../fixtures/test-fixture';
import loginData from '../../test-data/loginData.json';
import { Logger } from '../../utils/logger';
import {printmessage} from '../../utils/helper'


test('Freelancelongin with valid user',async ({page,freeLanceLoginPage})=>{
    Logger.info('Login started');
    
    await page.goto('/login');
    await freeLanceLoginPage.Signin(
        loginData.Freelancevaliduser.email,
        loginData.Freelancevaliduser.password);
    //await page.waitForTimeout(5000);
    const successmessage=await freeLanceLoginPage.successfulllogin()
    printmessage(`${successmessage}`)
     expect(successmessage).toBe('Welcome Admin Manager to Learn Automation Courses');
    //const errrormessage=await freeLanceLoginPage.isLoginUnsuccessful();
    //expect(errrormessage ).toEqual('Something went wrong');
    

})