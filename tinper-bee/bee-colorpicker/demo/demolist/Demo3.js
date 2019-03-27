/**
*
* @title 自动计算色值
* @description 可应用于选择主色后，自动计算hover和active状态的色值
*
*/
import React, { Component } from 'react';
import ColorPicker from '../../src';

class Demo3 extends Component {
    autoCalculate = (color,scale) => {
        console.log(color,scale);
    }
    render () {
        return (
            <ColorPicker 
                className="demo2"
                label="颜色"
                autoCalculate={this.autoCalculate}
            />
        )
    }
}
export default Demo3