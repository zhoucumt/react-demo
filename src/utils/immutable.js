import {fromJS} from 'immutable';
const immutableState = fromJS ({
  count: 0
});
/**
 * 打印出来是一种Map数据结构
 * Map {
  size: 1,
  _root: ArrayMapNode { ownerID: OwnerID {}, entries: [ [Array] ] },
  __ownerID: undefined,
  __hash: undefined,
  __altered: false
}
 */
// console.log(immutableState);

// toJS用法
// const jsObj = immutableState.toJS ();
// console.log(jsObj);

// get方法
// let res = immutableState.get ('count');
// console.log(res);

// getIn方法
let jsObj = {a: {b: 1}};
let res = jsObj.a.b;
//immutable 对象
let immutableObj = fromJS (jsObj);
let res2 = immutableObj.getIn(['a', 'b']);// 注意传入的是一个数组
console.log(res2);
