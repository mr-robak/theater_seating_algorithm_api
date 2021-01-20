const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const theater = JSON.parse(fs.readFileSync("./db/theater_data.json"));
const event = JSON.parse(fs.readFileSync("./db/event_data.json"));

app.listen(port, () => {
  console.log(`
  
  Listening at localhost:${port}`);
});
