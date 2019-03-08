/**
 * @title 激活状态 ProgressBar
 * @description 添加参数active,具备动画。
 */

import React, { Component } from 'react';
import ProgressBar from '../../src';

class Demo2 extends Component {
	render(){
		return (
			<ProgressBar active now = {40} />
		)
	}
}

export default Demo2;