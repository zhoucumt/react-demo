import React from "react";
import HOC from "./Hoc";
import User from "./User";

const EnhanceUser = HOC(User);

class OperateRefs extends React.Component {
  render() {
    return <EnhanceUser name="小明" age={12} />;
  }
}

export default OperateRefs;
