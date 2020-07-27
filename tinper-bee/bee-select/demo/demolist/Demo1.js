/**
 * @title 基本使用
 * @description `disabled`参数设置是否禁用，`size`参数控制大小
 */

import React, { Component } from "react";
import Select from "../../src";

const Option = Select.Option;

class Demo1 extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };  

  render() {
    return (
      <div>
        <Select
          placeholder="请选择"
          defaultValue="全部"
          style={{ width: 200, marginRight: 6 }}
          onChange={this.handleChange}
          showSearch={true}
          allowClear={true}
        >
          <Option value="全部">全部</Option>
          <Option value="待确认">待确认</Option>
          <Option value="执行中">执行中</Option>
          <Option value="已办结" disabled>
            已办结
          </Option>
          <Option value="终止">终止</Option>
        </Select>
      </div>
    );
  }
}

export default Demo1;
