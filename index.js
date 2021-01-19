const { theater, groupOfUsers } = require("./data");

// console.log("theater", theater);
// console.log("groupOfUsers", groupOfUsers);

// console.log(JSON.stringify(theater[1], null, 2));

const theaterLayout = require("./theaterLayout"); //contains methods used to operate on theater layout (printing, finding seats, etc)

theaterLayout.print(theater);
