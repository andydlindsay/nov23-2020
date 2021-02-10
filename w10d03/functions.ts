// 2 things to type: parameters, return value

const myNum: boolean = true;

const sayHello = (firstName: string, age?: number): string => {
  return `hello ${firstName}`;
};

sayHello('bob');
