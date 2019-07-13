/**
 * @title 基本使用
 * @description `disabled`参数设置是否禁用，`size`参数控制大小
 */

import React, { Component } from "react";
import Select from "../../src";
import ReactDOM from "react-dom";
const Option = Select.Option;
const OptGroup = Select.OptGroup;

class Demo1 extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
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
          <Option value="completed" disabled>
            已办结
          </Option>
          <Option value="termination">终止</Option>
        </Select>
      </div>
    );
  }
}

export default Demo1;
