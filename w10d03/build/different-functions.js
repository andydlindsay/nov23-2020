"use strict";
// Promise
const fnReturningPromise = (firstName) => {
    return new Promise((resolve, reject) => {
        resolve(firstName);
    });
};
const hovard = {
    penName: 'HP Lovecraft',
    numBooks: 2,
    writeBook: (title, numPages) => {
        return true;
    }
};
// hovard.writeBook(true, false)
// callback functions
const myHOF = (cb) => {
    cb(7);
};
myHOF((myNumber) => {
    return 'hello';
});
//
