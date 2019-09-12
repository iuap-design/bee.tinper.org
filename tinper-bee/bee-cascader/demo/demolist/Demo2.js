/**
 *
 * @title 默认值
 * @description 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。
 *
 */

import React, { Component } from 'react';
import Cascader from '../../src';
import Button from 'bee-button';
import Form from 'bee-form';
const FormItem = Form.FormItem;

const options = [{
	label: '基础组件',
	value: 'jczj',
	children: [{
		label: '导航',
		value: 'dh',
		children: [{
			label: '面包屑',
			value: 'mbx'
		}, {
			label: '分页',
			value: 'fy'
		}, {
			label: '标签',
			value: 'bq'
		}, {
			label: '菜单',
			value: 'cd'
		}]
	}, {
		label: '反馈',
		value: 'fk',
		children: [{
			label: '模态框',
			value: 'mtk'
		}, {
			label: '通知',
			value: 'tz'
		}]
	},
		{
			label: '表单',
			value: 'bd'
		}]
}, {
	label: '应用组件',
	value: 'yyzj',
	children: [{
		label: '参照',
		value: 'ref',
		children: [{
			label: '树参照',
			value: 'reftree'
		}, {
			label: '表参照',
			value: 'reftable'
		}, {
			label: '穿梭参照',
			value: 'reftransfer'
		}]
	}]
}
];

const defaultOptions = [{
	label: '基础组件',
	value: 'jczj',
}, {
	label: '导航',
	value: 'dh',
}, {
	label: '菜单',
	value: 'cd',
}];
const defaultOptions1 = ["yyzj", "ref", "reftransfer"]


class Demo2 extends Component {
	onChange = (value, selectedOptions) => {
		console.log(value, selectedOptions);
	}

	onSubmit = () => {
		this.props.form.validateFields((err, _values) => {
			console.log(_values);
		});
	}
	onRest = () => {
		this.props.form.resetFields();
		this.props.form.validateFields((err, _values) => {
			console.log(_values);
		});
	}

	render() {
		let { form: { getFieldProps } } = this.props;
		return (
			<div>
				<p>单独的Cascader</p>
				<div className="height-150" style={{paddingLeft:'12px'}}>
					<Cascader
						defaultValue={defaultOptions}
						options={options}
						onChange={this.onChange}
						placeholder="请选择"
					/>
				</div>
				<br />
				<div className="height-150">
					<p>form表单包裹的Cascader</p>
					<FormItem onSubmit={this.onSubmit}>
						<Cascader
							options={options}
							placeholder="请选择"
							{...getFieldProps('area', { initialValue: defaultOptions1, onChange: this.onChange})}
						/>
					</FormItem>
					<div style={{paddingLeft:'12px'}}>
						<Button bordered onClick={this.onRest} style={{marginRight:'8px'}}>清除</Button>
						<Button colors="primary" onClick={this.onSubmit}>提交</Button>
					</div>
				</div>
			</div>
		)
	}
}
export default Form.createForm()(Demo2);
