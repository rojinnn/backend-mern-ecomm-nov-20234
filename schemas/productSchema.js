// schemas/productSchema.js
const yup = require("yup");

const productSchema = yup.object({
  name: yup.string().required("Name is required"),
  price: yup.number().positive().required("Price is required"),
  category: yup.string().required("Category is required"),
  brand: yup.string().required("Brand is required"),
});

module.exports = productSchema;
