// controllers/productController.js

const getAllProducts = async (req, res) => {
  let products = await Product.find();
  if (products.length > 0) {
    res.status(200).send(products);
  } else {
    res.status(400).send({ result: "No product found" });
  }
};

const getProductById = async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.status(404).send("No record found.");
  }
};

const createProduct = async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.status(200).send(result);
};
const updateProductById = async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
};

const deleteProductById = async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.status(404).send("Product not found");
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
