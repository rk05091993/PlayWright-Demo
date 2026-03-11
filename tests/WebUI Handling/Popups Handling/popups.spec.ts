import {test, expect, Page} from "@playwright/test";

test("handle popups", async({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")

    // ✅ No 'await' on the click inside Promise.all
    await Promise.all([
        page.waitForEvent('popup'),
        page.locator("#PopUp").click()
    ]);

    // Give popups time to fully load
    await page.waitForTimeout(2000);

    const allPopupWindows = context.pages();
    console.log("Number of pages/windows:", allPopupWindows.length); // 3

    console.log(allPopupWindows[0].url()); // main page
    console.log(allPopupWindows[1].url()); // https://www.selenium.dev/
    console.log(allPopupWindows[2].url()); // https://playwright.dev/

    for (const pw of allPopupWindows) {
        const title = await pw.title();
        if (title.includes('Playwright')) {
            await pw.locator('.getStarted_Sjon').click();
            await pw.waitForTimeout(5000); // ✅ use pw, not page
            await pw.close();
        }
    }

    await page.waitForTimeout(5000);
})