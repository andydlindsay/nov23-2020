/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

//  arr.length === 8;
//  0 1 2 3 4 5 6 7
 

const median = function(arr) {
  // sort the array
  arr.sort();

  const middleIndex = Math.floor(arr.length / 2);

  // check if array length is odd or even
  if (arr.length % 2 === 0) {
    // if even, return average of two middle elements
    const numOne = arr[middleIndex];
    const numTwo = arr[middleIndex - 1];
    const avg = (numOne + numTwo) / 2;
    return round(avg);
  }
  
  // if odd, return middle element
  return arr[middleIndex];
};

// Don't change below:
module.exports = { median };
