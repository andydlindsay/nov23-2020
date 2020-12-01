/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,0,1,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // Math.min(...arr);

  let lowestValue = Infinity;

  for (const num of arr) {
    // check to see if it is less than the current lowest value
    if (num < lowestValue) {
      // if it is, set the lowest value to it
      lowestValue = num;
    }
  }

  return lowestValue;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  let highestValue = -Infinity;

  for (const num of arr) {
    if (num > highestValue) {
      highestValue = num;
    }
  }

  return highestValue;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);
  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
