const functions = require('./promise-generator');

const returnPromise = functions.returnPromise;

const promise = returnPromise('something else', 3129);
console.log(promise);

promise
  .then((data) => {
    console.log(data);
    return 'another thing';
  })
  .then((data) => {
    console.log(data);
  });
