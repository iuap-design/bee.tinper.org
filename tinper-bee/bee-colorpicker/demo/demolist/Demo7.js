/**
 *
 * @title 参数区域是否展示
 * @description 自定义是否隐藏普通用户难以理解的参数区域，有利于界面友好。
 *
 */
import React, { Component } from 'react';
import ColorPicker from '../../src';

class Demo1 extends Component {
  state = {
    value : "#E14C46"
  }

  handleChange = (v) => {
    console.log("选择的色彩信息 ：" , v);
    this.setState({
      value: v.hex || ''
    })
  }
  render () {
    return (
      <ColorPicker
        label="颜色"
        placeholder="请输入十六进制色值"
        value={this.state.value}
        onChange={this.handleChange}
        isParameterArea={false}
        modalProps={{draggable:true}}
      />
    )
  }
}
export default Demo1
