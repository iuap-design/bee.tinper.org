/**
 * @title 图标加文字 
 * @description 图标放在文字前面。
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
                    <span>Home</span>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item href="#">
                    <Icon type="uf-caven"></Icon>
                    <span>Library</span>
			    </Breadcrumb.Item>
			    <Breadcrumb.Item active>
                    <Icon type="uf-cart-o"></Icon>
			        <span>Cart</span>
			    </Breadcrumb.Item>
			</Breadcrumb>
		)
	}
}

export default Demo2;