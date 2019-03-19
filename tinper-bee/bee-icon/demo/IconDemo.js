import Icon from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Demo extends Component {
	render(){
		return(
			<div className="tinper-icon-demo">
				<Icon type="add-square-button"/> 
				<Icon type="adjust-contrast" />
			</div>
		)
	}
}
export default Demo;