import * as React from "react";
// import * as styles from './index.module.less';

function HOC(WrappedComponent) {
  let inputElement = null;

  function handleClick() {
    inputElement.focus();
  }

  function wrappedComponentStaic() {
    WrappedComponent.sayHello();
  }

  return props => (
    <div className={`hocWrapper, ${JSON.stringify(props)}`}>
      <WrappedComponent
        inputRef={el => {
          inputElement = el;
        }}
        {...props}
      />
      <input
        type="button"
        value="获取子组件输入框焦点"
        onClick={handleClick}
        className={"focusButton"}
      />
      <input
        type="button"
        value="调用子组件static"
        onClick={wrappedComponentStaic}
        className={"callButton"}
      />
    </div>
  );
}

export default HOC;
