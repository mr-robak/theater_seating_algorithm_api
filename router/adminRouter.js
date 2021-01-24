const { Router } = require("express");
const fs = require("fs");

const layout = require("../tools/layout");

const router = new Router();

// "/admin" <= this is endpoint prefix for this router

router.post("/block/:id", (request, response) => {
  const id = request.params.id;

  const eventLayout = JSON.parse(fs.readFileSync(`./db/event_${id}_data.json`));

  const blockedSeats = request.body;
  const updatedLayout = { ...eventLayout };

  for (const aSeat of blockedSeats) {
    const { section, row, seat } = aSeat;
    const reverseStatus =
      updatedLayout[section].rows[row].seats[seat - 1].status === "B"
        ? null
        : "B";
    updatedLayout[section].rows[row].seats[seat - 1].status = reverseStatus;
  }

  const data = JSON.stringify(updatedLayout);

  fs.writeFile(`./db/event_${id}_data.json`, data, (err) => {
    if (err) throw err;
  });

  response.send(data);

  layout.print(JSON.parse(data), false);
});

router.post("/clear/:id", (request, response) => {
  const id = request.params.id;
  if (request.body.secret === "123456") {
    const newLayout = fs.readFileSync("./db/theater_data.json");

    fs.writeFile(`./db/event_${id}_data.json`, newLayout, (err) => {
      if (err) throw err;
    });

    const data = JSON.parse(newLayout);

    response.send(data);

    layout.print(data, false);
  }
});

module.exports = router;
