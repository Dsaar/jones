import { chromium } from "playwright";

(async () => {
	const browser = await chromium.launch({
		headless: false,
	});

	const page = await browser.newPage();

	await page.goto("https://test.netlify.app/");
	await page.waitForLoadState("networkidle");

	await page.getByLabel("Name").fill("John Doe");
	await page.getByLabel("Email").fill("john.doe@example.com");
	await page.getByLabel("Phone").fill("5551234567");
	await page.getByLabel("Company").fill("Acme Inc");
	await page.getByLabel("Website").fill("https://acme.com");

	await page.getByLabel("Number of Employees").selectOption("51-500");

	await page.screenshot({
		path: "./screenshots/before-submit.png",
		fullPage: true,
	});

	await page.getByRole("button", {
		name: "Request a call back",
	}).click();

	await page.waitForURL(/thank/i);

	console.log("Reached thank you page");

	await browser.close();
})();