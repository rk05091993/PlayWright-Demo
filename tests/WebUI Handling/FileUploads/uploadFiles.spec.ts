import { test, expect } from '@playwright/test';


  test('Single file upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').setInputFiles('uploads/Roshan_Kumar_Resume.pdf');
       await page.locator('button:has-text("Upload Single File")').click();

    const msg = await page.locator('#singleFileStatus').textContent();
    expect(msg).toContain('Roshan_Kumar_Resume.pdf');

    console.log('Single file upload is successful...');
    await page.waitForTimeout(5000);
    
  });

  test.only('Multiple file upload', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/');

     await page.locator('#multipleFilesInput').setInputFiles(['uploads/Roshan_Kumar_Resume_v3.docx', 'uploads/Roshan_Kumar_Resume_v2.docx']);

    await page.locator('button:has-text("Upload Multiple Files")').click();

    const msg = await page.locator('#multipleFilesStatus').textContent();
    expect(msg).toContain('Roshan_Kumar_Resume_v2.docx');
    expect(msg).toContain('Roshan_Kumar_Resume_v3.docx');

    console.log(' Multiple files uploaded successfully...');
    console.log(msg)
    await page.waitForTimeout(5000);

  });

