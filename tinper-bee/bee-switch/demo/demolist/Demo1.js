/**
 *
 * @title 默认开关
 * @description
 *
 */
import React, { Component } from "react";
import { Row, Col } from "bee-layout";
import Switch from "../../src";

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }
  onChange = () => {
    this.setState({
      checked: !this.state.checked
    });
  };
  render() {
    return (
      <Row>
        <Col sm={2}>
          <Switch />
        </Col>
        <Col sm={2}>
          <Switch
            checked={this.state.checked}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

export default Demo1;
