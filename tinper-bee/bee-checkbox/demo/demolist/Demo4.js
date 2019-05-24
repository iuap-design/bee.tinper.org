/**
 * @title CheckboxGroup基本使用
 * @description `value` 参数设置默认值，`onChange`设置值改变的回调，`disabled`设置是否可用
 */

import React, { Component } from 'react';
import Checkbox from '../../src';


const CheckboxGroup = Checkbox.CheckboxGroup;

class Demo4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value1:['3','4'],
			value2:['3','4']
		}
	}
	change=(value)=>{
		console.log(value)
		this.setState({
			value1:value
		})
	}
	render () {
		return (
			<div className="demo-checkbox">
				<CheckboxGroup value={this.state.value1} onChange={this.change}>
					<Checkbox value='1'>
						1
					</Checkbox>
					<Checkbox value='2'>
						2
					</Checkbox>
					<Checkbox value='3'>
						3
					</Checkbox>
					<Checkbox value='4'>
						4
					</Checkbox>
					<Checkbox value='5'>
						5
					</Checkbox>
				</CheckboxGroup>
				<CheckboxGroup disabled value={this.state.value2} >
					<Checkbox value='1'>
						1
					</Checkbox>
					<Checkbox value='2'>
						2
					</Checkbox>
					<Checkbox value='3'>
						3
					</Checkbox>
					<Checkbox value='4'>
						4
					</Checkbox>
					<Checkbox value='5'>
						5
					</Checkbox>
				</CheckboxGroup>
			</div>
		)
	}
}
export default Demo4;