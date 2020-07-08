import React, {Component} from 'react';

// export default class RefFour extends Component {
//     constructor(props) {
//         super(props);
//         this.myFourRef = React.forwardRef();
//     }
//     componentDidMount() {
//         console.log(this.myFourRef.current);
//     }
//     render() {
//         return <Child ref={this.myFourRef}/>
//     }
// }

// class Child extends Component {
//     render() {
//         return (
//             <div className="child">child</div>
//         );
//     }
// }


// export default function RefFour(props) {
//     return (
//       <button className="FancyButton">
//         {props.children}
//       </button>
//     );
// }


const RefFour = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
));
export default RefFour
