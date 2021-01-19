const { theater } = require("./data");

// console.log("theater", theater);
// console.log("groupOfUsers", groupOfUsers);

const theaterLayout = require("./theaterLayout"); //contains methods used to operate on theater layout (printing, finding seats, etc)

const groupOfUsers = [1, 3, 4, 1, 5, 1, 2, 4, 5, 2, 4, 3, 2];
// const groupOfUsers = [1, 3, 4, 4, 5, 1, 2, 4 ];
// const groupOfUsers = [1, 3, 4];

// const newLayout = theaterLayout.seatingNoPreferences(theater, 28, 1);

const newLayout = groupOfUsers.reduce((acc, curr) => {
  return theaterLayout.seatingNoPreferences(acc, curr, 1);
}, theater);

// console.log(newLayout);
theaterLayout.print(newLayout);
