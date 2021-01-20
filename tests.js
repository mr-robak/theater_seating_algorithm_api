const theaterLayout = require("./tools/theaterLayout"); //contains methods used to operate on theater layout (printing, finding seats, etc)
const { theater } = require("./db/data");

// const newLayout = theaterLayout.seatingNoPreferences(theater, 9, 1);

const groupOfUsers = [1, 3, 4, 1, 5, 1, 2, 4, 5, 2, 4, 3, 2];
// const groupOfUsers = [1, 3, 4, 4, 5, 1, 2, 4 ];
// const groupOfUsers = [1, 3, 4];
const newLayout = groupOfUsers.reduce((acc, curr) => {
  return theaterLayout.seatingNoPreferences(acc, curr, 1);
}, theater);

// prints current layout in the console.
// Syntax: theaterLayout.print(layout_data, showSeatNr)
// showSetaNr: true => shows seat numbers, false (default) => shows how seats are allocated
theaterLayout.print(newLayout, false);
