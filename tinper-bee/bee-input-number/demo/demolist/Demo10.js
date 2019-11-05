/**
 *
* @title 输入时校验提示 
 * @description 结合 Tooltip 组件，实现确定超出限制之后的提示。
 *
 */


import React, { Component } from 'react';
import InputNumber from '../../src';
import Form from 'bee-form';
import Tooltip from 'bee-tooltip';

class Demo10 extends Component {
    render () {
        let { getFieldProps } = this.props.form;
        return (
            <Tooltip
                trigger={'focus'}
                overlay={"请输入 0-100 之间的整数"}
                placement="topLeft"
            >
                <InputNumber
                    iconStyle="one"
                    min={0}
                    max={100}
                    {...getFieldProps("num", {
                        initialValue: ""
                    })}
                />
            </Tooltip>
        )
    }
}

export default Form.createForm()(Demo10);