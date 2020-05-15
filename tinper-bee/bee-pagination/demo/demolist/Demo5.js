/**
 * @title 不可用pagiantion
 * @description pagination不可使用状态
 */

import React, { Component } from 'react';
import Pagination from '../../src';

class Demo5 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePage:1
		}
	}
	handleSelect(eventKey) {
		console.log(eventKey);
	    this.setState({
	      activePage: eventKey
	    });
	}

    dataNumSelect = (index,value) =>{
        console.log(index,value);

    }
	render() {
	    return (
	      <div>
	        <Pagination
				first
				last
				prev
				next
				maxButtons={5}
	        	boundaryLinks
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)}
				onDataNumSelect={this.dataNumSelect}
				showJump={true}
				total={100}
				dataNum={2}
				disabled={true}
			/>
	      </div>
	    );
	}
}

export default Demo5;