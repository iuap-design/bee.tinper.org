/**
 * @title 不同尺寸单选`Select`
 * @description `size`参数控制大小
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
          size="lg"
          defaultValue="1" 
          onFocus={(v)=>{console.log('focus',v)}}
          style={{ width: 200, marginRight: 6 }}
          onChange={this.handleChange}
        >
          <Option value="1">一</Option>
          <Option value="2">二</Option>
          <Option value="3" disabled>
            三
          </Option>
          <Option value="4">四</Option>
        </Select>
        <Select
          defaultValue="lucy"
          style={{ width: 200, marginRight: 6 }}
          onChange={this.handleChange}
          showSearch={true}
        >
          <Option value="jack">boyuzhou</Option>
          <Option value="lucy">renhualiu</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="yiminghe">yuzhao</Option>
        </Select>
        <Select
          size="sm"
          defaultValue="lucy"
          style={{ width: 200 }}
          onChange={this.handleChange}
        >
          <Option value="jack">boyuzhou</Option>
          <Option value="lucy">renhualiu</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="yiminghe">yuzhao</Option>
        </Select>
      </div>
    );
  }
}

export default Demo1;
