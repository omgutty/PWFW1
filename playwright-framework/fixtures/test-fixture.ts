import { test as base ,expect} from '@playwright/test';
//when i add expect in above , export line is throughing error 

import { LoginPage } from '../pages/LoginPage';
import {OrangeLoginPage} from '../pages/OrangeLoginPage'

type MyFixtures = {
  loginPage: LoginPage;
  orangeloginpage:OrangeLoginPage;
};




export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  orangeloginpage: async ({ page }, use) => {
    const orangeloginPage = new OrangeLoginPage(page);
    await use(orangeloginPage);
  }
});

export {expect}
//export const expect = test.expect;

// export const orane = base.extend<MyFixtures>({
//   orangeloginpage: async ({ page }, use) => {
//     const orangeloginPage = new OrangeLoginPage(page);
//     await use(orangeloginPage);
//   }
// });