import React from 'react';
import './App.css';
// import RefOne from './views/RefPages/refs';
// import RefThree from './views/RefPages/createRef';
import RefFour from './views/RefPages/forwardRef';
import Home from './views/Home';
import List from './views/List';
import Temperature from './views/Temperature';
import ContextPage from './views/ContextPage';

function App() {
  const ref = React.createRef();
  return (
    <div className="App">
      {/* <RefOne /> */}
      {/* <RefThree /> */}
      {/* <RefFour ref={ref}>Click me!</RefFour>
      <Home name={'Tom'} />
      <List />
      <Temperature></Temperature> */}
      {/* <RefFour>aaa</RefFour> */}
      <ContextPage />
    </div>
  );
}

export default App;
