const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

const userRouter = require("./router/userRouter");
const adminRouter = require("./router/adminRouter");
const rootRouter = require("./router/rootRouter");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routers
app.use("/bookings", userRouter);
app.use("/admin", adminRouter);
app.use("/", rootRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`
  Listening at localhost:${port}`);
});
