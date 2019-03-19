/**
 *
 * @title 根据输入框的内容，进行自动匹配列表显示
 * @description 用户可以按需进行选择，支持光标操作，回车事件
 *
 */
import React, { Component } from "react";
import AutoComplete from "../../src";

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      options: ["10000(博宇)", "10001(波波)", "10002(李刚)"],
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
