/**
 * @title InputGroup 两边是可选Addon
 * @description 
 */
import React, { Component } from 'react';
import FormControl from 'bee-form-control';
import InputGroup from '../../src';

class Demo1 extends Component {
	render () {
		return (
			<div className="demo-input-group">
				<InputGroup >
					<InputGroup.Addon >https://</InputGroup.Addon>
					<FormControl type="text" />
					<InputGroup.Addon>.com</InputGroup.Addon>
				</InputGroup>
				<InputGroup>
					<InputGroup.Addon>.00</InputGroup.Addon>
					<FormControl type="text" />
				</InputGroup>
				<InputGroup>
					<FormControl type="text" />
					<InputGroup.Addon>.00</InputGroup.Addon>
				</InputGroup>		
	        </div>
		)
	}
}
export default Demo1;