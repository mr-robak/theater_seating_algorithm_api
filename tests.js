const layout = require("./tools/layout"); //contains methods used to operate on theater layout (printing, finding seats, etc)
const { theater } = require("./db/data");

//Finds a next empty seat in a given rank
//Syntax: layout.seatingNoPreferences(layoutObject,numberOfSeats, rankNr)

// const newLayout = layout.seatingNoPreferences(theater, 9, 1);

const groupOfUsers = [1, 3, 4, 4, 5, 1, 2, 4];
// const groupOfUsers = [1, 3, 4, 4, 5, 1, 2, 4];
// const groupOfUsers = [1, 3, 4];

const newLayout = groupOfUsers.reduce((acc, curr) => {
  return layout.seatingNoPreferences(acc, curr, 1);
}, theater);

// Prints current layout in the console.
// Syntax: layout.print(layout_data, showSeatNr)
// showSeatNr: true => shows seat numbers, false (default) => shows how seats are allocated

layout.print(newLayout, false);
