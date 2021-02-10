interface IUser {
  username: string;
  password: string;
}

const login = (user: IUser): boolean => {
  user.username.length
  return false;
}

// const bob = {
//   username: 'bob',
//   password: 'imbob',
//   age: 42
// }

const bob: IUser = {} as IUser;

login(bob);
