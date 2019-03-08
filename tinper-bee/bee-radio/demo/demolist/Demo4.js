/**
 * @title RadioButton
 * @description 
 */

import React, { Component } from 'react'
import Radio from '../../src'

const  RadioGroup = Radio.RadioGroup;

class Demo4 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: 'banana'
    };
  }
  handleChange(value) {
    this.setState({selectedValue: value});
  }
  render() {
    return (
      <Radio.RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>

          <Radio.RadioButton value="apple">apple</Radio.RadioButton>

          <Radio.RadioButton value="banana">banana</Radio.RadioButton>

          <Radio.RadioButton  value="orange">orange</Radio.RadioButton>

      </Radio.RadioGroup>
     

    )
  }
};

export default Demo4;