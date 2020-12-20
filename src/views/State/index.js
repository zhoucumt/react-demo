import React from 'react';

export default class BatchedDemo extends React.Component {
  state = {
    number: 0,
  }

  handleClick = () => {
    this.countNumber();
  }

  countNumber() {
    this.setState({
      number: this.state.number + 1
    });

    this.setState({
      number: this.state.number + 1
    });

    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return <button id="myButton" onClick={this.handleClick}>
      Num: {this.state.number}
    </button>
  }
}
