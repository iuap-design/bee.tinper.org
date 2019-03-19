/**
*
* @title 地区级联
* @description 中国地区级联
*
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  Button  from 'bee-button';
import CitySelect from '../../src';

class Demo1 extends Component {

	constructor() {
		super();
		this.state = {
			defaultValue:{ province:'北京',city:'北京',area:'东城区'},
			value:null
		}
	}

	onChange=(obj)=>{
		console.log(obj)
	}

	btnOnClick=()=>{
		this.setState({
			value:{ province:'山西',city:'长治',area:'长治县'}
		})
	}

	render () {
		let value = { province:'山西',city:'长治',area:'长治县'};
		return (
			<div>
				<CitySelect ref='city' onChange={this.onChange} defaultValue={this.state.defaultValue} value={value}/>
				<Button shape="border" onClick={this.btnOnClick} style={{marginTop:"10px"}}>代码设置数据</Button>
			</div>
	)}
}
export default Demo1;