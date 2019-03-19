/**
 *
 * @title 各种Exit事件
 * @description collapse隐藏内容时onExit，onExiting，onExited事件调用
 *
 */

import React, {Component} from 'react';

import Button from 'bee-button';

import Collapse from '../../src';



class Demo1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true
		}
		this.onExit = this.onExit.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}
	onExit() {
		document.getElementById('desc4').innerHTML = "我将要隐藏";
	}
	onExiting() {
		document.getElementById('desc4').innerHTML = "我正在隐藏";
	}
	onExited() {
		document.getElementById('desc4').innerHTML = "我已隐藏完成";
	}
	render() {
		return (
			<div className="demo4">
		        <Button
					colors="primary"
					onClick={ ()=> this.setState({ open: !this.state.open })}>
		          各种Exit事件
		        </Button>
		        
		        <Collapse
					in={this.state.open}
					onExit={this.onExit}
					onExiting={this.onExiting}
					onExited={this.onExited}>
		          <div>
		            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~
		          </div>
		        </Collapse>
		         <p id="desc4">我来显示具体调用事件的信息</p>
		       
		    </div>
		)

	}
}
export default Demo1;