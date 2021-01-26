import {useState} from 'react';
import CountContext from './CountContext';
import InBetween from './InBetween';
import ChildTwo from './ChildTwo';

const ContextHook = () => {
  const [counter, setCounter] = useState(0);

  return (
    <CountContext.Provider value={{counter, setCounter}}>
      <InBetween />
      <ChildTwo />
    </CountContext.Provider>
  );
};

export default ContextHook;
