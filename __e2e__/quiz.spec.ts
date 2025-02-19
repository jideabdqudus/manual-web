import { test, expect } from "@playwright/test";

test.describe("Quiz Application", () => {
  test("should load the quiz and display the first question", async ({
    page,
  }) => {
    // Navigate to the application
    await page.goto("http://localhost:3005/");

    // Click the button to start the quiz
    await page.getByRole("button", { name: "TAKE THE QUIZ" }).click();

    const check1 = page.getByRole("heading", {
      name: "Which image best matches your",
    });
    await expect(check1).toBeVisible();

    const check2 = page.getByRole("button", { name: "Temples Temples" });
    await expect(check2).toBeVisible();
  });

  test("should be able to go back and forth to see selected question", async ({
    page,
  }) => {
    await page.goto("http://localhost:3005/");
    await page.getByRole("button", { name: "TAKE THE QUIZ" }).click();
    // Select the "Temples Temples" option
    await page.getByRole("button", { name: "Temples Temples" }).click();
    // Go 1 step forward, then 2 steps back to verify selected option
    await page.locator("label").filter({ hasText: "No" }).click();
    await page.getByRole("button", { name: "Back" }).click();
    await page.getByRole("button", { name: "Back" }).click();

    const check1 = page.getByRole("button", {
      name: "Temples Temples",
    });
    await expect(check1).toBeVisible();

    // Check if a specific class is present in the "Temples Temples" button
    const hasClass = await check1.evaluate((button) => {
      return button.classList.contains("!border-primary-hex");
    });

    expect(hasClass).toBe(true);
  });
});
