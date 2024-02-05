const express = require("express");
const productRouter = express.Router();
const productSchema = require("../schemas/productSchema");
const Product = require("../model/Product");

productRouter.get("/", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.status(200).send(products);
  } else {
    res.status(400).send({ result: "No product found" });
  }
});
productRouter.post("/", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.status(200).send(result);
});
module.exports = productRouter;
