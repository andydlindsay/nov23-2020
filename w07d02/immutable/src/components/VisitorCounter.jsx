import {useState} from 'react';

const VisitorCounter = () => {
  const [numVisitors, setNumVisitors] = useState(0);

  const addVisitors = () => {
    // numVisitors = numVisitors + 1 // don't do this!!
    // setNumVisitors(numVisitors + 1); // does this one run and then stop?
    // setNumVisitors(numVisitors + 1);
    // setNumVisitors(numVisitors + 1); // does this one run and take over for the rest?

    setNumVisitors((prevValue) => {
      return prevValue + 1; // 1
    });
    setNumVisitors((prevValue) => {
      return prevValue + 1; // 2
    });
    setNumVisitors((prevValue) => {
      return prevValue + 1; // 3
    });
  };

  return (
    <div>
      <h2>Visitor Counter</h2>
      <h2>Count: {numVisitors}</h2>
      <button onClick={addVisitors}>Add a visitor</button>
    </div>
  );
};

export default VisitorCounter;
