import { test, expect } from '@playwright/test';

test('Autowaiting and forcing', async ({ page }) => {
 
  test.setTimeout(50000); // 50 secs
  //test.slow(); // 90 secs  ( Default is 30 secs) It will make 3X

//Note: The default time of assertion is 5 sec and for Action default time is 30 sec
  await page.goto('https://demowebshop.tricentis.com/');

  //Assertions - Auto wait works
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000}); 
  await expect(page.locator('text=Welcome to our store')).toBeVisible({timeout:10000}); 

  //Actions - Auto wait works
  await page.locator('#small-searchterms').fill("Laptop",{force:true}); //search box - Force action( it will not do actionalibity checks)
  await page.locator('.button-1.search-box-button').click({force:true}); // clicking on search button -Force action

});