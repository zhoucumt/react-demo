import React, {Component} from "react";
// import {Redirect} from "../k-react-router-dom/";
import store from '../../store/index';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  handleClick = () => {
    // this.setState(pevState => ({number: pevState.number + 1}));
    // console.log(this.state.number);
    // this.setState(pevState => ({number: pevState.number + 1}));
    // console.log(this.state.number);

    // 顺序： 0 0 2 2
    // this.setState(pevState => ({number: pevState.number + 1}), () => {
    //   console.log(this.state.number);
    // });
    // console.log(this.state.number);
    // this.setState(pevState => ({number: pevState.number + 1}), () => {
    //   console.log(this.state.number);
    // });
    // console.log(this.state.number);
  }

  render() {
    let {number} = this.state;
    return (
      <div>
        <h3>HomePage</h3>
        <p>{number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
