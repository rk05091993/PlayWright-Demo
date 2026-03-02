import {test,expect,Locator } from "@playwright/test"

test("Autosuggest dropdown", async({page})=>{

    await page.goto("https://www.flipkart.com/");

    await page.locator('input.nw1UBF.v1zwn25:visible').fill("smart");  // Search text
    await page.waitForTimeout(5000);

    // Get all the suggested options --> Ctrl+Shift+P  on DOM -->emulate focused page
    const options:Locator=page.locator("ul>li");

    //Count how many options are there(Counts are dynamic so keep changing so we donot use assertion)
    const count=await options.count();
    console.log("Number of suggested options:", count);  //8

    // printing all the suggested options in the console
//try to use alltextcontent() also
    console.log("5 th option:", await options.nth(5).innerText());//capture specfic option

    console.log("Printing all the auto suggestions.....")
    for(let i=0;i<count;i++)
    {
        console.log(await options.nth(i).innerText());
        //console.log(await options.nth(i).textContent());
        //here we can use alltextcontent() also
    }
    

    //select/click on the smartphone option

    for(let i=0;i<count;i++)
        {
           const text=await options.nth(i).innerText();
           if(text==='smartphone')
           {
            options.nth(i).click();
            break;
           }
           //we can use alltextcontent() also
        }
        

 


await page.waitForTimeout(3000);




})