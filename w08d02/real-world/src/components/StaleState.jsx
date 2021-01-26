import {useRef, useState} from 'react';

const StaleState = () => {
  const [counter, setCounter] = useState(0);
  const countRef = useRef();
  countRef.current = counter;

  const showAlert = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 3000);
  };

  return (
    <div>
      <h2>Stale State</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <button onClick={showAlert}>Show alert</button>
    </div>
  );
};

export default StaleState;
