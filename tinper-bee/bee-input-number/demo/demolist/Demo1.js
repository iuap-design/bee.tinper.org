/**
 *
* @title 基础示例 
 * @description 最简单输入控制33
 *
 */


import React, { Component } from 'react';
import InputNumber from '../../src';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    handleChange = (value) => {
        console.log(value);
        this.setState({
            value: value
        })
    }
    handleBtnClick = (value) => {
        console.log(value);
        
    }

    
    render () {
        return (
            <div>
                <InputNumber
                    iconStyle="one"
                    min={5}
                    max={10}
                    onChange={this.handleChange}
                    handleBtnClick={this.handleBtnClick}
                    value={this.state.value}
                />
            </div>
        )
    }
}

export default Demo1;