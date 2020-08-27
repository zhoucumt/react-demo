import React, {useState, useReducer, useEffect, useLayoutEffect} from 'react';
import {countReducer} from "../../store";

const init = initArg => {
  return initArg - 0;
};

function HooksPage() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, "0", init);

  useEffect(() => {
    console.log("useEffect un", state); //sy-log
    return () => {
      console.log("unmount"); //sy-log
    };
  }, []);

  useEffect(() => {
    console.log("useEffect", state); //sy-log
  }, [state]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect"); //sy-log
  }, []);

  // console.log(count);
  // console.log(setCount);

  return (
    <div>
      <div>{count}</div>
      <h3>{state}</h3>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button
        onClick={() => {
          dispatch({type: "ADD"});
          {
            /* console.log("state", state); //sy-log */
          }
        }}>
        add
      </button>
    </div>
  );
}

export default HooksPage;