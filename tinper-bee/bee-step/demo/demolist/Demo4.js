/**
*
* @title vertical Step
* @description 
*
*/

import React, { Component } from 'react';
import Step from '../../src';

const Steps = Step.Steps;

class Demo4 extends Component {
  render () {
      return (
        <div>
          <Steps direction="vertical" size="small" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
         </Steps>
        </div>
      )
  }
}

export default Demo4;