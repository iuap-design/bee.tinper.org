import Alert from '../src';
import React, { Component } from 'react'
import Button from 'bee-button';

class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAlert: false
		}
	}
	handleAlertDismiss () {
		this.setState({showAlert: false});
	}
	handerAlertShow () {
		this.setState({showAlert: true});
	}
	render(){
		if(this.state.showAlert){
			return ( 
				<Alert colors="news" className="dark" onDismiss={this.handleAlertDismiss.bind(this)} closeLabel="关闭">
				    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
				</Alert>
			)
		}
		return (
			<Button onClick={this.handerAlertShow.bind(this)}> Show alert </Button>
		)
	}
}
export default Demo;