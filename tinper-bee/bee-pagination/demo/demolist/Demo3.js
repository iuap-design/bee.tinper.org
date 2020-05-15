/**
 * @title 有间隔Pagination
 * @description 有间隔Pagination
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
        prev
        next
        size="sm"
        gap={true}
        items={5}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect.bind(this)}
      />
    );
  }
}
export default Demo3;
