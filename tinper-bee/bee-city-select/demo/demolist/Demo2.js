/**
*
* @title 切换语言
* @description 目前支持三种语言  zh_CN 中文简体(默认)、zh_TW 中文繁体、en_US 英文
*
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CitySelect from '../../src';

class Demo2 extends Component {

	onChange=(obj)=>{
		console.log(obj)
	}
	render () {
		return (
			<div>
				<CitySelect lang='en_US' onChange={this.onChange}/>
				<div style={{'height':'20px'}}/>
				<CitySelect lang='zh_TW' onChange={this.onChange}/>
			</div>
	)}
}
export default Demo2;