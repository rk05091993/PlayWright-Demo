/*
CSS (Cascading Style Sheets) 

html + js+ css

2 types of css locators:

1) absolute CSS locator
2) relative CSS locators


tag with id         tag#id    or      #id
tag with class      tag.class   or    .class
tag with any other attribute  tag[attribute=value]  or    [attribute=value]
tag with class and attribute  tag.class[attribute=value]  or  .class[attribute=value]
//tag is optional

page.locator(css/xpath)--> syntax

*/
import{test,expect,Locator} from '@playwright/test'


test("Verify CSS Locator",async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/")


//1) tag#id
//const searchbox:Locator= page.locator("#small-searchterms")//tag#id
//await searchbox.fill("Roshan")
//await expect(page.locator("#small-searchterms")).toBeVisible() //Validation
//await page.locator("#small-searchterms").fill('Iphone')




//2)  tag.class
//await page.locator(".search-box-text").fill("Iphone")
//await page.locator("input.search-box-text").fill("Iphone")


 //3) tag[attribute=value]
//await page.locator("[name=q]").fill("Iphone")
//await page.locator("input[name=q]").fill("Iphone")


 //4)tag.class[attribute=value]
    await page.locator("input.search-box-text[value='Search store']").fill("T-Shirts");
    //await page.locator(".search-box-text[value='Search store']").fill("T-Shirts");
    
await page.waitForTimeout(3000);








})





