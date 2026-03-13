import {test,expect} from '@playwright/test'


test('screenshots demo',async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/")

const timestamp=Date.now();//----------------------1

//page screenshot
//await page.screenshot({path:'screenshots/homepage.png'})
//await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'})//--------------------1

//full page screenshot
//await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png', fullPage:true})

//element screenshot
//const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
//logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})
//or
//await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})


//featured products
 await page.locator('.product-grid.home-page-product-grid').screenshot({path:'screenshots/'+'featuredproducts'+timestamp+'.png'})

})

test.only('screenshots from config',async ({page})=>{
 await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123X'); //password incorrect
  await page.getByRole('button', { name: 'Log in' }).click();
   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');  
  
})