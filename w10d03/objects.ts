interface IUser {
  id?: number;
  username: string;
  password: string;
  // firstName: string;
}

const userObj: IUser = {
  username: 'alice',
  password: '1234'
};

const users: IUser[] = [];
users.push(userObj);
// users.push({ username: 'hello' });
