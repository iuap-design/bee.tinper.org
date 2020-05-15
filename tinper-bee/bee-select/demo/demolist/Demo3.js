/**
 * @title 自定义选项多选`Select`
 * @description 用户在框内输入自定义内容，Select将输入的内容自动纳入下拉选项中一员。
 */

import React, { Component } from "react";
import Select from "../../src";

const Option = Select.Option;

const Children = [];
for (let i = 10; i < 36; i++) {
  Children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class Demo3 extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };
  scrollToEnd = () => {
    console.log("软加载");
  };
  render() {
    return (
      <Select
        tags
        style={{ width: "97%" }}
        searchPlaceholder="标签模式"
        scrollToEnd={this.scrollToEnd}
        onChange={this.handleChange}
      >
        {Children}
      </Select>
    );
  }
}

export default Demo3;
