import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// mapStateToProps用法1
const mapStateToProps = ({count}) => ({count});

class ReactReduxPage extends Component {
  render() {
    console.log("props", this.props); //sy-log
    const {count, dispatch, add, minus} = this.props;
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={() => dispatch({type: "ADD", payload: 100})}>
          dispatch add
        </button>
        <button onClick={add}> add</button>
        <button onClick={minus}> minus</button>
      </div>
    );
  }
}
// export default ReactReduxPage;
export default connect(mapStateToProps)(ReactReduxPage);
