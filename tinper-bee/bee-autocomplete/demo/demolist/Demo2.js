/**
 *
 * @title 动态改变options参数
 * @description 用户可以按需进行选择，支持光标操作，回车事件
 *
 */
import React, { Component } from "react";
import AutoComplete from "../../src";

class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      options: [],
      placeholder: "查找关键字,请输入a",
      disabled: false
    };
  }
  onFormChange = value => {
    if (value !== "a") {
      this.setState({
        value: value,
        options: ["ab", "abbbbb", "abbbbb", "aaaab"]
      });
    } else {
      this.setState({
        value: value,
        options: ["a", "aa", "aaa", "aaaa"]
      });
    }
  };
  render() {
    let { value, options, placeholder, disabled } = this.state;
    return (
      <div className="demo" style={{ marginBottom: "110px" }}>
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

export default Demo2;
