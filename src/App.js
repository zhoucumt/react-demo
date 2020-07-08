import React from 'react';
import './App.css';
// import RefOne from './views/RefPages/refs';
// import RefThree from './views/RefPages/createRef';
import RefFour from './views/RefPages/forwardRef';

function App() {
  const ref = React.createRef();
  return (
    <div className="App">
      {/* <RefOne /> */}
      {/* <RefThree /> */}
      <RefFour ref={ref}>Click me!</RefFour>
      {/* <RefFour>aaa</RefFour> */}
    </div>
  );
}

export default App;
