/**
*
* @title 设置必输项
* @description `required`参数设置是否必填
*
*/
import React, { Component } from 'react';
import ColorPicker from '../../src';

class Demo2 extends Component {
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
                className="demo2"
                placeholder="请输入十六进制色值"
                value={this.state.value} 
                onChange={this.handleChange}
                label="颜色"
                required={true}
            />
        )
    }
}
export default Demo2