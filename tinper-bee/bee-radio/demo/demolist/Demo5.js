/**
 * @title 红色填充的 Radio
 * @description `inverse` 参数设置选中为红色填充。
 */

import React, { Component } from 'react'
import Radio from '../../src'



class Demo1 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: '1'
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
          <Radio value="1" inverse>苹果</Radio>
          <Radio value="2" inverse>香蕉</Radio>
          <Radio value="3" inverse>葡萄</Radio>
      </Radio.RadioGroup>   
    )
  }
};

export default Demo1;