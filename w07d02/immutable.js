const user = {
  username: 'Alice',
  age: 42,
  stomach: ['pizza']
}

const anotherUser = {
  ...user,
  username: 'Bob',
  stomach: [
    ...user.stomach,
    'bread sticks'
  ]
};
// anotherUser.username = 'Bob';
// anotherUser.stomach.push('bread sticks');

console.log(anotherUser);
console.log(user);
