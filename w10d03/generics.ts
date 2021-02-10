interface IContainer<T> {
  name: string;
  contents: T;
}

const numberContainer: IContainer<number> = {
  name: 'number container',
  contents: 42
}

const stringContainer: IContainer<string> = {
  name: 'string container',
  contents: 'hello'
}