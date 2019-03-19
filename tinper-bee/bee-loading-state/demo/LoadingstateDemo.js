import Loadingstate from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Demo extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Loadingstate loadingTime="400" loadingText="waiting...">Confirm</Loadingstate>
		)
		
	}
}

export default Demo;