import{test,expect,Locator} from '@playwright/test'

//test
test("Read all the data from all the table pages(pagination)",async({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
                  
let hasmorePages=true//this is used for whether the pages are present or not

while(hasmorePages) // here we used while loop because we donot know how many pages are present means the condition
{

    let rows=await page.locator('#example>tbody>tr').all()
    for(let row of rows)
    {
        console.log(await row.innerText())

    }
     await page.waitForTimeout(2000);
    //button[aria-label='Next']
    //button[aria-controls='example']:has-text("›")[Where ,> is psuedo element]
    //button[aria-controls='example']:nth-child(9)[Here index start from 1]  //the above 3 locator  is for next button

     const nextButton: Locator=page.locator("button[aria-label='Next']");
    const isDisabled=await nextButton.getAttribute('class'); // dt-paging-button disabled next //when it is disabled

 if(isDisabled?.includes('disabled'))
    {
        hasmorePages=false;
    }
    else{
        await nextButton.click()
    }

}
})

//test2
test("Filter the rows and check the rows count", async ({page})=>{
  await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    
     const dropdown: Locator= page.locator("#dt-length-0");
    await dropdown.selectOption({label: '50'});

    //Appraoch 1
    const rows=await page.locator("#example tbody tr").all();
    expect(rows.length).toBe(50); //assertion
    await page.waitForTimeout(2000);


    //Appraoch2
    const rows2= page.locator("#example tbody tr");
    await expect(rows2).toHaveCount(50);


})
//test3
test.only("Search for specific data in a table", async ({page})=>{

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    const searchbox:Locator =page.locator('#dt-search-0');
    await searchbox.fill('Yuri Berry');

       await page.waitForTimeout(5000);
    const rows=await page.locator("#example tbody tr").all();

    if(rows.length>=1)
    {
        let matchFound = false;
        for(let row of rows)
            {
                const text=await row.innerText();
                if(text.includes('Yuri Berry'))
                {
                    console.log("Record exist- found");
                    matchFound=true;
                    break;
                }

            } 
            //expect(matchFound).toBe(true);
            expect(matchFound).toBeTruthy();//truthy we are using for boolean value
    }
    else{
        console.log("No Rows found with search text")
    }
})