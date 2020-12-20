import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/";
import {Provider} from "react-redux";
// import MouseTracker from './views/RenderPropsPage';
import CountTimer from './views/CountTimer';

ReactDOM.render(
  <CountTimer />,
  document.getElementById("root")
);

// ReactDOM.render(
//   <MouseTracker />,
//   document.getElementById("root")
// );

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


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// // import { Button } from 'antd';
// // import "./styles.css";

// let _deps; // _deps 记录 useEffect 上一次的 依赖

// function useEffect(callback, depArray) {
//   console.log('depArray: ', depArray);
//   const hasNoDeps = !depArray; // 如果 dependencies 不存在
//   console.log('hasNoDeps: ', hasNoDeps);
//   console.log('_deps: ', _deps);
//   const hasChangedDeps = _deps
//     ? !depArray.every((el, i) => el === _deps[i]) // 两次的 dependencies 是否完全相等
//     : true;
//     console.log('hasChangedDeps: ', hasChangedDeps);
// // 如果 dependencies 不存在，或者 dependencies 有变化
//   if (hasNoDeps || hasChangedDeps) {
//     callback();
//     _deps = depArray;
//   }
// }

// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log('count的值: ', count);
//  }, [count]);
//   return (
//     <div>
//       <div>{count}</div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         点击
//       </button>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
