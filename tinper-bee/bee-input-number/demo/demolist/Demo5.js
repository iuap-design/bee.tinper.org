/**
*
* @title 数组选择控件
* @description 自定义max=12,min=5,step=2 且设置 disabled 处理
*
*/

import React, { Component } from 'react';
import InputNumber from '../../src'; 

class Demo5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 8
        }
    }
    handleChange = (value) => {
        this.setState({
            value: value
        })
    }
	render () {
		return (
			<InputNumber
				disabled
				iconStyle="one"
				max={12}
				min={5}
				step={2}
				value={this.state.value}
				onChange={ this.handleChange }
			/>
		)
	}
}

export default Demo5;