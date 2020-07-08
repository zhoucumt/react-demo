import React, {Component} from 'react';

// export default class RefOne extends Component {
//     componentDidMount() {
//        this.refs['box'].innerHTML = '这是 div 盒子,通过 ref 获取';
//     }
//     render() {
//         return(
//             <div ref="box"></div>
//         );
//     }
// }

export default class RefOne extends Component {
    componentDidMount() {
      this.input.value = '这是输入框默认值';
      this.input.focus();
    }
    render() {
      return(
        <input ref={comp => { this.input = comp; }} />
      );
    }
  }
  
