/**
*
* @title 禁用透明度
* @description 添加 disabledAlpha 属性可禁用透明度设置
*
*/
import React, { Component } from 'react';
import ColorPicker from '../../src';

class Demo5 extends Component {
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
                disabledAlpha
                label="颜色"
                placeholder="请输入十六进制色值"
                value={this.state.value} 
                onChange={this.handleChange}
            />
        )
    }
}
export default Demo5