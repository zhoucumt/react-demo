// import React from 'react';
// import './App.css';
// // import RefOne from './views/RefPages/refs';
// // import RefThree from './views/RefPages/createRef';
// // import RefFour from './views/RefPages/forwardRef';
// // import Home from './views/Home';
// // import List from './views/List';
// // import Temperature from './views/Temperature';
// // import ContextPage from './views/ContextPage';
// // import HooksPage from './views/HooksPage';
// import TodoApp from "./views/TodoApp";
// // import CallbackPage from './views/CallbackPage';

// function App() {
//   const ref = React.createRef();
//   return (
//     <div className="App">
//       {/* <RefOne /> */}
//       {/* <RefThree /> */}
//       {/* <RefFour ref={ref}>Click me!</RefFour>
//       <Home name={'Tom'} />
//       <List />
//       <Temperature></Temperature> */}
//       {/* <RefFour>aaa</RefFour> */}
//       {/* <ContextPage /> */}
//       {/* <HooksPage /> */}
//       <TodoApp />
//       {/* <CallbackPage /> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";


import HomePage from "./views/HomePage/";
import UserPage from "./views/UserPage/";
import LoginPage from "./views/LoginPage/";
import _404Page from "./views/_404Page/";

export default function App(props) {
  return (
    <div className="app">
      {/* <RouteComponentPage /> */}
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>

        <Switch>
          <Route
            exact
            path="/"
            children={children}
            // component={HomePage}
            //render={render}
          />
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />

          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}


function children(props) {
  console.log("children props", props); //sy-log
  return <div>children</div>;
}

function render(props) {
  console.log("render props", props); //sy-log
  return <div>render</div>;
}

