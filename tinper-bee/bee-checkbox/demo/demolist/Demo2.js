/**
 * @title 多颜色`Checkbox`
 * @description `colors`参数控制背景色
 */

import React, { Component } from 'react';
import Checkbox from '../../src';

class Demo2 extends Component {
	render(){
		return (
			<div className="demo-checkbox">
				<Checkbox colors="primary">primary</Checkbox>
				<Checkbox colors="success">success</Checkbox>
				<Checkbox colors="info">info</Checkbox>
				<Checkbox colors="danger">danger</Checkbox>
				<Checkbox colors="warning">warning</Checkbox>
				<Checkbox colors="dark">dark</Checkbox>
			</div>
		)
	}
}
export default Demo2;
