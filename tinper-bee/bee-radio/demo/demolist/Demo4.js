/**
 * @title RadioButton 基本使用
 * @description `selectedValue`参数设置被选中的radio值，`onChange`设置值改变的回调
 */

import React, { Component } from 'react'
import Radio from '../../src'

const  RadioGroup = Radio.RadioGroup;

class Demo4 extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
      selectedValue: 'orange',
      selectedValue2: 'apple'
    };
  }
  handleChange(value) {
    this.setState({selectedValue: value});
  }
  handleChange2(value) {
    this.setState({selectedValue2: value});
  }
  render() {
    return (
      <div>
        <Radio.RadioGroup
          name="fruit"
          selectedValue={this.state.selectedValue}
          onChange={this.handleChange.bind(this)}>
            <Radio.RadioButton value="apple">apple</Radio.RadioButton>
            <Radio.RadioButton value="banana">banana</Radio.RadioButton>
            <Radio.RadioButton value="orange">orange</Radio.RadioButton>
        </Radio.RadioGroup>

        <div style={{ marginTop: 16 }}>
          <Radio.RadioGroup 
            selectedValue={this.state.selectedValue2}
            onChange={this.handleChange2.bind(this)}>
            <Radio.RadioButton value="apple">apple</Radio.RadioButton>
            <Radio.RadioButton value="banana" disabled>banana</Radio.RadioButton>
            <Radio.RadioButton value="orange">orange</Radio.RadioButton>
          </Radio.RadioGroup>
        </div>

        <div style={{ marginTop: 16 }}>
          <Radio.RadioGroup selectedValue="apple" disabled>
            <Radio.RadioButton value="apple">apple</Radio.RadioButton>
            <Radio.RadioButton value="banana">banana</Radio.RadioButton>
            <Radio.RadioButton value="orange">orange</Radio.RadioButton>
          </Radio.RadioGroup>
        </div>
      </div>

    )
  }
};

export default Demo4;