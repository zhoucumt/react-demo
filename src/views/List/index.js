import React, {Component} from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   let state = this.state.count;
  //   this.setState(state => ({
  //     count: state.count + 1
  //   }));
  //   // this.setState({
  //   //   count: this.state.count + 1
  //   // });
  // }
  handleClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
 
export default List;
