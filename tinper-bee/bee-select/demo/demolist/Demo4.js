/**
 * @title 简易级联单选`Select`
 * @description 常用语城市级联的选择。
 */

import React, { Component } from "react";
import Select from "../../src";

const Option = Select.Option;

const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"]
};

class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0]
    };
  }
  handleProvinceChange = value => {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0]
    });
  };
  onSecondCityChange = value => {
    this.setState({
      secondCity: value
    });
  };
  render() {
    const provinceOptions = provinceData.map(province => (
      <Option key={province}>{province}</Option>
    ));
    const cityOptions = this.state.cities.map(city => (
      <Option key={city}>{city}</Option>
    ));
    return (
      <div>
        <Select
          defaultValue={provinceData[0]}
          style={{ width: 90, marginRight: 6 }}
          onChange={this.handleProvinceChange}
        >
          {provinceOptions}
        </Select>
        <Select
          value={this.state.secondCity}
          style={{ width: 90 }}
          onChange={this.onSecondCityChange}
        >
          {cityOptions}
        </Select>
      </div>
    );
  }
}

export default Demo4;
