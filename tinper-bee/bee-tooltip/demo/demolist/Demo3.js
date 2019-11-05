/**
 * @title 受控显示和隐藏
 * @description `visible`属性控制
 */


import React, { Component } from 'react';
import Tooltip from '../../src';
import FormControl from 'bee-form-control';

class Demo3 extends Component {
    state = {
        visible: false,
        value: ''
    }

    handleChange = (value) => {
        let newState = {
            value: value
        }
        if (Number(value) > 5) {
            newState.visible = false
        } else {
            newState.visible = true
        }
        this.setState(newState)
    }

    onFocus = () => {
        let { value } = this.state;
        if (Number(value) < 5) {
            this.setState({
                visible: true
            })
        }
    }

    onBlur = () => {
        this.setState({
            visible: false
        })
    }

    //使用控制弹出层显示时的钩子函数
    onVisibleChange = () => {
        console.log('visible changed.')
    }

    render () {
        let { visible, value } = this.state;
        let tip = (
            <div>
                输入的值必须大于5
			</div>
        )

        return (
            <div className="demo-tooltip">
                <Tooltip
                    visible={visible}
                    onVisibleChange={this.onVisibleChange}
                    placement="top"
                    overlay={tip}>
                    <FormControl
                        value={value}
                        onChange={this.handleChange}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    />
                </Tooltip>
            </div>
        )
    }
}

export default Demo3;