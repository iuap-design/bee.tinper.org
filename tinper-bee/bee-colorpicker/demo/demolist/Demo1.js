/**
*
* @title 拾色器
* @description 提供预制色板的拾色器组件
*
*/
import React, { Component } from 'react';
import ColorPicker from '../../src';

class Demo1 extends Component {
    state = {
        value : "#E14C46"
    }

    handleChange = (v) => {
        console.log(v);
        this.setState({
            value: v.hex || ''
        })
    }
    render () {
        return (
            <ColorPicker 
                placeholder="请输入十六进制色值"
                value={this.state.value} 
                onChange={this.handleChange}
                label="颜色"
            />
        )
    }
}
export default Demo1