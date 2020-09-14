import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// mapStateToProps用法1
// const mapStateToProps = ({count}) => ({count});

// mapStateToProps用法2
const mapStateToProps = (state) => {
  return {
    count: state.count,
    // 自己定义一个属性
    num: 2
  }
}


class ReactReduxPage extends Component {
  render() {
    console.log("props", this.props); //sy-log
    const {count, dispatch, add, minus, num} = this.props;
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <p>num: {num}</p>
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
