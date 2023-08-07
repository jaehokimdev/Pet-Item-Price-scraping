const axios = require("axios");
const cheerio = require("cheerio");

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

const getCanadianTire = async (keyword) => {
  try {
    return await axios.get(
      "https://www.canadiantire.ca/en/search-results.html?q=" +
        encodeURI(keyword)
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

const parsingCanadianTire = async (keyword) => {
  const html = await getCanadianTire(keyword);
  const $ = cheerio.load(html.data);
  const $itemList = $(".nl-product__content");
  let items = [];
  $itemList.each((idx, node) => {
    items.push({
      title: $(node).find(".nl-product-card__title").text(),
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
parsingCanadianTire("cat food");
