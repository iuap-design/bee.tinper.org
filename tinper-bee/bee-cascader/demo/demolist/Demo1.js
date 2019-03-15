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
	label: '浙江',
	value: 'zj',
	children: [{
		label: '杭州',
		value: 'hz',
		children: [{
			label: '西湖',
			value: 'xh',
			children: [{
				label: '白娘子',
				value: 'bnz'
			},{
				label: '许仙',
				value: 'xx'
			}]
		}]
	}]
	},
	{
		label: '江苏',
		value: 'js',
		children: [{
			label: '南京',
			value: 'nj',
			children: [{
				label: '中华门',
				value: 'zhm'
			}]
		}]
 	},
 	{
		label: '山东',
 	    value: 'sd'
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
							placeholder = "请选择地址"
						/>
					</div>
				</Col>
			</Row>
 		)
 	}
}
export default Demo1;