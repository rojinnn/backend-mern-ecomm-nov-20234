const express = require("express");
app = express();
const userRouter = require("./router/UserRouter");

app.use("/register", userRouter);
app.listen(5500);
