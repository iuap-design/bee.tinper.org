/**
 * @title 获取选项的 name 和 value
 * @description 获取 Option 标签的值及展示的
 */

import React, { Component } from "react";
import Select from "../../src";
const Option = Select.Option;

class Demo12 extends Component {
  handleChange = (value, _props) => {
    console.log(`value: ${value}`);
    console.log(`name: ${_props.props.children}`)
  };  

  render() {
    return (
      <div>
        <Select
          defaultValue="all"
          style={{ width: 200, marginRight: 6 }}
          onChange={this.handleChange}
          showSearch={true}
          allowClear={true}
        >
          <Option value="all">全部</Option>
          <Option value="confirming">待确认</Option>
          <Option value="executing">执行中</Option>
          <Option value="completed">已办结</Option>
          <Option value="termination">终止</Option>
        </Select>
      </div>
    );
  }
}

export default Demo12;
