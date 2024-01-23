const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./model/User");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    console.log(req.body);

    let user = await User.findOne(req.body).select("-password");
    res.send(user);
  } else {
    res.status(404).send({ Message: "Error User Not Found" });
  }
});

app.listen(process.env.PORT);
