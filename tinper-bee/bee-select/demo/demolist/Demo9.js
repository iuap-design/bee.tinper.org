/**
 * @title 动态渲染Option的多选
 * @description Option标签与Children自定义数据列表组合的渲染方式
 */

import React, { Component } from "react";
import Select from "../../src";

const Option = Select.Option;
const OptGroup = Select.OptGroup;

const Children = ['a10','b11','c12','d13','e14','f15'];

class Demo9 extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };
  render() {
    return (
      <Select
        multiple
        style={{ width: "97%" }}
        searchPlaceholder="标签模式"
        onChange={this.handleChange}
      >
        <Option key='first'>first</Option>
        {Children.map((value) => {
          return <Option key={value}>{value}</Option>
        })}
      </Select>
    );
  }
}

export default Demo9;
