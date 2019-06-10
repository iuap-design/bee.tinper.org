/**
 * @title 提示类组件支持出现在可配置的container中
 * @description "container"可以是DOM元素/React组件/或者返回React组件的函数，注意，容器需要设置position
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Tooltip from '../../src';

class Demo4 extends Component {
	state = {
		visible: false
	}

	handleChange = () => {
		this.setState(prevState => ({
			visible: !prevState.visible
		}));
	}

	render () {
		let { visible } = this.state;
		return (
			<div className="demo-tooltip">
				<div className="demo-tooltip-box">
					<div className="demo-tooltip-wrapper" ref={ref => this.container = ref}>
						<Button colors="primary" onClick={this.handleChange} style={{marginRight: 20}}>
							{visible ? "隐藏" : "显示"}tooltip
						</Button>
						<Tooltip
							trigger="click"
							overlay="我会跟着移动"
							visible={visible}
							container={this.container ? this.container : null}
							placement="right"
						>
							<Button shape="border">
								tooltip会跟随我移动
							</Button>
						</Tooltip>
					</div>
				</div>
			</div>
		);
	}
}

export default Demo4;