import { test, expect } from '@playwright/test';


/* 
Logic to implemenet
----------------------
1)At initial  stage we will start book found to false (let book is not found)
2)Then grab all title of the books
3) Then  start the scrolling
2) Wait for Sometime ,ie 2ms
3) Capture the scroll height
-If both are equal break the loop or else if both are not equal then assign the current height value  to previous height ,then loop exit
4)We have reached the final page
5) Suppose if the book is nit found on the page then we write one condition book is not found as explained in below code.

 */
test('Find A Book in the page', async ({ page }) => {
  await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');

  test.slow(); // Set timeout for a single test Easy way to triple the default timeout i.e. 30 secs(30000  ms)
  //test.setTimeout(80000); // 8 secs //Set timeout for a single test

  let bookFound =false;  //At initial we assume book is not found yhat is why we put false
  let previousHeight = 0;

  while (true) {
    
     // Get all book titles currently loaded on the page
    const titles = await page.locator('#productsDiv h3').allTextContents(); //capture all books name  titles

    // Check if the target book is in the list
    if (titles.includes('The Blue Eye ')) {
      console.log('Book Found!');
      bookFound = true;
      expect(bookFound).toBeTruthy();
      break;
    }
    
    // Scroll to the bottom
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // Wait for new content to load
    await page.waitForTimeout(2000);
  
    // Get current scroll height
    const currentHeight = await page.evaluate(() => {
      return document.body.scrollHeight;
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
  
  console.log('*********  Reached end of page  ********');

  if (!bookFound) {//if this will be true then only it will be executed as by default its is false
    console.log('Book Not Found!');
  }


});