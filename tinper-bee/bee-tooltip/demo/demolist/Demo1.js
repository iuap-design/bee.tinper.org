/**
 * @title 基本Tooltip
 * @description `placement`参数控制显示位置，`trigger`设置显示方式。
 */


import React, { Component } from 'react';
import Tooltip from '../../src';
import Button from 'bee-button';


class Demo1 extends Component {

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
						请拂过我的脸庞
					</Button>
				</Tooltip>
				<Tooltip trigger="click" rootClose placement="bottom" overlay={tip}>
					<Button style={{ marginLeft: 100 }} colors="primary">
						轻轻触碰我的指尖
					</Button>
				</Tooltip>
			</div>
		)
	}
}

export default Demo1;