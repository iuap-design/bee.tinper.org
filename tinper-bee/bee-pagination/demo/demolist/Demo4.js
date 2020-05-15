/**
 * @title 多语示例
 * @description 所有页数均显示。
 */

import React, { Component } from 'react';
import Pagination from '../../src';

class Demo4 extends React.Component {
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

    dataNumSelect = (index,value) =>{
        console.log(index,value);

    }
	render() {
		var local={
			'lang':'en',
			'total': 'Total',
			'items': 'Items',
			'show': 'page',
			'goto':'goto',
			'page':'',
			'ok':'ok'
		}
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
				locale={local}
			/>
	      </div>
	    );
	}
}

export default Demo4;