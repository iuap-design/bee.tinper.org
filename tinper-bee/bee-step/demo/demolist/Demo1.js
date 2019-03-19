/**
*
* @title 常用基础 Step
* @description current 标记当前进行哪一步
*
*/

import React, { Component } from 'react';
import Step from '../../src';

class Demo1 extends Component {
  render () {
      return (
          <Step.Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Step.Steps>
      )
  }
}

export default Demo1;
