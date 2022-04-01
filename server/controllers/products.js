const express = require("express");
const productRoutes = express.Router();
const { readProducts } = require("../models/products.js");

productRoutes.get("/", async (req, res) => {
  const products = await readProducts();
  res.json(products);
});

productRoutes.get("/:sku", async (req, res) => {
  const { products } = await readProducts();
  const product = products.find(({ sku }) => sku === req.params.sku);
  if (product) {
    res.json(product);
  } else {
    res.sendStatus(404);
  }
});

module.exports = { productRoutes };
