module.exports = {
  print: function (theater, showSeatNr) {
    // showSeatNr === true - will print seat numbers instead of seat.status
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
          console.log(" Rank:", currentRowRank);
        }

        //displays row with seat numbers or status depending on the var showSeatNr
        console.log(
          " ",
          theater[section].rows[rowNr].seats
            .map((seat) =>
              showSeatNr
                ? `[${seat.number}]`
                : seat.status != null
                ? `[${seat.status}]`
                : `[ ]`
            )
            .join("")
        );
      }
    }
  },
  findIndexOfNextEmptySeat: function (row, rowNr) {
    function getIndex(seats) {
      return seats.findIndex((seat) => seat.status === null);
    }
    //for even row numbers search from right to left
    if (rowNr % 2 === 0) {
      const reversedRow = [...row.seats].reverse();

      index =
        getIndex(reversedRow) === -1
          ? -1
          : row.seats.length - 1 - getIndex(reversedRow);
    } else {
      //for odd row numbers search from left to right
      index = getIndex(row.seats);
    }

    return index;
  },

  seatingNoPreferences: function (theater, group, rank) {
    // theater - layout data model
    // group - number of people in a group
    // rank - desired seat rank
    let seatsCounter = group;
    const numberOfSections = Object.keys(theater).length;
    //loop through sections
    let section = 1;
    while (section <= numberOfSections) {
      const numberOfRows = Object.keys(theater[section].rows).length;
      //loop through rows
      let rowNr = 1;
      while (rowNr <= numberOfRows) {
        const row = theater[section].rows[rowNr];
        //check if current row matches the rank
        if (row.rank === rank) {
          //find seats for the group members
          let index = this.findIndexOfNextEmptySeat(row, rowNr);

          // if no free space is found jump to the next row in this loop
          if (index === -1) {
            ++rowNr;
          } else {
            // change status of found seat from null to a group number
            theater[section].rows[rowNr].seats[index].status = group;

            --seatsCounter;
          }
        } else {
          ++rowNr;
        }
        if (seatsCounter === 0) {
          return theater;
        }
      }
      ++section;
    }
    return theater;
  },
};
