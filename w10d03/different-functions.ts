// Promise
const fnReturningPromise = (firstName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve(firstName);
  });
}

// object methods
interface IWriter {
  penName: string;
  numBooks: number;
  writeBook: (title: string, numPages: number) => boolean
}

const hovard: IWriter = {
  penName: 'HP Lovecraft',
  numBooks: 2,
  writeBook: (title, numPages) => {
    return true;
  }
}

// hovard.writeBook(true, false)

// callback functions
const myHOF = (cb: (num: number) => string): void => {
  cb(7);
};

myHOF((myNumber: number): string => {
  return 'hello';
});





//
