/**
 *
* @title 输入时校验提示 
 * @description 设置 displayCheckPrompt={true}，显示超出限制范围之后的提示。
 *
 */


import React, { Component } from 'react';
import InputNumber from '../../src';

class Demo10 extends Component {
    render () {
        return (
            <InputNumber
                iconStyle="one"
                min={-100}
                max={100}
                displayCheckPrompt={true}
            />
        )
    }
}

export default Demo10;