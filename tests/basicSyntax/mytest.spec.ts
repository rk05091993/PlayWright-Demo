import{test,expect} from "@playwright/test"



//test1
//fixture= a global variable ->page,browser
test("Verify page title",async({ page })=>{

await page.goto("https://naveenautomationlabs.com/opencart/")//launch the browser and open the webpage

let title:string=await page.title();//capture the title
console.log("Title:",title) //print the title

await expect(page).toHaveTitle("Your Store")//validate the title of the page

})

//test2
//fixture= a global variable ->page,browser
test("Verify url of the page",async({ page })=>{

await page.goto("https://naveenautomationlabs.com/opencart/")//launch the browser and open the webpage

let url:string=await page.url();//capture the url
console.log("Title:",url) //print the url

await expect(page).toHaveURL("https://naveenautomationlabs.com/opencart/")//validate the url of the page

})