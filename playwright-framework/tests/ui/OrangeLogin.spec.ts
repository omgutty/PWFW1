import { test, expect } from '../../fixtures/test-fixture';
//import {test} from '@playwright/test';
//import { expect } from '@playwright/test';

//below import is for test data from json
import loginData from '../../test-data/loginData.json';


test('Orange Login',async ({page,orangeloginpage})=>{
    await page.goto('/',{timeout:100000});
    
    await orangeloginpage.login(
        loginData.orangecredential.username,
        loginData.orangecredential.password)
    await expect(page).toHaveURL(/index/,{timeout:6000});

})