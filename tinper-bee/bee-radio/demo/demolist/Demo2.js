/**
 * @title 不同颜色的radio
 * @description `colors`参数控制背景色
 */

import React, { Component } from 'react'
import Radio from '../../src'



class Demo2 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
    	selectedValue: '3'
    };
  }
  handleChange(value) {
    this.setState({selectedValue: value});
  }
  render() {
    return (
      <Radio.RadioGroup
        name="color"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>
          <Radio colors="primary" value="1" >苹果</Radio>
          <Radio colors="success" value="2" >香蕉</Radio>
          <Radio colors="info" value="3" >葡萄</Radio>
          <Radio colors="warning" value="4" >菠萝</Radio>
          <Radio colors="danger" value="5" >梨</Radio>
          <Radio colors="dark" value="6" >石榴</Radio>
      </Radio.RadioGroup>
    )
  }
};

export default Demo2;