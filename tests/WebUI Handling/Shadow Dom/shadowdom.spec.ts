/*
All locators in Playwright by default work with elements in Shadow DOM. 
The exceptions are:
Locating by XPath does not pierce shadow roots.
*/

import {test,expect} from "@playwright/test";


test('shadow dom', async ({page})=>{

    await page.goto("https://books-pwakit.appspot.com/")

    await page.locator('#input').fill("Playwright automation");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);

    const booksFound=await page.locator('h2.title').all();
    console.log("Books Found:", booksFound.length)

    expect(booksFound.length).toBe(20);

})



test.only('shadow dom2', async ({page})=>{

    await page.goto("https://shop.polymer-project.org/")

    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    await page.waitForTimeout(5000);

    const productsfound=await page.locator('div.title').all();

    console.log("Number of products found:",productsfound.length);
    
 /*      // Extract and print all product titles
    console.log("\n--- All Product Titles ---");
    for (let i = 0; i < productsfound.length; i++) {
        const titleText = await productsfound[i].textContent();
        console.log(`${i + 1}. ${titleText?.trim()}`);
    } */


      // Extract and print all product titles using for...of
    console.log("\n--- All Product Titles ---");
    let index = 1;
    for (const product of productsfound) {
        const titleText = await product.textContent();
        console.log(`${index++}. ${titleText?.trim()}`);
    }
     expect(productsfound.length).toBe(16);
    
 await page.waitForTimeout(3000);

})

