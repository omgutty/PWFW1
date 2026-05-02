/**
 What NOT to put in utils
❌ Playwright locators
❌ Page logic
❌ Assertions

Keep utils pure + stateless
 */

//import { Locator,Page  }  from "@playwright/test";




//Random Data Generators (critical for testing)
export function randomString(length = 6): string {
  return Math.random().toString(36).substring(2, 2 + length);
}

export function generateRandomEmail(): string {
  return `test_${randomString()}@mail.com`;
}
/**
 * 
 * export function generateRandomEmail() {
  return `test${Date.now()}@mail.com`;
}
 */
export function printmessage(message:string):void{
  console.log(`Message:: ${message}`);
}

//Date / Time Utility (very useful for logs & data)
export function getTimestamp(): string {
  return new Date().toISOString();
}



