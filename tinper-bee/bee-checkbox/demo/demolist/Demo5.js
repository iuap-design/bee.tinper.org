/**
 * @title CheckboxGroup在form中使用
 * @description `value` 参数设置默认值，`onChange`设置值改变的回调。
 */

import React, { Component } from 'react';
import Checkbox from '../../src';
import Form from 'bee-form';
import Button from 'bee-button';


const CheckboxGroup = Checkbox.CheckboxGroup;

class Demo4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value:['3','4']
		}
	}
	change=(value)=>{
		this.setState({
			value
		})
	}
	click=()=>{
		this.props.form.validateFields((error,values)=>{
			console.log(values)
		})
	}
	render () {
		const self = this;
		const { getFieldProps, getFieldError }  = this.props.form;
		return (
			<div className="demo-checkbox">
				<CheckboxGroup 
					{
						...getFieldProps('name',{
							initialValue:['2','3'],
							onChange:self.change
						})
					}
				>
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
				<Button colors="secondary" onClick={this.click}>submit</Button>
			</div>
		)
	}
}
export default Form.createForm()(Demo4);