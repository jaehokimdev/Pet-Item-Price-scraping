const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async (keyword) => {
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

const parsing = async (keyword) => {
  const html = await getHTML(keyword);
  const $ = cheerio.load(html.data);
  const $itemList = $(".name-link");
  let items = [];
  $itemList.each((idx, node) => {
    items.push({
      title: $(node).find(".product-name > h3").text(),
      price: $(node).find(".price-regular").text(),
      image: $(node).find(".product-image > img").attr("src"),
      address: "https://www.petsmart.ca" + $(node).attr("href"),
    });
  });
  console.log(items);
};

parsing("arm and hammer");
