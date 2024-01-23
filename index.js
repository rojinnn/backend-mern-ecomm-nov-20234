const express = require("express");
require("./db/config");
const User = require("./model/User");
const cors = require("cors");
// const userController = require("./controllers/userController");
// const registerRouter = require("../back-end/router/registerRouter");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});
// app.use("/", registerRouter);

app.listen(5000);
