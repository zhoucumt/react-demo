import React, {Component} from 'react';

const tempTypes = {
  c: '摄氏',
  f: '华氏'
}

// 转换为摄氏温度
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 转换为华氏温度
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function IsBoiling(props) {
  const temp = props.celsius;
  if (temp > 100) {
    return <p>水会沸腾</p>;
  }
  return <p>水不会沸腾</p>;
}

function doConvert(temp, callback) {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return ''
  }

  const output = callback(input);
  const res = Math.round(output * 1000) / 1000;
  return res.toString();
}

class TempInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = {temp: ''};
  }

  handleChange(e) {
    this.props.onTempChange(e.target.value);
  }

  render() {
    const temp = this.props.temp;
    const type = this.props.type;
    return (
      <fieldset>
        <legend>输入方式为: {tempTypes[type]}: </legend>
        <input value={temp} onChange={this.handleChange}/>
      </fieldset>
    );
  }
}

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.state = {temp: '', type: 'c'};
    this.handleCChange = this.handleCChange.bind(this);
    this.handleFChange = this.handleFChange.bind(this);
  }
  handleCChange(temp) {
    this.setState({temp, type: 'c'});
  }
  handleFChange(temp) {
    this.setState({temp, type: 'f'});
  }
  render() {
    const type = this.state.type;
    const temp = this.state.temp;
    const celsius = type === 'f' ? doConvert(temp, toCelsius) : temp;
    const fahrenheit = type === 'c' ? doConvert(temp, toFahrenheit) : temp;
    return (
      <div>
        <TempInput temp={celsius} type="c" onTempChange={this.handleCChange}></TempInput>
        <TempInput temp={fahrenheit} type="f" onTempChange={this.handleFChange}></TempInput>
        <IsBoiling celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}
 
export default Temperature;