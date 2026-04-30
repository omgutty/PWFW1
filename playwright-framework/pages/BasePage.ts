import{ Locator,Page} from '@playwright/test'

//BasePage = generic + reusable + stateless
export class BasePage{
    readonly page:Page;

    constructor (page:Page){
        this.page=page;
    }

    //common Element action methods
    async click(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
}
    async fill(locator: Locator, value: string): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
}
    async type(locator:Locator,value:string){
        await locator.type(value);
    }
    async gettext(locator:Locator):Promise<string|null>{
        return await locator.textContent()
    }

    //Wait Utilities

    async waitForVisible(locator: Locator) {
         await locator.waitFor({ state: 'visible' });
    }
    async waitForHidden(locator: Locator) {
        await locator.waitFor({ state: 'hidden' });
    }
    async waitForURL(url: string | RegExp) {
        await this.page.waitForURL(url);
    }

    //Navigation Helpers
    async navigateTo(path: string) {
        await this.page.goto(path);
    }
    async getTitle() {
        return await this.page.title();
    }
    
    //Dropdown / Select Helpers
    async selectByValue(locator: Locator, value: string) {
        await locator.selectOption(value);
    }

    async selectByLabel(locator: Locator, label: string) {
        await locator.selectOption({ label });
    }

    //Keyboard & Mouse Actions
    async pressKey(key: string) {
        await this.page.keyboard.press(key);
    }
    async hover(locator: Locator) {
        await locator.hover();
    }
    async rightClick(locator: Locator) {
        await locator.click({ button: 'right' });
    }

    //Frame / iFrame Handling
    getFrame(frameLocator: string) {
        return this.page.frameLocator(frameLocator);
    }

    //Screenshot Helper
    async takeScreenshot(name: string) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

    //Generic Retry / Safe Action
    async safeClick(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }
    

}