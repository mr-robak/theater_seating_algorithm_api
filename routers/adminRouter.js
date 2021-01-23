const { Router } = require("express");
const fs = require("fs");

const layout = require("../tools/layout");

const router = new Router();

const eventLayout = JSON.parse(fs.readFileSync("./db/event_1_data.json"));

// "/admin" <= this is endpoint prefix for this router

router.post("/block", (request, response) => {
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

module.exports = router;
