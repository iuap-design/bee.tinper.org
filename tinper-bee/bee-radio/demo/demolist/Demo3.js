/**
 * @title 竖方向Radio
 * @description 可以通过style来设置radio样式
 */

import React, { Component } from 'react'
import Radio from '../../src'



class Demo3 extends Component{
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
    const radioStyle = {
      display: 'block'
    };
    return (
      <Radio.RadioGroup
        name="team"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange.bind(this)}>
          <Radio style={radioStyle} value="1" >苹果</Radio>
          <Radio style={radioStyle} value="2" >香蕉</Radio>
          <Radio style={radioStyle} value="3" >葡萄</Radio>
          <Radio style={radioStyle} value="4" >菠萝</Radio>
          <Radio style={radioStyle} value="5" >梨</Radio>
          <Radio style={radioStyle} value="6" >石榴</Radio>
      </Radio.RadioGroup>
    )
  }
};

export default Demo3;