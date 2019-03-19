/**
 * @title 带label ProgressBar
 * @description
 */

import React, { Component } from 'react';
import ProgressBar from '../../src';

class Demo4 extends Component {
	render(){
		let now = 40;
		return (
			<div>
				<ProgressBar active now = {now} label={`${now}%`} ></ProgressBar>
				<ProgressBar size="sm" active now = {now} label={`${now}%`} ></ProgressBar>
				<ProgressBar size="xs" active now = {now} label={`${now}%`} ></ProgressBar>
			</div>
		)
	}
}

export default Demo4;