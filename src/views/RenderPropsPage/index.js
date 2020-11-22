import React, {Component} from 'react';

class MouseTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <h1>移动鼠标</h1>
        <p>你当前的鼠标位置是 {this.state.x}, {this.state.y}</p>
      </div>
    );
  }
}

export default MouseTracker;