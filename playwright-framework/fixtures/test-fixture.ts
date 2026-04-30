import { test as base ,expect} from '@playwright/test';
//when i add expect in above , export line is throughing error 

import { LoginPage } from '../pages/LoginPage';
import {OrangeLoginPage} from '../pages/OrangeLoginPage'
import { FreeLanceLoginpage } from '../pages/FreeLanceLoginpag';

type MyFixtures = {
  loginPage: LoginPage;
  orangeloginpage:OrangeLoginPage;
  freeLanceLoginPage: FreeLanceLoginpage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  orangeloginpage: async ({ page }, use) => {
    const orangeloginPage = new OrangeLoginPage(page);
    await use(orangeloginPage);
  },
  freeLanceLoginPage: async({page},use)=>{
    const freelanceloginpage= new FreeLanceLoginpage(page);
    await use(freelanceloginpage);

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