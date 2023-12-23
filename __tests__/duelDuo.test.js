const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test('clicked "draw" button displays the div with id="choices"', async () => {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id("draw")).click();

    const choicesDivDisplayed = await driver
      .findElement(By.id("choices"))
      .isDisplayed();

    expect(choicesDivDisplayed).toBe(true);
  });

  test('clicked "Add to Duo" button displays the div witrh id="player-duo" ', async () => {
    await driver.get("http://localhost:3000");
    await driver.findElement(By.id("draw")).click();

    await driver.findElement(By.className("bot-btn")).click();

    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuoDiv), 5000);

    const isPlayerDuoDisplayed = await playerDuoDiv.isDisplayed();
    expect(isPlayerDuoDisplayed).toBe(true);
  });
});
