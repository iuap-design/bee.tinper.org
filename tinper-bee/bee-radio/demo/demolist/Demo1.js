/**
 * @title Radio
 * @description 基本用法 
 */

import React, { Component } from 'react'
import Radio from '../../src'



class Demo1 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: ''
    };
  }
  handleChange(value) {
    this.setState({selectedValue: value});
  }
  render() {
    return (
      <Radio.RadioGroup
        name="fruits"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>
          <Radio value="1" >苹果</Radio>
          <Radio value="2" >香蕉</Radio>
          <Radio value="3" >葡萄</Radio>
          <Radio value="4" >菠萝</Radio>
          <Radio value="5" >梨</Radio>
          <Radio value="6" >石榴</Radio>
      </Radio.RadioGroup>   
    )
  }
};

export default Demo1;