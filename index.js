const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./model/User");
const Product = require("./model/Product");
const app = express();
const env = require("dotenv");
env.config();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ Message: "Error User Not Found" });
    }
  } else {
    res.status(404).send({ Message: "Error User Not Found" });
  }
});

app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.status(200).send(result);
});

app.get("/products", async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.status(200).send(products);
  } else {
    res.status(400).send({ result: "No product found" });
  }
});
app.delete("/product/:id", async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.status(404).send("Product not found");
  }
});
app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.status(404).send("No record found.");
  }
});
app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.listen(process.env.PORT, () => {
  console.log("Serving at port number", process.env.PORT);
});
