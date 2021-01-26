import { useRef } from 'react';

const RefHook = () => {
  const inputRef = useRef();

  // inputRef.current
  const clickHandler = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef!!</h2>
      <input type="text" ref={inputRef} />
      <button onClick={clickHandler}>Set focus on input</button>
    </div>
  );
};

export default RefHook;
