/**
 * @title CheckboxGroup基本使用
 * @description 方便的从数组生成 Checkbox 组。
 */

import React, { Component } from 'react';
import Checkbox from '../../src';
const CheckboxGroup = Checkbox.CheckboxGroup;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

class Demo4 extends Component {
	constructor(props) {
		super(props);
	}
	onChange(checkedValues) {
		console.log('checked = ', checkedValues);
	}
	render () {
		return (
			<div className="demo-checkbox">
				<CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} />
		
				<CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange} />
			
				<CheckboxGroup
				options={optionsWithDisabled}
				disabled
				defaultValue={['Apple']}
				onChange={this.onChange}
				/>
			</div>
		)
	}
}
export default Demo4;