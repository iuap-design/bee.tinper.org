/**
 * @title 受控显示和隐藏
 * @description `visible`属性控制
 */


import React, { Component } from 'react';
import Tooltip from '../../src';
import classnames from "classnames";



class Demo3 extends Component {
	state = {
		visible: false
	}

	handleChange = (e) => {
		let value = e.target.value;
		if (Number(value) > 5) {
			this.setState({
				visible: false
			})
		} else {
			this.setState({
				visible: true
			})
		}
	}

	onFocus = (e) => {
		let value = e.target.value;
		if (Number(value) < 5) {
			this.setState({
				visible: true
			})
		}
	}
	//使用控制弹出层显示时的钩子函数
	onVisibleChange = () => {
		console.log('visible changed.')
	}

	render () {
		let { visible } = this.state;
		let tip = (
			<div>
				输入的值必须大于5
			</div>
		)

		return (
			<div className="demo-tooltip">
				<Tooltip
					visible={visible}
					onVisibleChange={this.onVisibleChange}
					inverse
					placement="right"
					overlay={tip}>
					<input
						className={classnames("input", { err: visible })}
						type="text"
						onChange={this.handleChange}
						onFocus={this.onFocus}
					/>
				</Tooltip>
			</div>
		)
	}
}

export default Demo3;