/**
 * @title 进度条组合
 * @description 多种状态或者背景的进度条组合成一条。`size`控制大小。
 */

import React, { Component } from 'react';
import ProgressBar from '../../src';

class Demo3 extends Component {
	render () {
		return (
			<ProgressBar size="sm">
				<ProgressBar colors="danger" now = {10} />
				<ProgressBar colors="success" now = {20} />
				<ProgressBar colors="warning" now = {30} />
			</ProgressBar>	
		)
	}
}

export default Demo3;