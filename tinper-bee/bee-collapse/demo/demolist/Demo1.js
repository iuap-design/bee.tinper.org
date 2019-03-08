/**
 *
 * @title collapse
 * @description 简单collpase
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
	}
	render() {
		return (
			<div>
				<Button
					colors="primary"
					onClick={ ()=> this.setState({ open: !this.state.open })}>
		          点我啦
		        </Button>
		        
		        <Collapse in={this.state.open}>
		          <div>
		            我是折叠区域的内容，点击按钮我就显示，再次点击就会隐藏。快来点击按钮体验我的交互效果吧，是不是很棒！赶快使用吧~~~
		          </div>
		        </Collapse>
		    </div>
		)

	}
}

export default Demo1;