const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;
const returnRejectedPromise = functions.returnRejectedPromise;

const promiseOne = returnPromise('one', 2000);
const promiseTwo = returnPromise('two', 4000);
const promiseThree = returnPromise('three', 2000);
const promiseFour = returnRejectedPromise('four', 2000);

const promises = [promiseOne, promiseThree,  promiseTwo, promiseFour];

Promise.all(promises)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
