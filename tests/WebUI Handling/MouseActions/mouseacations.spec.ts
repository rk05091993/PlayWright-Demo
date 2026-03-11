import { test, expect } from '@playwright/test';

test('Mouse hover',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const pointme=page.locator('.dropbtn');
    await pointme.hover();//hover() 

    const laptops=page.locator('.dropdown-content a:nth-child(2)');
    await laptops.hover();

    await page.waitForTimeout(5000);

})


test('Right click',async ({page})=>{

    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
          //press f12 to open dom if not doing manually
    const button=page.locator('span.context-menu-one');
    await button.click({button:'right'});  // this will perform the right click action
  await page.waitForTimeout(5000);

})

test('Double click',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const btncopy=page.locator("button[ondblclick='myFunction1()']");
    await btncopy.dblclick();  // performs the double click action

    const field2=page.locator('#field2');
    expect(field2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);

})


test.only('Drag and drop',async ({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette');

    const rome=page.locator("#box6");//source element   
    const italy=page.locator("#box106");//target element

    //Appraoch 1:  mouse hover and drag manually (indirect approach)
    //Note: Sometime it will work and sometime it will not work

    await rome.hover();
    await page.mouse.down();
    await italy.hover();
    await page.mouse.up();

    //Appraoch 2:  mouse hover and drag manually (direct approach)
    //Note: Mostly this is preffered
    const washington=page.locator('#box3');//source element
    const usa=page.locator('#box103'); //target element

    await washington.dragTo(usa); // This wil perform drag and drop action

    await page.waitForTimeout(5000);

}) 