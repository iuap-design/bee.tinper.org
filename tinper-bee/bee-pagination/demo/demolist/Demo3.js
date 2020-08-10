/**
 * @title 无间隔Pagination
 * @description 无间隔Pagination
 */

import React, { Component } from "react";
import Pagination from "../../src";

class Demo3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
  handleSelect(eventKey) {
    this.setState({
      activePage: eventKey
    });
  }
  render() {
    return (
      <Pagination
        first
        last
        prev
        next
        size="md"
        gap={false}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect.bind(this)}
        showJump={true}
        total={100}
      />
    );
  }
}
export default Demo3;
