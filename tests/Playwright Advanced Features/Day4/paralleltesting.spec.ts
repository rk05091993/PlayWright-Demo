import { test,expect } from '@playwright/test';

//test.describe.configure({mode:'serial'}) // to run the indivisual test in serial mode
//test.describe.configure({mode:'parallel'}) // to run the indivisual test in parallel mode

test.describe('group1', () => {

    test('Test1', async ({ page }) => {
        console.log(" this is Test1 ......")
     });

    test('Test2', async ({ page }) => {
        console.log(" this is Test2 ......")
     });

    test('Test3', async ({ page }) => {
        console.log(" this is Test3 ......")
    });

    test('Test4', async ({ page }) => {
        console.log(" this is Test4 ......")
    });


    test('Test5', async ({ page }) => {
        console.log(" this is Test5 ......")
    });


});




