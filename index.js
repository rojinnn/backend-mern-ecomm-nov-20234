const express = require("express");
require("./db/config");
const app = express();
const User = require("./model/User");
const userRouter = require("./router/UserRouter");
app.use(express.json());

app.use("/register", userRouter);
app.listen(5500);
