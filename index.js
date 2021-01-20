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

const theaterLayout = require("./theaterLayout"); //contains methods used to operate on theater layout (printing, finding seats, etc)

// const { theater } = require("./data");

const groupOfUsers = [1, 3, 4, 1, 5, 1, 2, 4, 5, 2, 4, 3, 2];
// const groupOfUsers = [1, 3, 4, 4, 5, 1, 2, 4 ];
// const groupOfUsers = [1, 3, 4];

// const newLayout = theaterLayout.seatingNoPreferences(theater, 28, 1);

const newLayout = groupOfUsers.reduce((acc, curr) => {
  return theaterLayout.seatingNoPreferences(acc, curr, 1);
}, theater);

// console.log(newLayout);
theaterLayout.print(newLayout, false);
