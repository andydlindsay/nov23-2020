import {useContext} from 'react';
import CountContext from './CountContext';

const clickHandler = (setCounter) => {
  setCounter(prevCounter => prevCounter + 1);
};

const ChildTwo = () => {
  const {setCounter} = useContext(CountContext);

  return (
    <div>
      <h2>I am child two</h2>
      <button onClick={() => clickHandler(setCounter)}>Increment!</button>
    </div>
  );
};

export default ChildTwo;