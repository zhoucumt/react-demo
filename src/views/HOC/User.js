import * as React from "react";

class User extends React.Component {
  inputElement;

  static sayHello() {
    console.error("hello world"); // tslint:disable-line
  }

  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  state = {
    name: "",
    age: 0,
  };

  componentDidMount() {
    this.setState({
      name: this.props.name,
      age: this.props.age,
    });
  }

  onChange = e => {
    this.setState({
      age: e.target.value,
    });
  };

  focus() {
    this.inputElement.focus();
  }

  render() {
    return (
      <div className={"wrapper"}>
        <div className={"nameWrapper"}>姓名：{this.state.name}</div>
        <div className={"ageWrapper"}>
          年龄:
          <input
            className={"input"}
            value={this.state.age}
            onChange={this.onChange}
            type="number"
            ref={input => {
              if (this.props.inputRef) {
                this.props.inputRef(input); // 调用父组件传入的ref回调函数
              }
              this.inputElement = input;
            }}
          />
        </div>
        <div>
          <button className={"button"} onClick={this.focus}>
            获取输入框焦点
          </button>
        </div>
        <div>----------------User组件-------------------</div>
      </div>
    );
  }
}

export default User;
