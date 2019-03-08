/**
 * @title 受控的`Select`
 * @description `open`参数控制下拉框展开收起
 */

import React, { Component } from "react";
import Select from "../../src";
import Button from  "bee-button";
import ReactDOM from "react-dom";
const Option = Select.Option;
const OptGroup = Select.OptGroup;

class Demo10 extends Component {
    constructor(props) {
		super(props);
		this.state = {
      open: true
		}
	}
	changeOpen=()=> {
    this.setState({open:!this.state.open});
	}

  render() {
    return (
      <div>
        <Button onClick={this.changeOpen.bind(this)} style={{marginRight:20 + 'px'}}>change select</Button>
        <Select
          defaultValue="lucy"
          style={{ width: 200, marginRight: 6 }}
          onChange={this.changeOpen}
          open={this.state.open}
        >
          <Option value="jack">boyuzhou111</Option>
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

export default Demo10;
