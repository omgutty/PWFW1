import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrangeLoginPage extends BasePage{

    //readonly page: Page; //as we are using super page it will get the page from parent class constructor page
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbutton:Locator;
    


    constructor(page:Page){
        //super keyword will call the parent class consturor and use that page tab for this home page
        super(page);
        //this.page=page;
        this.username= page.getByRole('textbox',{name:'username'});
        this.password= page.getByRole('textbox',{name:'password'});
        this.loginbutton=page.getByRole('button',{name:' Login '})
    }

    async login(user: string, pass: string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginbutton.click();
        
        //using BasePage methods
        // await this.fillmethod(this.username, user);
        // await this.fillmethod(this.password, pass);
        // await this.clickmethod(this.loginbutton);
    }
}