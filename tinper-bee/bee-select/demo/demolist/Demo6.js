/**
 * @title 搜索单选`Select`
 * @description 从下拉选中，获取当前选中自定义对象item data
 */
import React, { Component } from "react";
import Select from "../../src";

const Option = Select.Option;

const dataList = [
  {key:"1",value:"Jack",label:"Jack"},
  {key:"2",value:"lucy",label:"lucy"},
  {key:"3",value:"tom",label:"tom"}
]

class Demo6 extends Component {

  constructor(props) {
    super(props);
  }

  /**
   * 获取选中对象数据
   */
  onSelect = (value,{props:{item}}) => {
    console.log(`selected ${value}`);
    console.log(`selected item `,item);
  };

  render() {
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onSelect={this.onSelect}
        onChange={this.handleChange}
      >
        {
          dataList.map(da=><Option key={da.key} value={da.value} item={da} >{da.label}</Option>)
        }
      </Select>
    );
  }
}

export default Demo6;
