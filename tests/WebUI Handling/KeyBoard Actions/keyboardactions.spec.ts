/*
Keyboard methods:
insertText
down
press
type--> It is just same as insert Text
up

await page.keyboard
--> Press is combination of down & Up
*/

import { test, expect } from '@playwright/test';

test('keyboard actions', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");


//Approach-1
const input1=page.locator('#input1');

//1) focus on input1
await input1.focus(); 
//or
//await input1.click();


//2) Provide the text input1
await page.keyboard.insertText("welcome");

//3) Ctrl + A - select the text from input1

//Note: For single Alphabets use press and for other use up for press and down for release
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');

//4) Ctrl +C - copy the text from input 1
await page.keyboard.down('Control');
await page.keyboard.press('C');
await page.keyboard.up('Control');


//5 Press TAB - 2 times
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');


//6) Ctrl + V  - past the text in input2
await page.keyboard.down('Control');
await page.keyboard.press('V');
await page.keyboard.up('Control');


//7) Press TAB - 2 times
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');


//8) Ctrl+V - past the text in input 3
await page.keyboard.down('Control');
await page.keyboard.press('V');
await page.keyboard.up('Control');

await page.waitForTimeout(5000);

})


//--------------------------------------------------------------------------------------------------------------------------------
//Approach-2

test.only('keyboard actions - simple way', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const input1=page.locator('#input1');

//1) focus on input1
await input1.focus(); //await input1.click();

//2) provide the text input1
await page.keyboard.insertText("welcome");

//3) Ctrl + A - select the text from input1
await page.keyboard.press('Control+A');

//4) Ctrl +C - copy the text from input 1
await page.keyboard.press('Control+C');

//5 Press TAB - 2 times
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');


//6) Ctrl + V  - past the text in input2
await page.keyboard.press('Control+V');


//7) Press TAB - 2 times
await page.keyboard.press('Tab');
await page.keyboard.press('Tab');


//8) Ctrl+V - past the text in input 3
await page.keyboard.press('Control+V');

await page.waitForTimeout(5000);

})