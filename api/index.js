const axios = require("axios");
const cheerio = require("cheerio");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const getWalmart = async (keyword) => {
  let driver = await new Builder().forBrowser("chrome").build();
  let items = [];
  try {
    await driver.get(
      "https://www.walmart.ca/search?q=" + encodeURI(keyword) + "&c=21103"
    );
    let time = await driver.wait(
      until.elementLocated(By.className("css-1p4va6y")),
      15000
    );
    titles = await driver.findElements(By.className("css-1p4va6y"));
    prices = await driver.findElements(By.className("css-8frhg8"));
    images = await driver.findElements(By.className("css-19q6667"));
    addresses = await driver.findElements(By.className("css-770c6j"));
    for (var i = 0; i < prices.length; i++) {
      items.push({
        title: await titles[i].getText(),
        price: await prices[i].getText(),
        image: await images[i].getAttribute("src"),
        address: await addresses[i].getAttribute("href"),
      });
    }
  } catch (e) {
    console.error(e);
  } finally {
    await driver.quit();
  }
  console.log(items);
};

const getCanadianTire = async (keyword) => {
  let driver = await new Builder().forBrowser("chrome").build();
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
    console.error(e);
  } finally {
    await driver.quit();
  }
  console.log(items);
};

const getAmazon = async () => {
  let driver = await new Builder().forBrowser("chrome").build();
  let items = [];
  try {
    await driver.get("https://www.amazon.ca");
    let time = await driver.wait(
      until.elementLocated(By.id("twotabsearchtextbox")),
      15000
    );

    searchBox = await driver.findElement(By.id("twotabsearchtextbox"));
    await searchBox.sendKeys("cat food");
    searchButton = await driver.findElement(By.id("nav-search-submit-button"));
    await searchBox.click();

    let times = await driver.wait(
      until.elementLocated(By.className("a-price-whole")),
      15000
    );
    titles = await driver.findElements(
      By.xpath(
        "//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']"
      )
    );
    prices = await driver.findElements(By.className("a-price-whole"));
    // images = await driver.findElements(
    //   By.xpath("//div[@class='nl-product-card__image-wrap']/img")
    // );
    // addresses = await driver.findElements(
    //   By.className("nl-product-card__no-button")
    // );

    for (var i = 0; i < prices.length; i++) {
      items.push({
        // title: await titles[i].getText(),
        price: await prices[i].getText(),
        // image: await images[i].getAttribute("data-src"),
        // address: await addresses[i].getAttribute("href"),
      });
    }
    console.log(titles);
  } catch (e) {
    console.error(e);
  } finally {
    await driver.quit();
  }
  console.log(items);
};

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
const getPetValue = async (keyword) => {
  try {
    return await axios.get(
      "https://www.petvalu.ca/search?query=" + encodeURI(keyword)
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
  console.log(items);
};

const parsingPetValue = async (keyword) => {
  const html = await getPetValue(keyword);
  const $ = cheerio.load(html.data);
  const $itemList = $(".DynamicProductListItem__Product");
  let items = [];
  $itemList.each((idx, node) => {
    console.log(node);
    items.push({
      title: $(node).find(".ProductResultName").text(),
      price: $(node).find(".ProductResultPrice__ProductPrice").text(),
      image:
        "https://www.petvalu.ca" +
        $(node).find(".Img__Wrapper > img").attr("src"),
      address:
        "https://www.petvalu.ca" +
        $(node).find(".ProductResultImage").attr("href"),
    });
  });
  console.log(items);
};

// parsingPetSmart("arm and hammer");
// parsingPetValue("cat food");
// parsingWalmart("water");
// getCanadianTire("cat food");
