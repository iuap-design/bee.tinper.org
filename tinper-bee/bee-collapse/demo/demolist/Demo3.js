/**
 *
 * @title 各种Enter事件
 * @description collapse显示内容时onEnter，onEntering，onEntered事件调用
 *
 */

import React, {Component} from 'react';

import Button from 'bee-button';

import Collapse from '../../src';



class Demo1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		this.onEnter = this.onEnter.bind(this);
		this.onEntering = this.onEntering.bind(this);
		this.onEntered = this.onEntered.bind(this);
	}
	onEnter() {

		document.getElementById('desc').innerHTML = "内容将要显示";
	}
	onEntering() {

		document.getElementById('desc').innerHTML = "内容正在显示";
	}
	onEntered() {
		document.getElementById('desc').innerHTML = "内容已显示完成";
	}
	render() {
		return (
			<div className="demo3">
		        <Button
					colors="primary"
					onClick={ ()=> this.setState({ open: !this.state.open })}>
		          各种EnterEvent
		        </Button>
		        
		        <Collapse
					in={this.state.open}
					onEnter={this.onEnter}
					onEntering={this.onEntering}
					onEntered={this.onEntered}>
		          <div>
		            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~
		          </div>
		        </Collapse>

		        <p id="desc">我来显示具体调用事件的信息</p>
		       
		    </div>
		)

	}
}

export default Demo1;