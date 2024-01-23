const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./model/User");
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
// app.listen(5000);
app.listen(process.env.PORT, () => {
  console.log("Serving at port number", process.env.PORT);
});
