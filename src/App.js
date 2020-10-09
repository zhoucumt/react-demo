import React, {useState} from "react";
import ReactReduxPage from "./views/ReactReduxPage";
import HomePage from './views/HomePage';

export default function App(props) {
  const [state, setState] = useState(1);
  const element = <h1>hello</h1>;
  console.log(element);
  return (
    <div>
      {/* <button onClick={() => setState(state + 1)}>add : {state}</button> */}
      {/* <ReactReduxPage state={state} /> */}
      <HomePage />
    </div>
  );
}
