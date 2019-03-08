/**
 *
 * @title 不同大小的开关
 * @description 通过`size`属性控制开关的大小
 *
 */

import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import Switch from "../../src";

class Demo2 extends Component {
  render() {
    return (
      <Row>
        <Col sm={2}>
          <Switch size="sm" />
        </Col>
        <Col sm={2}>
          <Switch />
        </Col>
        <Col sm={2}>
          <Switch size="lg" />
        </Col>
      </Row>
    );
  }
}

export default Demo2;
