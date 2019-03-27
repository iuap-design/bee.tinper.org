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

    handleChange = (value) => {
        console.log(value);
        this.setState({
            value: value
        })
    }
    render () {
        return (
            <ColorPicker 
                className="demo2"
                value={this.state.value} 
                onChange={this.handleChange}
                label="颜色"
                required={true}
            />
        )
    }
}
export default Demo2