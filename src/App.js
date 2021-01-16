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

/**
 *
  const element = <h1 title="foo">Hello</h1>
  const container = document.getElementById("root")
  ReactDOM.render(element, container)

  const element = React.createElement(
    "h1",
    { title: "foo" },
    "Hello"
  )
  const container = document.getElementById("root")
  ReactDOM.render(element, container)

  const element = {
    type: "h1",
    props: {
      title: "foo",
      children: "Hello",
    },
  }
  const container = document.getElementById("root")
  ReactDOM.render(element, container)

  const element = {
    type: "h1",
    props: {
      title: "foo",
      children: "Hello",
    },
  }​
  const container = document.getElementById("root")
  ReactDOM.render(element, container)

  // 
  const element = {
    type: "h1",
    props: {
      title: "foo",
      children: "Hello",
    },
  }​
  const container = document.getElementById("root")​
  const node = document.createElement(element.type)
  node["title"] = element.props.title​
  const text = document.createTextNode("")
  text["nodeValue"] = element.props.children
 */
