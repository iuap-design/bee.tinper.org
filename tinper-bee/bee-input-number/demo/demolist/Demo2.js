/**
*
* @title 默认 iconStyle
* @description 自定义 最大值 max=12,min=5,step=1
*
*/

import React, { Component } from 'react';
import InputNumber from '../../src';

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
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
				max={12}
				min={5}
				step={1}
				value={this.state.value}
				onChange={ this.handleChange }
			/>
		)
	}
}

export default Demo2;