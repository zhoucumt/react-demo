import React from 'react';
import './App.css';
// import RefOne from './views/RefPages/refs';
// import RefThree from './views/RefPages/createRef';
import RefFour from './views/RefPages/forwardRef';
import Home from './views/Home';

function App() {
  const ref = React.createRef();
  return (
    <div className="App">
      {/* <RefOne /> */}
      {/* <RefThree /> */}
      <RefFour ref={ref}>Click me!</RefFour>
      <Home name={'Tom'} />
      {/* <RefFour>aaa</RefFour> */}
    </div>
  );
}

export default App;
