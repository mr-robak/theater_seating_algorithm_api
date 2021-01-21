const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const layout = require("./tools/layout");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const theaterLayout = JSON.parse(fs.readFileSync("./db/theater_data.json"));
const eventLayout = JSON.parse(fs.readFileSync("./db/event_1_data.json"));

app.listen(port, () => {
  console.log(`
  Listening at localhost:${port}`);
});

app.get("/theater-layout", (request, response) => {
  response.send(theaterLayout);
});

app.get("/event-layout", (request, response) => {
  response.send(eventLayout);
});

app.post("/bookings", (request, response) => {
  const { rank, tickets } = request.body; //{rank:num, tickets:num}
  const updatedEventLayout = layout.seatingNoPreferences(
    eventLayout,
    tickets,
    rank
  );
  const data = JSON.stringify(updatedEventLayout);
  fs.writeFile("./db/event_1_data.json", data, (err) => {
    if (err) throw err;
  });
  // response.sendStatus(200);
  response.send(updatedEventLayout);
});

app.get("/", (request, response) => {
  response.send(landingPageHtml);
});

layout.print(eventLayout, false);

const landingPageHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GutsTickets API</title>
      </head>
      <body>
      <h3>Server Running on port: ${port}</h3>
      </body>
      </html>`;
