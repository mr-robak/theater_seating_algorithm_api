const { Router } = require("express");
const fs = require("fs");

const layout = require("../tools/layout");

const router = new Router();

// "/bookings" <= this is endpoint prefix for this router

router.post("/:id", (request, response) => {
  const id = request.params.id;

  const { rank, tickets } = request.body; //{rank:num, tickets:num}

  const eventLayout = JSON.parse(fs.readFileSync(`./db/event_${id}_data.json`));

  const updatedEventLayout = layout.seatingNoPreferences(
    eventLayout,
    tickets,
    rank
  );

  const data = JSON.stringify(updatedEventLayout);

  fs.writeFile(`./db/event_${id}_data.json`, data, (err) => {
    if (err) throw err;
  });

  response.send(updatedEventLayout);

  layout.print(updatedEventLayout, false);
});

module.exports = router;
