Ivo made a "test" / challenge / task below. It might be a bit too big, if so let us know. Perhaps part 3. should be skipped then - our experience is that you can spend a lot of time on that :)

Part of the challenge is to get the specifications right of course so if you need any additional info, you can contact Ivo about this.

This is actually part of our current functionality. We already have an implementation, but it would be nice to see alternative approaches.

# GUTS Theater Seating Algorithm / API

1. Create a datastructure that defines a seating layout for a hall in a venue:

   different sections (main hall, 1st balcony, 2nd balcony)
   different ranks defined across sections (1st rank, 2nd rank 3rd rank)

   so the 1st rank could be on both the main hall and 1st balcony - they're not restricted by section

   rows of seats, numbered by row, seat. Seats can be differently numbered: sometimes 1 .. 6, sometimes 1,3,5,6,4,2

   bonus:

   Support additional properties on seats:
   aisle seat
   frontrow seat
   high seat (e.g. on balcony)

2. Create an algorithm that given a list of "groups of users" per rank (basically sizes, e.g. (1, 3, 4, 4, 5, 1, 2, 4) in a specific order,
   tries to place the users in their seats, e.g.

1 2 2 2 3 3 3 3
5 5 5 5 4 4 4 4
5 6 7 7 8 8 8 8

So the group of size 1 at index 1 gets the frontmost left seat. Then the group at index 2 of 3 people next to it, until the
row fills and wraps to the next row and fills in the other direction.

You can assume that sum(groups_of_users_for_rank) <= seats_in_that_rank

    Bonus: take preferences into account based on seat properties. E.g. ("aisle", 2) would mean a group of 2 where one of the members wishes to be near the aisle

    Bonus: Allow seats to be blocked (e.g. for technical purposes). This means a group should not be split across such a block

3. Improve the algorithm in such a way that no individual people sit alone. In the above example this happened with the group at index 5 where a single individual sits on the 3rd row (even though the rest of the group is in front of him)

1 2 2 2 3 3 3 3
8 8 8 8 4 4 4 4
5 5 5 5 5 6 7 7

would be a better solution. Try to preserve the order as much as possible because the lowest numbers should get the "best" (frontmost)
seats

4. Create a django model to store the seating layout (generically) and the seating allocation. The allocation should be separate (think of
   different shows in the same theater)

5. Design / Create a REST API to retrieve the layout of the allocations. Authentication / security is not a requirement (everything public)

6. Create a simple consumer of this API that renders the allocations to a visually understandable HTML layout

====================================
Extra information about seating and persons per rank.

You have the number of persons per rank but nothing regarding the section.

In an even more advanced version we would have a sort of a heatmap that shows what seats are more popular, and use that as the order for placing the people (so earlier people get the better seats). For now we're just placing from front to back and using the layout of the theater to our own insight.

And of course, a group shouldn't be split across two sections in the part 3. solution (unless there's really no other way)

For inspiration, this is a theater hall we actually filled with such an algorithm: https://www.amphion.nl/site/assets/files/3162/plattegrond_rabobank_zaal.pdf

green/orange/yellow are the ranks. Most of it is first rank.

Another example (did that as well):

https://flint.nl/media/2040/plattegrond-flint-plus-legenda.pdf

More ranks but also quite a puzzle.

You don't have to base your actual solution on these floors, they just for illustration.
