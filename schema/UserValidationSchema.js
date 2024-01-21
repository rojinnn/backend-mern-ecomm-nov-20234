const yup = require("yup");

const userValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be atleast 5 characters."),
  email: yup.string().email("Invalid Email").required("Email is required."),
});

module.exports = userValidationSchema;
