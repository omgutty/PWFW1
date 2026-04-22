import{ Locator,Page} from '@playwright/test'

export class BasePage{
    readonly page:Page;

    constructor (page:Page){
        this.page=page;
    }

    async clickmethod(locator:Locator):Promise<void>{
        await locator.click()
    }

    async gettextmethod(locator:Locator):Promise<string|null>{
        return await locator.textContent()
    }

    async gettitlemethod(locator:Locator):Promise<string|null>{
        return this.page.title();
    }

    async fillmethod(locator:Locator,value:string):Promise<void>{
        await locator.fill(value);
    }

}