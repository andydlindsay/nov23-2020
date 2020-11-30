const sayHello = (name) => {
  return `hello ${name}`;
};

const THE_MEANING_OF_LIFE = 42;

// module.exports = sayHello;

// module.exports.sayHello = sayHello;
// module.exports.THE_MEANING_OF_LIFE = THE_MEANING_OF_LIFE;

module.exports = {
  sayHello,
  THE_MEANING_OF_LIFE
};
