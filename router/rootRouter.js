const { Router } = require("express");
const fs = require("fs");

const layout = require("../tools/layout");

const router = new Router();

// "/" <= this is endpoint prefix for this router

router.get("/theater-layout", (request, response) => {
  response.send(theaterLayout);
});

router.get("/event-layout", (request, response) => {
  const eventLayout = JSON.parse(fs.readFileSync("./db/event_1_data.json"));
  console.log(11111);
  response.send(eventLayout);
});

router.get("/", (request, response) => {
  response.send(landingPageHtml);
});

const port = process.env.PORT || 4000;
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

module.exports = router;
