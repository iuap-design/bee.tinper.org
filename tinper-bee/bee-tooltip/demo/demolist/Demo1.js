/**
 * @title 基本Tooltip
 * @description trigger 设置显示方式。
 */


import React, { Component } from 'react';
import Tooltip from '../../src';
import Button from 'bee-button';


class Demo1 extends Component {
	state={
		visible:false
	}

	onHide = (visible) => {
		console.log('onHide',visible);
		this.setState({
			visible:visible
		})
	}

	show = () => {
		this.setState({
			visible:!this.state.visible
		})
	}

	render () {
		let tip = (
			<div>
				这是一个很强的提醒！
			</div>
		)

		return (
			<div className="demo-tooltip">
				<Tooltip inverse overlay={tip}>
					<Button colors="primary">
						鼠标滑过显示
					</Button>
				</Tooltip>
				<Tooltip trigger="click" rootClose placement="bottom" overlay={tip} visible={this.state.visible} onHide={this.onHide}>
					<Button style={{ marginLeft: 100 }} colors="primary" onClick={this.show}>
					点击显示
					</Button>
				</Tooltip>
			</div>
		)
	}
}

export default Demo1;