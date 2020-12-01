/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5,6,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // sort the numbers into piles
  const piles = {};

  for (const num of arr) {
    // have we seen the number before?
    if (piles[num]) {
      piles[num] += 1;
    } else {
      piles[num] = 1;
    }
  }

  // console.log(piles);

  // check which pile has the most numbers in it
  let mostFrequentNum;
  let numOccurrences = 0;

  for (const pile in piles) {
    const value = piles[pile];
    if (value > numOccurrences) {
      mostFrequentNum = pile;
      numOccurrences = value;
    }
  }

  return mostFrequentNum;
};

// Don't change below:
module.exports = { mode };
