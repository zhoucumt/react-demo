import React, {useState} from "react";
import ReactReduxPage from "./views/ReactReduxPage";

export default function App(props) {
  const [state, setState] = useState(1);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>add : {state}</button>
      <ReactReduxPage state={state} />
    </div>
  );
}
