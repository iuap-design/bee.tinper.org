/**
*
* @title Tile实例
* @description 通过style自定义样式，Tile的children均可自定义。hoverColors设置磁贴hover的效果
*
*/

import React, { Component } from 'react';
import Tile from '../../src';

class Demo1 extends Component {
	render () {
		return (
			<Tile style={{width:200}}>
				<h4>磁贴标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
		)	
	}
}


export default Demo1;