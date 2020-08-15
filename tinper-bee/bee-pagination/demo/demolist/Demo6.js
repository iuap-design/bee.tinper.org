/**
 * @title 自定义按钮的Pagination
 * @description 通过confirmBtn参数自定义确认按钮，默认不显示按钮。
 */

import React, { Component } from 'react';
import Pagination from '../../src';
import Button from 'bee-button';

class Demo6 extends React.Component {
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
	
	renderConfirmBtn = () => {
		return (
		  	<Button className="confirm-btn" bordered>确认</Button>
		);
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
				confirmBtn={this.renderConfirmBtn}
			/>
	      </div>
	    );
	}
}

export default Demo6;