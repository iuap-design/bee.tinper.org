/**
 *
* @title 基础示例 
 * @description 最简单输入控制
 *
 */


import React, { Component } from 'react';
import InputNumber from '../../src';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            value: value
        })
    }
    render () {
        return (
            <div>
                <InputNumber
                    iconStyle="one"
                    min={-999999}
                    max={999999}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </div>
        )
    }
}

export default Demo1;