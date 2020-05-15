/**
 *
 * @title 自定义输入框显示
 * @description 通过设置 `inputValue` 属性，可自定义输入框展示内容。可在 onChange 回调函数中对数据进行自定义处理。
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
class Demo8 extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue:""
		}
	}

	onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
        // 自定义输入框显示内容
        let lastLabel = '';
        if (typeof selectedOptions !== 'undefined') {
            lastLabel = selectedOptions[selectedOptions.length - 1].label;
        }
        this.setState({ 
            inputValue : lastLabel
        })
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
							inputValue = {this.state.inputValue}
						/>
					</div>
				</Col>
			</Row>
 		)
 	}
}
export default Demo8;