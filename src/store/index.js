import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

// 定义修改规则
export const countReducer = (state = 0, {type, payload = 1}) => {
  switch (type) {
    case "ADD":
      return state + payload;
    case "MINUS":
      return state - payload;
    default:
      return state;
  }
};

const store = createStore(combineReducers({count: countReducer}), applyMiddleware(thunk));
console.log('store: ', store);

export default store;
