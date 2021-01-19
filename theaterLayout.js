module.exports = {
  //console.logs theater layout
  print: function (theater) {
    for (section = 1; section <= Object.keys(theater).length; ++section) {
      //displays section name
      console.log(" ----------- ");
      console.log(`| ${theater[section].name} |`);
      console.log(" ----------- ");

      let currentRowRank = 0;
      for (
        rowNr = 1;
        rowNr <= Object.keys(theater[section].rows).length;
        ++rowNr
      ) {
        //displays row rank
        if (theater[section].rows[rowNr].rank != currentRowRank) {
          currentRowRank = theater[section].rows[rowNr].rank;
          console.log("Rank:", currentRowRank);
        }

        //displays row with seat numbers
        console.log(
          theater[section].rows[rowNr].seats
            .map((seat) => seat.number)
            .toString()
        );
      }
    }
  },
};
