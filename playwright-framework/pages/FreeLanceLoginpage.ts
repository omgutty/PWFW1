import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class FreeLanceLoginpage extends BasePage{

    readonly EnterEmail:Locator; 
    readonly EnterPassword:Locator;
    readonly SigninButton:Locator;
    readonly errormessage:Locator;
    readonly confirmationmessage:Locator;

    constructor (page:Page){
        super(page);
        this.EnterEmail= page.locator('#email1');
        this.EnterPassword= page.locator('#password1');
        this.SigninButton= page.locator('.submit-btn');
        this.errormessage= page.locator('.errorMessage');
        this.confirmationmessage= page.locator('.welcomeMessage');

        //this.EnterEmail= page.getByRole('textbox',{name:'email1'});
        //this.EnterPassword= page.getByRole('textbox',{name:'password1'});
        //this.SigninButton= page.getByRole('button',{name:'Sign in'});
    }

    async Signin(user: string, pass: string){
        //using BasePage methods
        await this.waitForVisible(this.EnterEmail);//Before filling, ensure element is visible:
        await this.fill(this.EnterEmail,user)
        await this.fill(this.EnterPassword, pass);
        await this.click(this.SigninButton);   
    }

    async isLoginUnsuccessful():Promise<string|null>{
        return await this.errormessage.textContent();
    }
    async isLoginSuccessful() {
    return this.page.url().includes('dashboard');
    }

    async successfulllogin():Promise <string|null>{
        return await this.confirmationmessage.textContent()
    }
}

