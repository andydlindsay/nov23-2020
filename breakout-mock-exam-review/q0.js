/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // setup a variable to hold the return value
  let total = 0;

  // iterate through the array
  for (const num of arr) {
    // add the element's value to the total variable
    total += num;
  }

  // return that variable
  return total;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};


/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  // if (!arr.length) {
  if (arr.length === 0) {
    return null;
  }

  const sumArr = sum(arr);
  const numElements = count(arr);
  const average = sumArr / numElements;
  const roundedAvg = round(average);
  return roundedAvg;

  // return round(sum(arr) / count(arr));
};

// Don't change below:
module.exports = { count, sum, mean };
