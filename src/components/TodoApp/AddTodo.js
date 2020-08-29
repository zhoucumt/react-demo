import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  // updateInput = input => {
  //   this.setState({ input });
  // };
  updateInput = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({input: ''});
  };

  render() {
    // console.log('props: ', this.props);
    return (
      <div>
        {/* <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        /> */}
        <input
          onChange={this.updateInput}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  {addTodo}
)(AddTodo);
// export default AddTodo;
