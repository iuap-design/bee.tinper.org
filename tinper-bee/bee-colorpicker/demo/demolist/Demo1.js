/**
*
* @title 取色板
* @description 提供预制色板的取色板组件
*
*/
import React, { Component } from 'react';
import ColorPicker from '../../src';

class Demo1 extends Component {
    state = {
        value : "#E14C46"
    }

    handleChange = (v) => {
        console.log("选择的色彩信息 ：" , v);
        this.setState({
            value: v.hex || ''
        })
    }
    render () {
        return (
            <ColorPicker 
                label="颜色"
                placeholder="请输入十六进制色值"
                value={this.state.value} 
                onChange={this.handleChange}
            />
        )
    }
}
export default Demo1