import './App.css';
// import MyRouter from './components/Router';
// import MyStyled from './components/MyStyled';
// import ContextHook from './components/ContextHook';
// import RefHook from './components/RefHook';
import StaleState from './components/StaleState';

const App = () => {
  return (
    <div className="App">
      <h2>More React!</h2>
      {/* <MyRouter /> */}
      {/* <MyStyled /> */}
      {/* <ContextHook /> */}
      {/* <RefHook /> */}
      <StaleState />
    </div>
  );
};

export default App;
