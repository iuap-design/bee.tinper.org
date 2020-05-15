/**
 *
 * @title 基础级联菜单
 * @description 级联选择对数据有较严格要求，请参照示例的格式使用options，每项数据至少包含 value、label 两项，子集为 children，以此类推。
 *
 */

import React, { Component } from 'react';
import { Row, Col } from 'bee-layout';
import Cascader from '../../src';

const options = [{
	label: '基础组件',
	value: 'jczj',
	children: [{
		label: '导航',
		value: 'dh',
		children: [{
			label: '面包屑',
			value: 'mbx'
		},{
			label: '分页',
			value: 'fy'
		},{
			label: '标签',
			value: 'bq'
		},{
			label: '菜单',
			value: 'cd'
		}]
	},{
		label: '反馈',
		value: 'fk',
		children: [{
			label: '模态框',
			value: 'mtk'
		},{
			label: '通知',
			value: 'tz'
		}]
 	},
 	{
		label: '表单',
 	    value: 'bd'
 	}]
	},{
		label: '应用组件',
		value: 'yyzj',
		children: [{
			label: '参照',
			value: 'ref',
			children: [{
				label: '树参照',
				value: 'reftree'
			},{
				label: '表参照',
				value: 'reftable'
			},{
				label: '穿梭参照',
				value: 'reftransfer'
			}]
		}]
	}
];
class Demo1 extends Component {

	onChange = (value, selectedOptions) => {
		console.log(value, selectedOptions);
	}
	
 	render(){
 		return(
			<Row>
				<Col md={4}>
					<div className="height-150">
						<Cascader 
							options = {options} 
							onChange = {this.onChange}
							placeholder = "请选择"
						/>
					</div>
				</Col>
			</Row>
 		)
 	}
}
export default Demo1;