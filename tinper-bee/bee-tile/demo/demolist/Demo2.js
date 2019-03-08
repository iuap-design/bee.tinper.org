/**
*
* @title Tile 实例
* @description 具备链接功能，设置参数Component为a,且设置href为你的链接地址
*
*/

import React, { Component } from 'react';
import Tile from '../../src';

class Demo2 extends Component {
	render () {
		return (
			<Tile Component="a" href="baidu" style={{width:200}}>
				<h4>磁贴标题</h4>
				<span>进度</span>
				<h1>95%</h1>
			</Tile>
		)	
	}
}

export default Demo2;