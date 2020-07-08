import React, {Component} from 'react';

export default class RefThree extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        console.log(this.myRef.current);
    }
    render() {
      return <input ref={this.myRef}/>
    }
}
