import { test, expect } from '@playwright/test';

test('test1',async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/");
    //await page.goto("https://demowebshop.tricentis.com/register");
    
    //1) Compare snapshot of the page

   //Approach 1(Playwright preferred this approach)
    expect(await page.screenshot()).toMatchSnapshot("homepage.png");//Here 1st it will take screenshot and then compare it if screenshot ie,homepage.png is not available 1st time it will fail and from second time it will pass



   //Appraoch 2
   //await expect(page).toHaveScreenshot(); 

    
    //2) Compare snapshot of the particular element
    const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
    expect(await logo.screenshot()).toMatchSnapshot("logo.png");

//Note:
//If we take any screenshots(Webpage or element) with any of the approach 1& 2 then use that approach fo further validation.
})