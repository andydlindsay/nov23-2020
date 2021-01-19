import './App.css';
import Header from './components/Header';
// import VisitorCounter from './components/VisitorCounter';
import Pizza from './components/Pizza';
import {useState} from 'react';

const App = () => {
  const [title] = useState(`Pat's Pizza Place`);

  return (
    <div className="App">
      <Header whatever={title} heading="blah blah blah" color="secondary" />
      {/* <VisitorCounter /> */}
      <Pizza />
    </div>
  );
};

export default App;
