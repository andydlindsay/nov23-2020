# W02D04 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [ ] Parallelizing async things (Promise.race and Promise.all)
- [ ] Creating our own Promises

### Promise
* Promise is actually a JS object
* Pending
* Fulfilled => resolved
* Failed => rejected

```js
const arr = [1, 2, 3];
arr.filter().map().reduce()

const filtered = arr.filter();
filtered.map()
```


```js
fnUsingCallback((err, data) => {
  if (err) {
    return console.log(err);
  }
  fnUsingCallback((err, data) => {
    if (err) {
      return console.log(err);
    }
    fnUsingCallback((err, data) => {
      if (err) {
        return console.log(err);
      }
    });
  });
});

```















# 
