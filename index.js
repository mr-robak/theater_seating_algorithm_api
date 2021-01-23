const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
const rootRouter = require("./routers/rootRouter");

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

//Prints layout to console
// const theaterLayout = JSON.parse(fs.readFileSync("./db/theater_data.json"));
const eventLayout = JSON.parse(fs.readFileSync("./db/event_1_data.json"));
const layout = require("./tools/layout");
layout.print(eventLayout, false);
