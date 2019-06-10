/**
 * @title Radio 基本用法
 * @description `defaultValue`设置默认被选中的radio值，`disabled`参数设置是否可用，`onChange`是值改变的回调
 */

import React, { Component } from 'react'
import Radio from '../../src'

class Demo1 extends Component{
  constructor(props) {
  	super(props);
  }
  handleChange = (value) => {
    console.log('onChange：',value)
  }
  render() {
    return (
      <Radio.RadioGroup
        name="fruits"
        defaultValue="1"
        onChange={this.handleChange}
        >
          <Radio value="1" disabled>苹果</Radio>
          <Radio value="2" disabled>香蕉</Radio>
          <Radio value="3" >葡萄</Radio>
          <Radio value="4" >菠萝</Radio>
          <Radio value="5" >梨</Radio>
          <Radio value="6" >石榴</Radio>
      </Radio.RadioGroup>   
    )
  }
};

export default Demo1;