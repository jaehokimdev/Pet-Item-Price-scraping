const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const puppeteer = require("puppeteer");
const port = 8001;

app.use(cors());
app.use(express.json());

const getPetSmart = async (keyword) => {
  try {
    return await axios.get(
      "https://www.petsmart.ca/search/?q=" +
        encodeURI(keyword) +
        "&ps=undefined&fmethod=Search"
    );
  } catch (e) {
    console.error(e);
  }
};

const parsingPetSmart = async (keyword) => {
  const html = await getPetSmart(keyword);
  const $ = cheerio.load(html.data);
  const $itemList = $(".name-link");
  let items = [];
  $itemList.each((idx, node) => {
    items.push({
      title: $(node).find(".product-name > h3").text(),
      price: $(node)
        .find(".price-regular")
        .text()
        .replaceAll("\n", "")
        .replaceAll("Old Price", ""),
      image: $(node).find(".product-image > img").attr("src"),
      address: "https://www.petsmart.ca" + $(node).attr("href"),
    });
  });
  return items;
};

const getPetValue = async (keyword) => {
  let items = [];
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      ignoreDefaultArgs: ["--enable-automation"],
      args: ["--disable-blink-features=AutomationControlled"],
    });
    const page = await browser.newPage();
    await page.goto("https://www.petvalu.ca/");
    const searchInput = ".SearchBoxCommon__Input";
    await page.waitForSelector(searchInput);
    await page.type(".SearchBoxCommon__Input", keyword);
    await page.keyboard.press("Enter");
    await page.waitForSelector(".storeLocator__confirmStoreButton");
    const button = ".storeLocator__confirmStoreButton";
    await page.click(button);
    await page.waitForSelector(".ProductResultPrice__ProductPrice");

    items = await page.$$eval(".DynamicProductListItem__Product", (elements) =>
      elements.map((e) => ({
        title: e.querySelector(".ProductResultName").innerText,
        price: e.querySelector(".ProductResultPrice__ProductPrice").innerText,
        image:
          "https://www.petvalu.ca" +
          e.querySelector(".Img__Wrapper img").getAttribute("src"),
        address:
          "https://www.petvalu.ca" +
          e.querySelector(".ProductResultImage").getAttribute("href"),
      }))
    );
    await browser.close();
  } catch (e) {
    console.error(e);
    return items;
  }
  items.map((item) => {
    if (item?.title.includes("Buy")) {
      item.title = item.title.substr(0, item.title.indexOf("Buy"));
    }
  });
  return items;
};

const getWalmart = async (keyword) => {
  let items = [];
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      ignoreDefaultArgs: ["--enable-automation"],
      args: ["--disable-blink-features=AutomationControlled"],
    });
    const page = await browser.newPage();
    await page.goto("https://www.walmart.ca/en");
    const searchInput = "#search-form-input";
    await page.waitForSelector(searchInput);
    await page.type("#search-form-input", keyword);
    await page.keyboard.press("Enter");
    await page.waitForSelector(".css-2vqe5n");

    items = await page.$$eval(".css-3ky18c", (elements) =>
      elements.map((e) => ({
        title: e.querySelector(".css-1p4va6y").innerText,
        price: e.querySelector(".css-2vqe5n").innerText,
        image: e.querySelector(".css-19q6667").getAttribute("src"),
        address:
          "https://www.walmart.ca" +
          e.querySelector(".css-770c6j").getAttribute("href"),
      }))
    );
    await browser.close();
  } catch (e) {
    console.error(e);
  }
  if (items.length === 0) {
    return (items = []);
  } else {
    return items;
  }
};

const getCanadianTire = async (keyword) => {
  const screen = {
    width: 640,
    height: 480,
  };

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .build();
  let items = [];
  try {
    await driver.get(
      "https://www.canadiantire.ca/en/search-results.html?q=" +
        encodeURI(keyword)
    );
    let time = await driver.wait(
      until.elementLocated(By.className("nl-product-card__image-wrap")),
      15000
    );
    titles = await driver.findElements(By.className("nl-product-card__title"));
    prices = await driver.findElements(By.className("nl-price--total"));
    images = await driver.findElements(
      By.xpath("//div[@class='nl-product-card__image-wrap']/img")
    );
    addresses = await driver.findElements(
      By.className("nl-product-card__no-button")
    );
    for (var i = 0; i < prices.length; i++) {
      items.push({
        title: await titles[i].getText(),
        price: await prices[i].getText(),
        image: await images[i].getAttribute("data-src"),
        address: await addresses[i].getAttribute("href"),
      });
    }
  } catch (e) {
    let items = [];
    console.error(e);
  } finally {
    await driver.quit();
  }
  return items;
};

app.post("/petsmart", async (req, res) => {
  const response = await parsingPetSmart(req.body.keyInfo);
  await res.send(response);
});

app.post("/petvalue", async (req, res) => {
  const response = await getPetValue(req.body.keyInfo);
  await res.send(response);
});

app.post("/walmart", async (req, res) => {
  const response = await getWalmart(req.body.keyInfo);
  await res.send(response);
});

app.post("/canadiantire", async (req, res) => {
  const response = await getCanadianTire(req.body.keyInfo);
  await res.send(response);
});

app.listen(port, () => {
  console.log("running on port " + port);
});
