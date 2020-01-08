/**
 *
* @title 多格式组件
 * @description 自定义 format ，支持格式自定义
 *  
 */

import React, { Component } from 'react';
import InputNumber from '../../src';

class Demo12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'100000.031416'
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
            <div className="demo12">
                销售价格:
                <InputNumber
                    iconStyle="one"
                    // precision={2}
                    // min={-9007199254740990}
                    // max={9007199254740990}
                    // step={1} 
                    format={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    value={this.state.value}
                />

                销售占比:
                <InputNumber
                    iconStyle="one" 
                    format={value => `${value} %`}
                    value={this.state.value}
                />
            </div>
        )
    }
}

export default Demo12;