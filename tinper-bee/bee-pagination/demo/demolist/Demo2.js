/**
 * @title 多页数Pagination
 * @description 可根据参数设置功能按钮的显示，部分页数隐藏。
 */

import React, { Component } from 'react';
import Pagination from '../../src';

class Demo2 extends React.Component {
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
	        	first
	        	last
	        	prev
	        	next
	        	boundaryLinks
		        items={11}
		        maxButtons={5}
		        activePage={this.state.activePage}
		        onSelect={this.handleSelect.bind(this)}
			/>
	      </div>
	    );
	}
}
export default Demo2;