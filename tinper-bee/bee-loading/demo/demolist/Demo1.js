/**
 *
 * @title 基础Loading
 * @description 设置`loadingType`来修改Loading样式。默认是'rotate'。
 *
 */

import React, { Component } from 'react';
import Loading from '../../src';
import Button from 'bee-button';

class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRotate: false,
        showLine: false
    }
  }

  handleShow = () => {
      this.setState({
          showRotate: true
      })
      setTimeout(() => {
          this.setState({
              showRotate: false
          })
      }, 3000)

  }

    handleShowLine = () => {
        this.setState({
            showLine: true
        })
        setTimeout(() => {
            this.setState({
                showLine: false
            })
        }, 3000)

    }

  render() {
    return (
      <div>
        <Button
            colors="primary"
            onClick={this.handleShow}>
          点击显示默认loading
        </Button>
        <Loading
            fullScreen
            showBackDrop={true}
            show={this.state.showRotate}
        />
        <Button
            colors="primary"
            style={{ marginLeft: 50 }}
            onClick={this.handleShowLine}>
          点击显示line loading
        </Button>
        <Loading
            fullScreen
            showBackDrop={true}
            loadingType="line"
            show={this.state.showLine}
        />
      </div>
    )
  }
}

export default Demo1;