/**
 * @title 基本样式展示
 * @description now 控制实际进度
 */

import React, { Component } from 'react';
import ProgressBar from '../../src';

class Demo1 extends Component {

	render () {
		return (
			<ProgressBar style={{width:30}} now = {40} />
		)
	}
}


export default Demo1;