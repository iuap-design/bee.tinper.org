/**
*
* @title 自动计算色值
* @description 根据选中的颜色自动计算比其 浅一色度/深一色度 的色值，可应用于选择主色后，自动计算hover和active状态的色值
*
*/
import React, { Component } from 'react';
import ColorPicker from '../../src';

class Demo3 extends Component {
    autoCalculate = (obj) => {
        console.log("自动计算的色值对象 ：",obj);
    }

    handleChange = (v) => {
        console.log("选择的色彩信息 ：" , v);
    }
    render () {
        return (
            <ColorPicker
                className="demo2"
                label="颜色"
                placeholder="请输入十六进制色值" 
                autoCalculate={this.autoCalculate}
                onChange={this.handleChange}
            />
        )
    }
}
export default Demo3