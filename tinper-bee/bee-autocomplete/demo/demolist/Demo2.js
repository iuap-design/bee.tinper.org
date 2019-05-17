/**
 *
 * @title 动态改变 options 数据源
 * @description `onSelectOption`为下拉框选中时触发的回调函数
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
      placeholder: "查找关键字,请输入a"
    };
  }

  onFormChange = value => {
    this.setState({
      value: value,
      options: !value ? [] : [value, value + value, value + value + value]
    });
  };

  handleSelectChange = value => {
    console.log('onSelectOption',value);
  }

  render() {
    let { value, options, placeholder } = this.state;
    return (
      <div className="demo" style={{ marginBottom: "110px" }}>
        <AutoComplete
          value={value}
          options={options}
          placeholder={placeholder}
          onValueChange={value => this.onFormChange(value)}
          onSelectOption={value => this.handleSelectChange(value)}
        />
      </div>
    );
  }
}

export default Demo2;
