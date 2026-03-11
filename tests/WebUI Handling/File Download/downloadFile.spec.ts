import { test, expect } from '@playwright/test';
import fs from 'fs';//file system

test('Download Text file and verify it exists', async ({ page}) => {
  // Navigate to the download page
  await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

  //Text file
  await page.locator('#inputText').fill("welcome"); // Filling text in the input box
  await page.locator('#generateTxt').click();  // Clicking on the 'Generate and Download text file' button
   
  // Start waiting for the download before clicking
  const [ download ] = await Promise.all([
    page.waitForEvent('download'), // Wait for download to start
    page.locator('#txtDownloadLink').click()  // Clicking on the 'Download text file' link
  ]);

  // Save the file to a custom path
  const downloadPath = 'Downloads/testfile.txt';
  await download.saveAs(downloadPath);

  // Check if file exists using Node's fs module
  const fileExists = fs.existsSync(downloadPath); //checks if the file exists.
  expect(fileExists).toBeTruthy();

  // Clean up downloaded files
  if (fileExists) {
    fs.unlinkSync(downloadPath);//it will delete the file
  }
    
})


test.only('Download Pdf file and verify it exists', async ({ page}) => {
  // Navigate to the download page
  await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

  //Text file
  await page.locator('#inputText').fill("welcome"); // Filling text in the input box
  await page.locator('#generatePdf').click();  // Clicking on the 'Generate and Download pdf file' button
   
  // Start waiting for the download before clicking
  const [ download ] = await Promise.all([
    page.waitForEvent('download'), // Wait for download to start
    page.locator('#pdfDownloadLink').click()  // Clicking on the 'Download pdf file' link
  ]);

  // Save the file to a custom path
  const downloadPath = 'Downloads/testfile.pdf';
  await download.saveAs(downloadPath);

  // Check if file exists using Node's fs module
  const fileExists = fs.existsSync(downloadPath); //checks if the file exists.
  expect(fileExists).toBeTruthy();

  // Clean up downloaded files
  if (fileExists) {
    fs.unlinkSync(downloadPath);
  }
   
});

