/**
 *
 * @title 传入自定义“确认”和“取消”按钮
 *
 */

import React, { Component } from "react";
import Button from "bee-button";
import Popconfirm from "../../src";


function CloseBtn() {
  return (
    <Button colors="info" size="sm">
      确定
    </Button>
  );
}
class Demo5 extends Component {
  cancel = () => {
    console.log("cancel");
  };

  close = () => {
    console.log("close");
  };

  render() {
    const content = "您喜欢使用tinper-bee组件库吗？";
    return (
      <div className="demoPadding">
        <Popconfirm
          trigger="click"
          placement="right"
          content={content}
          onCancel={this.cancel}
          onClose={this.close}
          cancel_btn={
            <Button shape="border" colors="info" size="sm">
              取消
            </Button>
          }
          close_btn={CloseBtn()}
        >
          <Button colors="primary">Popconfirm</Button>
        </Popconfirm>
      </div>
    );
  }
}

export default Demo5;
