import{test,expect,Locator} from '@playwright/test'

//Text input /Text box /Input Box
//test
test("Text Input Actions",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

let textBox:Locator=page.locator("input#name")
//await expect(textBox).toBeVisible()
//await expect(textBox).toBeEnabled()

let maxLenght:string | null=await textBox.getAttribute("maxlength")//Returns value of maxlength attribute of the element
expect(maxLenght).toBe('15')

await textBox.fill("Roshan")

//console.log("text content of FirstName:",await textBox.textContent())//it returns empty



let capturedText:string=await textBox.inputValue()
console.log("Input Value of FirstName:",capturedText) //it return the input value of text box
expect(capturedText).toBe("Roshan")


})

//-------------------------------------------------------------------------------------------------------------------------------------------
//Radio buttons

test("Verify Radio Buttons",async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/")

const maleRadio:Locator=page.locator('input#male')//male radio button

await expect(maleRadio).toBeVisible()
await expect(maleRadio).toBeEnabled()
 expect(await maleRadio.isChecked()).toBe(false)//It is not to be selected

 await maleRadio.check()//select Radio button 
 expect(await maleRadio.isChecked()).toBe(true)//It is to be selected
 //or alternative way
  await expect (maleRadio).toBeChecked()//most useful and preffered





})
//---------------------------------------------------------------------------------------------------------------------
//Check Boxes

test.only("Verify CheckBoxes",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

// 1. Select specific checkbox (Sunday) using getByLabel and assert

const sundayCheckbox:Locator=page.getByLabel('Sunday')
//await sundayCheckbox.check()
//await expect(sundayCheckbox).toBeChecked();

// 2. Check all checkboxes and assert each is checked
 const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const checkboxes:Locator[]=days.map(index => page.getByLabel(index));//It will return checkboxes and locator type of array
expect(checkboxes.length).toBe(7);/* 

// 3.Select all checkboxes and assert each is checked

for(const checkbox of checkboxes)
{
    await checkbox.check()
await expect(checkbox).toBeChecked();
}

// 4. Uncheck last 3 checkboxes and assert

    
    for(const checkbox of checkboxes.slice(-3))//last  3 we use slice
    {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
    }
await page.waitForTimeout(2000)

//5.    Toggle checkboxes: If checked, uncheck; if unchecked, check. Assert state flipped.

    for(const checkbox of checkboxes)
        {
        if(await checkbox.isChecked()) // true
        {
            // only if checked
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        
        }
        else{
            // only if not checked
                await checkbox.check();
                await expect(checkbox).toBeChecked();
        }
    }
          await page.waitForTimeout(2000)      */
          
          
/* // 6. Randomely select check boxes - Select checkboxes by index (1, 3, 6) and assert

    const indexes:number[]=[1,3,6];

    for(const i of indexes)
    {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();

    }
    await page.waitForTimeout(5000);
 
 */

//7. Select the check box based on the Label
const weekname:string="Friday";

for(const label of days) //check no 2
{
    if(label.toLowerCase()===weekname.toLowerCase())
    {
        const checkbox=page.getByLabel(label);
        checkbox.check();
        await expect(checkbox).toBeChecked();
    }
}
await page.waitForTimeout(5000);


})