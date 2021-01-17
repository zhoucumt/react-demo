/**
 * react16.3生命周期
 */

import React from "react";
// 定义子组件
class LifeCycle extends React.Component {
  constructor(props) {
    console.log("-----------------进入constructor");
    super(props);
    // state 可以在 constructor 里初始化
    this.state = { text: "子组件的文本" };
  }
  // 1.getDerivedStateFromProps不是componentWillMount的替代品
  // 2.设计的初衷是替代掉componentWillReceiveProps
  // 3.有且仅有一个用途：用props来派生/更新state
  // 4.挂载和更新都会被调用
  // 5.是一个静态方法，因此内部无法访问this
  // 6.接收两个参数props和state：分别代表当前组件接收到的来自父组件的props和当前组件自身的state
  // 7.需要返回一个对象或者null,并且不会对state进行覆盖式的更新
  // 8.react16.4中，任何因素触发的组件更新流程(this.setState和forceUpdate)都会触发getDerivedStateFromProps
  // react16.3中，只有父组件的更新会触发getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("-----------------getDerivedStateFromProps方法执行", props, state);
    return {
      fatherText: props.text
    }
  }
  // 初始化渲染时调用
  componentDidMount() {
    console.log("-----------------componentDidMount方法执行", this.state);
  }
  // 组件更新时调用
  shouldComponentUpdate(prevProps, nextState) {
    console.log("-----------------shouldComponentUpdate方法执行");
    return true;
  }

  // 1.组件更新时调用，执行时机是render方法之后，真实DOM更新之前
  // 2.返回值会作为第3个参数给到componentDidUpdate
  // 3.可以同时获取到更新之前的真实DOM和更新前后的state和props
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("-----------------getSnapshotBeforeUpdate方法执行", prevProps, prevState);
    return "haha";
  }
  // 组件更新后调用
  componentDidUpdate(preProps, preState, valueFromSnapshot) {
    console.log("-----------------componentDidUpdate方法执行", preProps, preState);
    console.log("-----------------从 getSnapshotBeforeUpdate 获取到的值是", valueFromSnapshot);
  }
  // 组件卸载时调用
  componentWillUnmount() {
    console.log("-----------------子组件的componentWillUnmount方法执行");
  }
  // 点击按钮，修改子组件文本内容的方法
  changeText = () => {
    this.setState({
      text: "修改后的子组件文本"
    });
  };
  render() {
    console.log("-----------------render方法执行");
    return (
      <div className="container">
        <button onClick={this.changeText} className="changeText">
          修改子组件文本内容
        </button>
        <p className="textContent">{this.state.text}</p >
        <p className="fatherContent">{this.props.text}</p >
      </div>
    );
  }
}
// 定义 LifeCycle 组件的父组件
export default class LifeCycleContainer extends React.Component {

  // state 也可以像这样用属性声明的形式初始化
  state = {
    text: "父组件的文本",
    hideChild: false
  };
  // 点击按钮，修改父组件文本的方法
  changeText = () => {
    this.setState({
      text: "修改后的父组件文本"
    });
  };
  // 点击按钮，隐藏（卸载）LifeCycle 组件的方法
  hideChild = () => {
    this.setState({
      hideChild: true
    });
  };
  render() {
    return (
      <div className="fatherContainer">
        <button onClick={this.changeText} className="changeText">
          修改父组件文本内容
        </button>
        <button onClick={this.hideChild} className="hideChild">
          隐藏子组件
        </button>
        {this.state.hideChild ? null : <LifeCycle text={this.state.text} />}
      </div>
    );
  }
}
