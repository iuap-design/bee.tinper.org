/**
 * @title CheckboxGroup基本使用
 * @description `value` 参数设置默认值，`onChange`设置值改变的回调。
 */

import React, { Component } from 'react';
import Checkbox from '../../src';


const CheckboxGroup = Checkbox.CheckboxGroup;

class Demo4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value:['3','4']
		}
	}
	change=(value)=>{
		console.log(value)
		this.setState({
			value
		})
	}
	render () {
		return (
			<div className="demo-checkbox">
				<CheckboxGroup value={this.state.value} onChange={this.change}>
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