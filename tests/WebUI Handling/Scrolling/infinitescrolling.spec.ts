import { test, expect } from '@playwright/test';

/* 
Logic to implemenet
--------------------
1) First we have started the scrolling
2) Wait for Sometime ,ie 2ms
3) Capture the scroll height
-If both are equal break the loop or else if both are not equal then assign the current height value  to previous height ,then loop exit
4)We have reached the final page

 */

test('Infinite scroll on booksbykilo.in', async ({ page }) => {
  await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

  test.slow(); // Set timeout for a single test Easy way to triple the default timeout i.e. 30 secs(30000  ms)
  //test.setTimeout(80000); // 8 secs //Set timeout for a single test

  let previousHeight = 0;

  while (true) {
    // Scroll to the bottom
    //--------------------------
  /*   await page.evaluate(() => { //it is just like javascript executor in selenium / page.evaluate is in javascript
      window.scrollTo(0, document.body.scrollHeight); //It will scroll the page
    });
     */
  
   
   
    //OR
    await page.keyboard.press('End'); // This will also scroll to the bottom

    // Wait for new content to load
    await page.waitForTimeout(2000);
  
    // Get current scroll height
    const currentHeight = await page.evaluate(() => {
      return document.body.scrollHeight;//it will return height of the page 
    });

    console.log("==============================")
    console.log(`Previous height: ${previousHeight}`);
    console.log(`Current height: ${currentHeight}`);

    // Check if end of page is reached
    if (currentHeight === previousHeight) {
      break;
    }

    previousHeight = currentHeight;
  }

  console.log('Reached end of page.'); 
});