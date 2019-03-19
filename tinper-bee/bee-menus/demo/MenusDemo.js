import  Navbar from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Demo extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	expanded : false
	    }
	}
	onToggle(value) {
		this.setState({expanded:value});
	}
	render(){
		return( 
			<div>
				

			</div>
		)
	}
}
export default Demo;