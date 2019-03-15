/**
 *
 * @title 默认值
 * @description 默认值通过数组的方式指定。注：需要给数组的每一项指定label和value属性。
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

const defaultOptions = [{
    label: '江苏',
    value: 'js',
}, {
    label: '南京',
    value: 'nj',
}, {
    label: '中华门',
    value: 'zhm',
}];

class Demo2 extends Component {

	onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
	}
	
 	render(){
 		return(
			<Row>
				<Col md={4}>
					<div className="height-150">
                        <Cascader 
                            defaultValue={defaultOptions}
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
export default Demo2;