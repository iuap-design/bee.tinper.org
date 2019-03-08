import FormGroup from '../src';
import React, { Component } from 'react'
import FormControl from 'bee-form-control';

class Demo extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return( 
			<div>
				<FormGroup> 
					<FormControl type="text" />
				</FormGroup>
				<br/>
				<FormGroup validationState="error"> 
					<FormControl type="text" />
				</FormGroup>
				<br/>
				<FormGroup validationState="warning"> 
					<FormControl type="text" />
				</FormGroup>
				<br/>
				<FormGroup validationState="success"> 
					<FormControl type="text" />
				</FormGroup>
			</div>
		)
	}
}
export default Demo;