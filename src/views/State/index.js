import React from 'react';
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom';
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

    // setTimeout(() => {
    //   this.setState({
    //     number: this.state.number + 4
    //   });
    //   this.setState({
    //     number: this.state.number + 5
    //   });
    //   this.setState({
    //     number: this.state.number + 6
    //   });
    // });

    setTimeout(() => {
      // 通过这个api，让react拿回控制权，执行canMerge逻辑
      batchedUpdates(() => {
        this.setState({
            number: this.state.number + 4
        })
        this.setState({
            number: this.state.number + 5
        })
        this.setState({
            number: this.state.number + 6
        })
      });

    })
  }

  render() {
    console.log('render');
    return <button id="myButton" onClick={this.handleClick}>
      Num: {this.state.number}
    </button>
  }
}
