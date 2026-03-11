import{test,expect,Locator} from '@playwright/test'


//test
test("Verify Chrome CPU load in Dynamic WebTable",async({page})=>{

    await page.goto("https://practice.expandtesting.com/dynamic-table")

    //Capture entire table

    const table:Locator=page.locator('table.table>tbody')
    await expect(table).toBeVisible();

//Select all the rows then Find no of rows
const rows:Locator[]=await table.locator('tr').all()
console.log("No of rows in a table:",rows.length)
expect(rows).toHaveLength(4)



    //Step 1: For Chrome process get value of CPU load.
    //read each row and check chrome is present

    let cpuLoad=''//global variable
 for(const row of rows)
 {
    const processName:string= await row.locator('td').nth(0).innerText()
    if(processName==='Chrome')
    {
        cpuLoad=await row.locator('td:has-text("%")').innerText() //css synatx
        console.log("CPU Load of Chrome:", cpuLoad);//3% 
        break;
        //alternate ways
        //cpuLoad=await row.locator('td',{hasText:'%'}).innerText()//playwright syntax
    }
 }



//Validation
//Step 2: Compare it with value in the yellow label.
//Capture the yellow percentage

let yellowBoxText:string=await page.locator('#chrome-cpu').innerText()
 console.log("Chrome CPU load from yellow Box",yellowBoxText );

 if(yellowBoxText.includes(cpuLoad))
 {
    console.log("CPU load of chrome is equal........")
 }
 else{
        console.log("CPU load of chrome is not equal........")
 }
 expect(yellowBoxText).toContain(cpuLoad)


 await page.waitForTimeout(5000)
})