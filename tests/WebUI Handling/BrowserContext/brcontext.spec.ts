import {test,expect,Page,chromium,firefox, webkit} from "@playwright/test";

// Browser ---> Context ----> pages //hierarchy

//Browser ---> chromium(Chrome and Edge), firefox, webkit(Safari mac)

//Contexts ---> we can have multiple contexts for multiple users/apps for the same browser 
               // provide a way to operate multiple independent browser sessions.
//page ---> New Tab, Window, Popup


test("Browser context demo", async ()=>{

    
    const browser=await chromium.launch();  // Create browser
    const context=await browser.newContext();  // create context
   
    // Creating 2 pages
    const page1=await context.newPage();  
    const page2=await context.newPage();
    const page3=await context.newPage();
    console.log("No of pages created:",context.pages().length); //3

    await page1.goto("https://playwright.dev/");
    await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")

    await page2.goto("https://www.selenium.dev/");
    await expect(page2).toHaveTitle("Selenium");

     await page3.goto("https://www.irctc.co.in/nget/train-search");
    await expect(page3).toHaveTitle("IRCTC – Official Indian Railway Catering & Tourism Corporation Portal");

    //await page1.waitForTimeout(5000);
    //await page2.waitForTimeout(5000);
    

})