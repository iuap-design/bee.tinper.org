/**
 *
 * @title 默认值
 * @description 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。
 *
 */

import React, { Component } from 'react';
import { Row, Col } from 'bee-layout';
import Cascader from '../../src';
import FormControl from 'bee-form-control'
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
				<Row>
					<Col md={4}>
						<p>单独的Cascader</p>
						<div className="height-150" style={{paddingLeft:'12px'}}>
							<Cascader
								defaultValue={defaultOptions}
								options={options}
								onChange={this.onChange}
								placeholder="请选择"
							/>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
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
								<button onClick={this.onSubmit}>提交</button>
								<button onClick={this.onRest}>清除</button>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}
export default Form.createForm()(Demo2);
