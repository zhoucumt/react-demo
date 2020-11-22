import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/";
import {Provider} from "react-redux";
import MouseTracker from './views/RenderPropsPage';

ReactDOM.render(
  <MouseTracker />,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// class Welcome extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     return <h1>hello {this.props.name}</h1>
//   }
// }

// // const ele = <Welcome name={'Tom'} />
// const ele = new Welcome('Tom2')
// ReactDOM.render(
//   ele,
//   document.getElementById("root")
// );
