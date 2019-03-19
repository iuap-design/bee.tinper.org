/**
 * @title 图标 
 * @description 使用Icon图标组件。
 */

import React, { Component } from 'react';
import Icon from 'bee-icon';
import Breadcrumb from '../../src';

class Demo2 extends Component {
	render () {
		return (
			<Breadcrumb>
			    <Breadcrumb.Item href="#">
                    <Icon type="uf-home"></Icon>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item href="#">
                    <Icon type="uf-caven"></Icon>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item active>
					<Icon type="uf-cart-o"></Icon>
			    </Breadcrumb.Item>
			</Breadcrumb>
		)
	}
}

export default Demo2;