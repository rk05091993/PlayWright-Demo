import { test } from '@playwright/test';

test('Check Broken Links', async ({ page, request }) => {

  // Counters
  let validCount = 0;
  let brokenCount = 0;

  // 1️⃣ Open website
  await page.goto('https://testautomationpractice.blogspot.com/');

  // 2️⃣ Get all links
  const links = await page.locator('a').all();
  console.log('Total links:', links.length);

  // 3️⃣ Loop through links
  for (const link of links) {

    // 4️⃣ Get href
    const href = await link.getAttribute('href');

    // 5️⃣ Skip invalid links
    if (!href || href.startsWith('#') || href.startsWith('javascript')) {
      continue;
    }

    // 6️⃣ Convert relative URL → full URL
    let url = href;
    if (!href.startsWith('http')) {
      const base = new URL(page.url()).origin;
      url = base + href;
    }

    try {
      // 7️⃣ Send API request
      const response = await request.get(url, { timeout: 10000 });

      // 8️⃣ Get status code
      const status = response.status();

      // 9️⃣ Check broken link
      if (status >= 400) {
        brokenCount++;
        console.log(`❌ Broken: ${url} | ${status}`);
      } else {
        validCount++;
        console.log(`✅ Valid: ${url} | ${status}`);
      }

    } catch {
      brokenCount++;
      console.log(`⚠️ Error: ${url}`);
    }
  }

  // 🔟 Final Count
  console.log("------------- RESULT -------------");
  console.log("Valid Links:", validCount);
  console.log("Broken Links:", brokenCount);
});