import Pagination from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}

	handleSelect(eventKey) {
	    this.setState({
	      activePage: eventKey
	    });
	}

	render() {
	    return (
	      <div>
	        <Pagination
		        prev
		        next
		        first
		        last
		        ellipsis
		        boundaryLinks
		        items={20}
		        maxButtons={5}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)} />
	        
	      </div>
	    );
	}
}

export default Demo;