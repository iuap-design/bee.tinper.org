/**
 * @title 自定义自动填充单选`Select`
 * @description 常用邮箱后缀自动填充。
 */

import React, { Component } from "react";
import Select from "../../src";

const Option = Select.Option;

class Demo5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }
  handleChange = value => {
    let options;
    if (!value || value.indexOf("@") >= 0) {
      options = [];
    } else {
      options = ["gmail.com", "163.com", "qq.com"].map(domain => {
        const email = `${value}@${domain}`;
        return <Option key={email}>{email}</Option>;
      });
    }
    this.setState({ options });
  };

  render() {
    return (
      <Select
        combobox
        style={{ width: 200 }}
        onChange={this.handleChange}
        filterOption={false}
        placeholder="Enter the account name"
      >
        {this.state.options}
      </Select>
    );
  }
}

export default Demo5;
