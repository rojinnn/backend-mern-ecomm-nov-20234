const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  brand: String,
});

module.exports = mongoose.model("products", productSchema);
