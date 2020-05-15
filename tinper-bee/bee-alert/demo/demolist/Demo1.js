/**
 * @title 基本样式展示
 * @description 以下两种`Alert`颜色深度由props`dark`控制。`colors`控制背景颜色种类。Alert本身不支持关闭功能,需要你控制显示隐藏。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Alert from '../../src';

 class Demo1 extends Component {
	render () {
		return (
			<div>
				<Alert className="demo1-alert" colors="news">
				    <Icon type="uf-notification" />
				    <span className="alert-text">
						这是一条很长的信息提示。。。。。。
					</span>
				</Alert>
				<Alert colors="news" className="demo1-alert" dark>
				    <Icon type="uf-notification" />
				    <span className="alert-text">
						这是一条深色的信息提示。。。。。。
					</span>
				</Alert>
			</div>
		)
	}
}

export default Demo1;