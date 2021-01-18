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
const jsObj = immutableState.toJS ();
console.log(jsObj);
