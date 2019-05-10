/**
*
* @title 基础 Step
* @description current 标记当前进行哪一步
*
*/

import React, { Component } from 'react';
import Step from '../../src';

class Demo1 extends Component {
  render () {
      return (
          <Step.Steps current={1}>
            <Step title="已完成" description="这是一段描述" />
            <Step title="进行中" description="这是一段描述" />
            <Step title="未开始" description="这是一段描述" />
          </Step.Steps>
      )
  }
}

export default Demo1;
