/**
 * @title 设置data数组对象来自动生成option
 * @description 必须设置key，value。根据需要设置disabed
 */

import React, { Component } from "react";
import Select from "../../src";

const Option = Select.Option;

let selectDataSource = [
  {
    key: "张三",
    value: "zhangsan"
  },
  {
    key: "李四",
    value: "lisi"
  },
  {
    key: "王五",
    value: "wangwu"
  }
];

class Demo7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataSource: [
        {
          key: "其他数据",
          value: "qita"
        }
      ]
    };
  }
  handleChange = value => {
    if (value) {
      this.setState({
        DataSource: [
          {
            key: "张三三",
            value: "zhangsansan",
            disabled: true
          },
          {
            key: "李四四",
            value: "lisisi"
          },
          {
            key: "王五五",
            value: "wangwuwu"
          }
        ]
      });
    }
  };

  render() {
    return (
      <div>
        <Select
          style={{ width: 200 }}
          placeholder="Select a person"
          onChange={this.handleChange}
          data={selectDataSource}
        />
        <Select
          style={{ width: 200, marginLeft: "5px" }}
          placeholder="Select a person"
          data={this.state.DataSource}
        />
      </div>
    );
  }
}

export default Demo7;
