/**
 * @title 默认设置下拉框获取焦点事件 `默认获取焦点autofocus`
 * @description `autofocus`参数控制是否需要获取焦点。
 * 同时暴露两个api  onFocus、onBlur 返回当前选中的数据
 */

import React, { Component } from "react";
import Select from "../../src";
import ReactDOM from "react-dom";
const Option = Select.Option;
const OptGroup = Select.OptGroup;

class Demo8 extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };  
  handFocus = value => {
    console.log(`获取焦点事件`);
  };
  onBlur = value => {
    console.log(`onBlur`);
  };

  render() {
    return (
      <div>
        <Select
          defaultValue="all"
          style={{ width: 200, marginRight: 6 }}
          onChange={this.handleChange}
          onFocus={this.handFocus}
          onBlur={this.onBlur}
          autofocus
        >
          <Option value="all">全部</Option>
          <Option value="confirming">待确认</Option>
          <Option value="executing">执行中</Option>
          <Option value="completed" disabled>
            已办结
          </Option>
          <Option value="termination">终止</Option>
        </Select>
        <Select
          defaultValue="confirming"
          style={{ width: 200, marginRight: 6 }}
          onChange={this.handleChange}
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

export default Demo8;
