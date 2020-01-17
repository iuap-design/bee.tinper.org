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
            value:'-100000.031416'
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
                    min={-10}
                    max={10}
                    onFocus={(value,e)=>{
                        console.log(value+"  ==== ",e);
                        this.setState({
                            value
                        })
                    }}
                    onBlur={(value,e)=>{
                        console.log("  ==== ",e);
                        // this.setState({
                        //     value
                        // })
                    }}
                    // precision={8}
                    step={1} 
                    format={value => ` ${value} 千克`.replace(/\B(?=(\d{3})+(?!\d))/g, ':')}
                    value={this.state.value}
                />

                {/* 销售占比:
                <InputNumber
                    iconStyle="one" 
                    format={value => `${value} %`}
                    value={this.state.value}
                /> */}
            </div>
        )
    }
}

export default Demo12;