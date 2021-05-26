/**
 * react15生命周期
 * 组件：
 * 虚拟DOM：核心算法的基石
 * render:生成虚拟DOM
 * ReactDOM.render:虚拟DOM => 真实DOM
 */
import React from "react";
// 定义子组件
class LifeCycle extends React.Component {
  constructor(props) {
    console.log("子组件进入constructor");
    super(props);
    // state 可以在 constructor 里初始化
    this.state = { text: "子组件的文本" };
  }
  // 初始化渲染时调用
  componentWillMount() {
    console.log("子组件componentWillMount方法执行", this.state);
  }
  // 初始化渲染时调用
  componentDidMount() {
    console.log("子组件componentDidMount方法执行");
  }
  // 父组件修改组件的props时会调用
  // 只在更新阶段调用
  // nextProps：接收到的新的props
  componentWillReceiveProps(nextProps) {
    console.log("子组件componentWillReceiveProps方法执行", nextProps, this.props);
  }
  // 组件更新时调用
  shouldComponentUpdate(nextProps, nextState) {
    console.log("子组件shouldComponentUpdate方法执行", nextProps, nextState);
    return true;
  }

  // 组件更新时调用
  componentWillUpdate(nextProps, nextState) {
    console.log("子组件componentWillUpdate方法执行", nextProps, nextState);
  }
  // 组件更新后调用
  componentDidUpdate(prevProps, prevState) {
    console.log("子组件componentDidUpdate方法执行", prevProps, prevState);
  }
  // 组件卸载时调用
  componentWillUnmount() {
    console.log("子组件的componentWillUnmount方法执行");
  }
  // 点击按钮，修改子组件文本内容的方法
  changeText = () => {
    this.setState({
      text: "修改后的子组件文本"
    });
  };
  render() {
    console.log("子组件render方法执行");
    return (
      <div className="container">
        <button onClick={this.changeText} className="changeText">
          修改子组件文本内容
        </button>
        <p className="textContent">{this.state.text}</p>
        <p className="fatherContent">{this.props.text}</p>
      </div>
    );
  }
}
// 定义 LifeCycle 组件的父组件
export default class LifeCycleContainer extends React.Component {
  constructor(props) {
    console.log("===========父组件进入constructor");
    super(props);
    // state 可以在 constructor 里初始化
    this.state = {
      text: "父组件的文本",
      hideChild: false,
      // 新增的只与父组件有关的 state
      ownText: "仅仅和父组件有关的文本"
    };
  }
  // 初始化渲染时调用
  componentWillMount() {
    console.log("===========父组件componentWillMount方法执行", this.state);
  }
  // 初始化渲染时调用
  componentDidMount() {
    console.log("===========父组件componentDidMount方法执行");
  }
  // 父组件修改组件的props时会调用
  // 只在更新阶段调用
  // nextProps：接收到的新的props
  componentWillReceiveProps(nextProps) {
    console.log("===========父组件componentWillReceiveProps方法执行", nextProps, this.props);
  }
  // 组件更新时调用
  shouldComponentUpdate(nextProps, nextState) {
    console.log("===========父组件shouldComponentUpdate方法执行", nextProps, nextState);
    return true;
  }

  // 组件更新时调用
  componentWillUpdate(nextProps, nextState) {
    console.log("===========父组件componentWillUpdate方法执行", nextProps, nextState);
  }
  // 组件更新后调用
  componentDidUpdate(prevProps, prevState) {
    console.log("===========父组件componentDidUpdate方法执行", prevProps, prevState);
  }
  // 组件卸载时调用
  componentWillUnmount() {
    console.log("===========父组件的componentWillUnmount方法执行");
  }

  // state 也可以像这样用属性声明的形式初始化
  // state = {
  //   text: "父组件的文本",
  //   hideChild: false,
  //   // 新增的只与父组件有关的 state
  //   ownText: "仅仅和父组件有关的文本",
  // };
  // 点击按钮，修改父组件文本的方法
  changeText = () => {
    this.setState({
      text: "修改后的父组件文本"
    });
  };
  // 修改 ownText 的方法
  // 虽然子组件没有ownText属性，但依然会触发componentWillReceiveProps
  changeOwnText = () => {
    this.setState({
      ownText: "修改后的父组件自有文本"
    });
  };
  // 点击按钮，隐藏（卸载）LifeCycle 组件的方法
  hideChild = () => {
    this.setState({
      hideChild: true
    });
  };
  render() {
    console.log('========父组件render方法')
    return (
      <div className="fatherContainer">
        {/* 新的button按钮 */}
        <button onClick={this.changeOwnText} className="changeText">
          修改父组件自有文本内容
        </button>
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

// 父constructor => 父componentWillMount => 父render => 
// 子constructor => 子componentWillMount => 子render => 子componentDidMount
// => 父componentDidMount
