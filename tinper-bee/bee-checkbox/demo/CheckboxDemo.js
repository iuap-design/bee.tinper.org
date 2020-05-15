import Checkbox from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
class Demo extends Component {
	render() {
		return( 
			<div>

				<Checkbox colors="danger"> checkbox</Checkbox>
				<Checkbox colors="info"> checkbox</Checkbox>
				<Checkbox colors="success"> checkbox</Checkbox>
				<Checkbox colors="dark"> checkbox</Checkbox>
				<Checkbox colors="danger" checked disabled> checkbox</Checkbox>
				<Checkbox disabled> checkbox</Checkbox>
			</div>
		)
	}
}
export default Demo;