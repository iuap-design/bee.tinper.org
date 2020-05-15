/**
*
* @title 保留两位小数
* @description precision={2} 设置小数点后保留两位，失去焦点时数据会格式化为两位小数
*
*/

import React, { Component } from 'react';
import InputNumber from '../../src'; 

class Demo6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    handleChange = (value) => {
		console.log(value)
        this.setState({
            value: value
        })
    }
	render () {
		return (
			<InputNumber
				iconStyle="one"
				precision={2}
				value={this.state.value}
				onChange={ this.handleChange }
			/>
		)
	}
}

export default Demo6;