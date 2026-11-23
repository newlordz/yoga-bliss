const { chromium } = require("playwright");

async function runPlaytest() {
  console.log("=== STARTING RIGOROUS YOGA BLISS PLAYTEST ===");
  const browser = await chromium.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("pageerror", (err) => {
    pageErrors.push(err.message);
  });

  try {
    // 1. Visit Home Page
    console.log("\n[TEST 1] Visiting Home Page: http://localhost:3000");
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    const title = await page.title();
    console.log("  ✓ Title:", title);

    // Check specimen preview buttons
    console.log("  Testing pose specimen selector...");
    const crowButton = page.locator('button:has-text("Crow (Pro)")');
    await crowButton.click();
    await page.waitForTimeout(300);
    const crowHeading = await page.locator("h2.font-serif").first().textContent();
    console.log("  ✓ Specimen switched to:", crowHeading.trim());

    // 2. Open Start Game Modal
    console.log("\n[TEST 2] Testing 'Start Game' Modal...");
    const startGameBtn = page.locator('button:has-text("Start Game")');
    await startGameBtn.click();
    await page.waitForTimeout(300);

    const modalTitle = page.locator("#mode-modal-title");
    const isModalVisible = await modalTitle.isVisible();
    console.log("  ✓ Modal opened, title visible:", isModalVisible);

    // 3. Select Sanskrit Recall Drill
    console.log("\n[TEST 3] Entering Sanskrit Recall Drill...");
    const sanskritModeLink = page.locator('a:has-text("Sanskrit Recall Drill")');
    await sanskritModeLink.click();
    await page.waitForURL("**/play?prompt=sanskrit", { timeout: 5000 });
    console.log("  ✓ Navigated to URL:", page.url());

    // 4. Verify Sanskrit Drill Setup
    await page.waitForSelector("div[role='group'][aria-label='Pose answer choices']", { timeout: 5000 });
    const masthead = await page.locator("div.border-l-4 p").first().textContent();
    console.log("  ✓ Masthead:", masthead.trim());

    const questionTitle = await page.locator("h2.text-xl").textContent();
    console.log("  ✓ Question text:", questionTitle.trim());

    if (!questionTitle.includes("Sanskrit")) {
      throw new Error(`Expected question to mention Sanskrit, got: "${questionTitle}"`);
    }

    // Check image element
    const imgLocator = page.locator("main img[alt]").first();
    const isImgVisible = await imgLocator.isVisible();
    const imgSrc = await imgLocator.getAttribute("src");
    console.log("  ✓ Pose image rendered:", isImgVisible, imgSrc);

    // 5. Play all 10 questions in Sanskrit Mode with smart bot matching
    console.log("\n[TEST 4] Playing all 10 Sanskrit Questions (Smart Playbot)...");
    for (let q = 1; q <= 10; q++) {
      const choices = page.locator("div[role='group'] button");
      const choiceCount = await choices.count();
      if (choiceCount !== 4) {
        throw new Error(`Expected 4 choices, found ${choiceCount}`);
      }

      // Read pose image alt to identify target pose
      const imgAlt = (await page.locator("main img[alt]").first().getAttribute("alt")) || "";
      
      // Find the choice button matching the posture
      let clicked = false;
      for (let i = 0; i < choiceCount; i++) {
        const choiceText = (await choices.nth(i).innerText()) || "";
        // Clean up text
        const cleanChoice = choiceText.replace(/\[\d\]/g, "").trim().toLowerCase();
        // Check if any word is in alt
        if (cleanChoice.split(" ").some(word => word.length > 4 && imgAlt.toLowerCase().includes(word))) {
          await choices.nth(i).click();
          clicked = true;
          break;
        }
      }
      if (!clicked) {
        // Fallback to first choice
        await choices.first().click();
      }

      // Check feedback
      const feedbackBanner = page.locator("div[aria-live='polite'] div.p-4");
      await feedbackBanner.waitFor({ state: "visible", timeout: 2000 });
      const feedbackText = await feedbackBanner.innerText();
      console.log(`  --> Question ${q}/10 Result: ${feedbackText.split("\n")[0]}`);

      // Click Continue via Enter or button
      if (q % 2 === 0) {
        await page.keyboard.press("Enter");
      } else {
        const continueBtn = page.locator('button:has-text("Continue")');
        await continueBtn.click();
      }

      await page.waitForTimeout(200);
    }

    // 6. Verify Results Screen
    console.log("\n[TEST 5] Verifying Results Screen...");
    const scorecardHeading = page.locator("h1.font-serif");
    await scorecardHeading.waitFor({ state: "visible", timeout: 3000 });
    const headingText = await scorecardHeading.textContent();
    console.log("  ✓ Results Heading:", headingText.trim());

    const accuracyText = await page.locator("div.grid-cols-3 p.font-serif").first().textContent();
    const pointsText = await page.locator("div.grid-cols-3 p.font-serif").nth(1).textContent();
    const streakText = await page.locator("div.grid-cols-3 p.font-serif").nth(2).textContent();
    console.log(`  ✓ Performance Ledger: Accuracy: ${accuracyText.trim()} | Points: ${pointsText.trim()} | Peak Streak: ${streakText.trim()}`);

    // Check itemized review table
    const reviewItems = page.locator("div.divide-y > div");
    const reviewCount = await reviewItems.count();
    console.log("  ✓ Itemized review postures listed:", reviewCount);
    if (reviewCount !== 10) {
      throw new Error(`Expected 10 reviewed postures, found: ${reviewCount}`);
    }

    // 7. Test English Recall Drill
    console.log("\n[TEST 6] Testing English Recall Drill (?prompt=english)...");
    await page.goto("http://localhost:3000/play?prompt=english", { waitUntil: "networkidle" });
    await page.waitForSelector("div[role='group'][aria-label='Pose answer choices']", { timeout: 5000 });

    const engMasthead = await page.locator("div.border-l-4 p").first().textContent();
    console.log("  ✓ Masthead:", engMasthead.trim());

    const engQuestionTitle = await page.locator("h2.text-xl").textContent();
    console.log("  ✓ Question text:", engQuestionTitle.trim());

    if (!engQuestionTitle.includes("English")) {
      throw new Error(`Expected English question, got: "${engQuestionTitle}"`);
    }

    // Play 3 questions in English mode
    for (let q = 1; q <= 3; q++) {
      const choices = page.locator("div[role='group'] button");
      await choices.nth(0).click();
      await page.waitForTimeout(150);
      await page.keyboard.press("Space");
      await page.waitForTimeout(150);
    }
    console.log("  ✓ Played 3 English questions successfully.");

    // 8. Test Adaptive Practice Mode
    console.log("\n[TEST 7] Testing Adaptive Practice Mode (?mode=adaptive)...");
    await page.goto("http://localhost:3000/play?mode=adaptive", { waitUntil: "networkidle" });
    await page.waitForSelector("div[role='group'][aria-label='Pose answer choices']", { timeout: 5000 });
    console.log("  ✓ Adaptive mode loaded and playable.");

    // 9. Verify Home Page Stats update
    console.log("\n[TEST 8] Verifying Home Page Progress Storage & Reset...");
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    
    // Check Lifetime XP card
    const xpText = await page.locator("div:has-text('Lifetime XP')").last().textContent();
    console.log("  ✓ Home stats displayed:", xpText.replace(/\s+/g, " ").trim().slice(0, 80));

    // Check Reset Local Storage Modal
    const resetTrigger = page.locator('button:has-text("Reset Progress")');
    if (await resetTrigger.isVisible()) {
      await resetTrigger.click();
      await page.waitForTimeout(200);
      const confirmDialog = page.locator('div[role="dialog"]:has-text("Clear Local Storage?")');
      console.log("  ✓ Reset dialog opened:", await confirmDialog.isVisible());
      // Click Cancel
      await page.locator('button:has-text("Cancel")').click();
      await page.waitForTimeout(200);
      console.log("  ✓ Reset dialog dismissed safely.");
    }

    // 10. Check for any console or page errors
    console.log("\n=== CONSOLE & ERROR CHECK ===");
    console.log("Console Errors detected:", consoleErrors.length);
    if (consoleErrors.length > 0) {
      consoleErrors.forEach((e) => console.log("  [CONSOLE ERROR]", e));
    }
    console.log("Page Errors detected:", pageErrors.length);
    if (pageErrors.length > 0) {
      pageErrors.forEach((e) => console.log("  [PAGE ERROR]", e));
    }

    if (consoleErrors.length === 0 && pageErrors.length === 0) {
      console.log("\n🎉 ALL CHECKS PASSED WITH ZERO ERRORS!");
    } else {
      console.log("\n⚠️ ERRORS FOUND DURING TEST RUN");
    }
  } catch (err) {
    console.error("Test execution failed:", err);
  } finally {
    await browser.close();
  }
}

runPlaytest();
