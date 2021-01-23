const { Router } = require("express");
const fs = require("fs");
const { request } = require("http");

const layout = require("../tools/layout");

const router = new Router();

const eventLayout = JSON.parse(fs.readFileSync("./db/event_1_data.json"));
// console.log("eventLayout", eventLayout);
// "/admin" <= this is endpoint prefix for this router

router.post("/block", (request, response) => {
  const blockedSeats = request.body;
  console.log("blockedSeats", blockedSeats);
  const updatedLayout = { ...eventLayout };
  for (const aSeat of blockedSeats) {
    const { section, row, seat } = aSeat;
    console.log(
      updatedLayout[section].rows[row].seats[seat - 1].status === "B"
    );
    const reverseStatus =
      updatedLayout[section].rows[row].seats[seat - 1].status === "B"
        ? null
        : "B";
    updatedLayout[section].rows[row].seats[seat - 1].status = reverseStatus;
  }

  const data = JSON.stringify(updatedLayout);
  fs.writeFile("./db/event_1_data.json", data, (err) => {
    if (err) throw err;
  });
  response.send(data);
});

router.put("/clear", (request, response) => {
  if (request.body.secret === "123456") {
    console.log("RESET", request.body);

    // const newLayout = JSON.parse(fs.readFileSync("./db/theater_data.json"));
    const newLayout = fs.readFileSync("./db/theater_data.json");
    // JSON.stringify(newLayout)
    fs.writeFile("./db/event_1_data.json", newLayout, (err) => {
      if (err) throw err;
    });
    // console.log(newLayout);
    // console.log(newLayout[1].rows[1].seats[7]);
    response.send(newLayout);
  }
});

module.exports = router;
