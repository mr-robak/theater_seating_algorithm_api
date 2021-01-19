const { theater, groupOfUsers } = require("./data");

// console.log("theater", theater);
// console.log("groupOfUsers", groupOfUsers);

const groupOfUsers = [1, 3, 4, 4, 5, 1, 2, 4];

const theaterLayout = require("./theaterLayout"); //contains methods used to operate on theater layout (printing, finding seats, etc)

const newLayout = theaterLayout.seatingNoPreferences(theater, 5, 1);

theaterLayout.print(newLayout);
