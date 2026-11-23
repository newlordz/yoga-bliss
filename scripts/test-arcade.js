const { chromium } = require("playwright");

async function testArcade() {
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));

  await page.goto("http://localhost:3000/game", { waitUntil: "networkidle" });
  console.log("Arcade Page Loaded");
  console.log("Heading:", (await page.locator("h1").textContent()).trim());

  // Click Sanskrit Recall Drill
  await page.locator('button:has-text("Sanskrit Recall Drill")').click();
  await page.waitForTimeout(300);
  console.log("In-Game Question:", (await page.locator("h2").textContent()).trim());

  // Answer question 1
  await page.locator('button:has-text("[1]")').click();
  await page.waitForTimeout(200);
  console.log("Feedback visible:", await page.locator('button:has-text("Next")').isVisible());

  // Press next
  await page.keyboard.press("Space");
  await page.waitForTimeout(200);
  console.log("Question 2 visible:", await page.locator('span:has-text("Question 2")').isVisible());

  // Test Quit to Menu
  await page.locator('button:has-text("Quit to Menu")').click();
  await page.waitForTimeout(200);
  console.log("Returned to Menu:", await page.locator("h1").isVisible());

  // Test Trophies view
  await page.locator('button:has-text("Trophies")').click();
  await page.waitForTimeout(200);
  console.log("Trophies Room Loaded:", await page.locator('span:has-text("Trophy Room")').isVisible());

  console.log("Total Console Errors:", errors.length);
  await browser.close();
}

testArcade();
