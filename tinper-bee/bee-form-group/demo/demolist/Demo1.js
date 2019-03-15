/**
 * @title  FormGroup 三种校验状态实例
 * @description `validationState`参数控制状态颜色
 */

import { Component } from 'react';
import FormControl from 'bee-form-control';
import FormGroup from '../../src';

 class Demo1 extends Component {
	render () {
		return (
			<div className="demo-form-group">
	        	<FormGroup validationState="error"> 
					<FormControl type="text" />
				</FormGroup>	
				<FormGroup validationState="warning"> 
					<FormControl type="text" />
				</FormGroup>	
				<FormGroup validationState="success"> 
					<FormControl type="text" />
				</FormGroup>			
	        </div>
		)
	}
}

export default  Demo1 