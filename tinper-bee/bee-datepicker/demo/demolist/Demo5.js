/**
 *
 * @title 动态的改变时间
 * @description 以「日期时间」为基本单位，基础的日期时间选择控件
 */

import React, { Component } from "react";
import DatePicker from "../../src/index";
import moment from "moment";
import zhCN from "../../src/locale/zh_CN";
import { Row, Col } from "bee-layout";
import Button from "bee-button";
const format = "YYYY-MM-DD HH:mm:ss";
const dateInputPlaceholder = "选择日期";

class Demo5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment()
    };
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };
  onSelect = d => {
    console.log(d);
  };

  handlerChangeDate = () => {
    this.setState({
      value: moment("2011-11-11 11:11:11")
    });
    console.log("click");
  };
  render() {
    return (
      <div>
        <Row>
          <Col md={6}>
            <DatePicker
              format={format}
              locale={zhCN}
              onSelect={this.onSelect}
              onChange={this.handleChange}
              value={this.state.value}
              placeholder={dateInputPlaceholder}
            />
          </Col>
          <Col md={3}>
            <Button onClick={this.handlerChangeDate}>变</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Demo5;
