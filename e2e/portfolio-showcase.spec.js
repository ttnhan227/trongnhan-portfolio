import { expect, test } from "@playwright/test";

test.describe("Developer Portfolio Showcase & Interaction E2E Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
  });

  test("1. Hero branding, professional bio, and HUD navigation", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header.site-header")).toContainText(/Tran Trong Nhan|SWE/i);

    // Verify all 4 flagship stage tabs exist
    await expect(page.locator("#groundwork")).toBeVisible();
    await expect(page.locator("#recon-qa")).toBeVisible();
    await expect(page.locator("#tenvora")).toBeVisible();
    await expect(page.locator("#logiflow")).toBeVisible();

    // Verify navbar sticks to the top when scrolling
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(200);
    const headerBox = await page.locator("header.site-header").boundingBox();
    expect(headerBox?.y).toBe(0);
  });

  test("2. Mission Stage Selector tabs, architecture pipeline, and keyboard shortcuts", async ({ page }) => {
    await page.goto("/");

    // 1. Stage 01: Groundwork is selected by default
    await expect(page.locator("#groundwork")).toHaveClass(/is-selected/);
    await expect(page.getByText(/Celery.*Redis/i).first()).toBeVisible();
    await expect(page.getByText(/Citation verification engine/i).first()).toBeVisible();

    // 2. Click Stage 02: recon-qa tab
    await page.locator("#recon-qa").click();
    await expect(page.locator("#recon-qa")).toHaveClass(/is-selected/);
    await expect(page.getByText(/bounded worker pools/i).first()).toBeVisible();

    // 3. Test keyboard shortcut '3' to switch to Stage 03: Tenvora
    await page.keyboard.press("3");
    await expect(page.locator("#tenvora")).toHaveClass(/is-selected/);
    await expect(page.getByText(/Double-Entry Ledger|Settlement Clearing|Bank Reconciliation/i).first()).toBeVisible();

    // 4. Test keyboard shortcut '4' to switch to Stage 04: LogiFlow
    await page.keyboard.press("4");
    await expect(page.locator("#logiflow")).toHaveClass(/is-selected/);
    await expect(page.getByText(/Real-time GPS coordinate streaming/i).first()).toBeVisible();
  });

  test("3. Artifact screenshot lightbox modal and keyboard close", async ({ page }) => {
    await page.goto("/");

    // Click screenshot viewport directly
    const clickableScreen = page.locator(".clickable-screen").first();
    await expect(clickableScreen).toBeVisible();
    await clickableScreen.click();

    // Verify modal is open
    const modal = page.locator("[role='dialog']");
    await expect(modal).toBeVisible();

    // Close via Escape key
    await page.keyboard.press("Escape");
    await expect(modal).not.toBeVisible();
  });

  test("4. Published Open Source tooling (recon-qa) and one-click pip install", async ({ page }) => {
    await page.goto("/");

    const toolingSection = page.locator("#tooling, #opensource").first();
    await expect(toolingSection).toBeVisible();
    await expect(page.getByText(/pip install recon-qa/i).first()).toBeVisible();
    await expect(page.getByText(/OpenAPI Auto-Discovery|Bounded Concurrency/i).first()).toBeVisible();
  });

  test("5. Tactical loadout stack and side quest repository builds", async ({ page }) => {
    await page.goto("/");

    // Verify loadout categories
    await expect(page.locator("#loadout")).toBeVisible();
    await expect(page.getByText(/FastAPI|Spring Boot|ASP\.NET Core|React|PostgreSQL/i).first()).toBeVisible();

    // Verify side quests
    await expect(page.locator("#builds")).toBeVisible();
    await expect(page.getByText(/ShineUp|CoffeeManagementSystem|yuibot/i).first()).toBeVisible();
  });
});
