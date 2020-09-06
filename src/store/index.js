import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({count: countReducer}),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
