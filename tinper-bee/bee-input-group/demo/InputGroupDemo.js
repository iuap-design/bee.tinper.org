import InputGroup from '../build/index';
import React, { Component } from 'react';
import FormControl from 'bee-form-control';
import Button from 'bee-button';


class Demo extends Component {
	render(){
		return(
			<div>
			 	<InputGroup>
			 		<InputGroup.Addon>.00</InputGroup.Addon>
			        <FormControl type="text" />
			        <InputGroup.Addon>.00</InputGroup.Addon>
			    </InputGroup>
			    <br/><br/>
			    <InputGroup>
			 		<InputGroup.Addon>.00</InputGroup.Addon>
			        <FormControl type="text" />
			    </InputGroup>
			    <br/><br/>
			    <InputGroup>
			        <FormControl type="text" />
			        <InputGroup.Addon>.00</InputGroup.Addon>
			    </InputGroup>
			    <br/><br/>
			    <InputGroup>
			 		<InputGroup.Button>
			 			<Button>test</Button>
			 		</InputGroup.Button>
			        <FormControl type="text" />
			    </InputGroup>
			    <br/><br/>
			    <InputGroup>
			        <FormControl type="text" />
			        <InputGroup.Button>
			 			<Button>test</Button>
			 		</InputGroup.Button>
			    </InputGroup>
			    <br/><br/>
			    <InputGroup>
			    	<InputGroup.Button>
			 			<Button>test</Button>
			 		</InputGroup.Button>
			        <FormControl type="text" />
			        <InputGroup.Button>
			 			<Button>test</Button>
			 		</InputGroup.Button>
			    </InputGroup>
			</div>
		)
	}
}
export default Demo;
