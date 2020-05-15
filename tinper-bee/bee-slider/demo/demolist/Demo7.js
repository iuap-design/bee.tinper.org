/**
*
* @title 带输入框的slider
* @description 和 数字输入框 组件保持同步。
*
*/

import React, { Component } from 'react';
import Slider from '../../src';

class CustomizedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:45
    };
  }
  onInputChange = (e) =>{
    //console.log(e.target.value)
    let value = parseInt(e.target.value);
    if(value >= 100){
      value = 100;
    }else if(value <= 0 || e.target.value == ''){
      value = 0;
    }
    this.changeValue(value)
  }

  onSliderChange = (value) => {
    //console.log(value);
    this.changeValue(value)
  }
  
  changeValue = (value) =>{
    this.setState({
      value:value
    })
  }
  render() {
    return (
      <div>
        <input type="number" value={this.state.value} onChange={this.onInputChange} />
        <br /><br />
        <Slider value={this.state.value} onChange={this.onSliderChange} />
      </div>
    );
  }
}

class CustomizedRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 20,
      upperBound: 40,
      value: [20, 40],
    };
  }

  onLowerBoundChange = (e) => {
    let upperBound = this.state.upperBound;
    let value = parseInt(e.target.value);

    if(value > upperBound){
      value = upperBound
    }else if(value <0 || value == ''){
      value = 0;
    }

    this.setValue(value,upperBound);
  }

  onUpperBoundChange = (e) => {
    let lowerBound = this.state.lowerBound;
    let value = parseInt(e.target.value);

    if(value < lowerBound){
      value = lowerBound
    }else if( value > 100 ){
      value = 100;
    }
    this.setValue(lowerBound,value);
  }
  
  onSliderChange = (value) => {
    let upperBound = value[1];
    let lowerBound = value[0];
    this.setValue(lowerBound,upperBound);
  }
  
  setValue = (lowerBound,upperBound) =>{
    this.setState({
      lowerBound:lowerBound,
      upperBound:upperBound,
      value:[lowerBound, upperBound] 
    })
  }
  
  render() {
    return (
      <div>
        <label>LowerBound: </label>
        <input type="number" value={this.state.lowerBound} onChange={this.onLowerBoundChange} />
        <br />
        <label>UpperBound: </label>
        <input type="number" value={this.state.upperBound} onChange={this.onUpperBoundChange} />
        <br /><br />
        <Slider.Range value={this.state.value} onChange={this.onSliderChange} />
      </div>
    );
  }
}

class Demo7 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		let style={width:600,marginLeft:50,marginBottom:60}
		return (
			<div>
        <div style={style}>
          <p>Customized Range</p>
          <CustomizedSlider />
        </div>
				<div style={style}>
  				<p>Customized Range</p>
  				<CustomizedRange />
				</div>
			</div>
		)
	}
}

export default Demo7;