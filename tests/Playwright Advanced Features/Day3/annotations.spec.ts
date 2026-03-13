/* annotations
-----------------
only
skip
fail
fixme
slow
*/

import { test, expect } from '@playwright/test';



//only
test('test1', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//skip
test.skip('test2', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//skip -based on the condition
test('test3', async ({ page,browserName}) => {//browser name is predefine name that comes from playwright.config.ts
  test.skip(browserName==='firefox','this test skipped if browser is firfox');
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});

//fail
test.fail('test4', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//fixme- If the test is not completed or it is partially completed,It will also skip the test
test.fixme('test5', async ({ page }) => {
  await page.goto('https://www.google.com/');
  //No assertion
});


//slow
test('test6', async ({ page }) => {
  test.slow();  // triple the default timeout ( default : 30 secs, after tripling: 90 secs)
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});
