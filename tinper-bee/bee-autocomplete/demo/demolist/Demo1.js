/**
 *
 * @title 根据输入框的内容，进行自动匹配列表显示
 * @description 通过`options`设置自动完成的数据源。支持光标操作，回车事件。
 *
 */
import React, { Component } from "react";
import AutoComplete from "../../src";

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      options: ["10000", "10001", "10002", "11000", "12010"],
      placeholder: "查找关键字,请输入1",
      disabled: false
    };
  }
  onFormChange = value => {
    console.log(value);
    this.setState({
      value: value
    });
  };
  render() {
    let { value, options, placeholder, disabled } = this.state;
    return (
      <div className="demo" style={{ marginBottom: "90px" }}>
        <AutoComplete
          value={value}
          disabled={disabled}
          options={options}
          placeholder={placeholder}
          onValueChange={value => this.onFormChange(value)}
        />
      </div>
    );
  }
}

export default Demo1;
