import {useContext} from 'react';
import CountContext from './CountContext';

const ChildOne = () => {
  const {counter} = useContext(CountContext);

  return (
    <div>
      <h2>I am child one</h2>
      <h2>The current counter is: {counter}</h2>
    </div>
  );
};

export default ChildOne;
