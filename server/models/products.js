const fs = require("fs");
const path = require("path");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const readProducts = async () => {
  const productsFile = path.join(__dirname, "products.json");
  const productsJSON = await readFile(productsFile);
  return JSON.parse(productsJSON);
};

const getAllProducts = async () => {
  const { products } = await readProducts();
  return products;
};

const getProduct = async () => {
  const { products } = await readProduct();
  return products.map(product => product.sku === sku);
};

module.exports = { getAllProducts, getProduct };
