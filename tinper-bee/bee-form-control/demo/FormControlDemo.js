import FormControl from '../src';
import React, { Component } from 'react'

class Demo extends Component {
	constructor(props) {
		super(props);
		this.HanderChange = this.HanderChange.bind(this);
	}
	HanderChange () {
		console.log("handerChange");
	}
	render(){
		return( 
			<div>
				<FormControl/>				
				<br/><br/>
				<FormControl defaultValue="FormControl test" placeholder="Enter text" onChange={this.HanderChange} /> 
				<br/><br/>
				<FormControl type="checkbox" />
				<br/><br/>
				<FormControl type="radio" />
            </div>
        )
	}

}
export default Demo;