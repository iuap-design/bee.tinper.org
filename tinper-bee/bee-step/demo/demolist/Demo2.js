/**
*
* @title 自定义图标
* @description
*
*/

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Step from '../../src';

class Demo2 extends Component {
  render () {
      return (
        <Step.Steps>
          <Step status="finish" title="登录" icon={<Icon type="uf-users-o" />} />
          <Step status="finish" title="身份认证" icon={<Icon type="uf-personin-o" />} />
          <Step status="process" title="支付" icon={<Icon type="uf-creditcard" />} />
          <Step status="wait" title="交易完成" icon={<Icon type="uf-correct-2" />} />
        </Step.Steps>
      )
  }
}

export default Demo2;