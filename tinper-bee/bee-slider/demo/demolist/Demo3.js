/**
*
* @title 自定义slider
* @description 自定义slider样式（track,handle,rail等样式自定义）
*
*/

import React, { Component } from 'react';
import Slider from '../../src';

class Demo3 extends Component {
	log = (value) =>{
	console.log(value); //eslint-disable-line
	}

	render () {
		let style={width:600,marginLeft:50,marginBottom:60}
		return (
			<div style={style}>
				<p>Slider with custom handle and track style.</p>
				<Slider
				defaultValue={30}
				trackStyle={{ backgroundColor: 'blue', height: 10 }}
				handleStyle={{
				borderColor: 'blue',
				height: 28,
				width: 28,
				marginLeft: -14,
				marginTop: -9,
				backgroundColor: 'pink',
				}}
				railStyle={{ backgroundColor: 'red', height: 10 }}
				/>
			</div>
		)
	}
}

export default Demo3;