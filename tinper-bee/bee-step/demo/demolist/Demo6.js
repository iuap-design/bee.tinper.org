/**
*
* @title 不同尺寸的 Step
* @description size 可设置为 small，默认是 default
*
*/

import React, { Component } from 'react';
import Step from '../../src';

class Demo6 extends Component {
  render () {
      return (
          <Step.Steps current={1} size="small">
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Step.Steps>
      )
  }
}

export default Demo6;
