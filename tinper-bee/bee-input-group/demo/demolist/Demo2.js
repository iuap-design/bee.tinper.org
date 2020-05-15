/**
 * @title InputGroup 两边是可选Button
 * @description 
 */

import React, { Component } from 'react';
import FormControl from 'bee-form-control';
import Dropdown from 'bee-dropdown';
import Button from 'bee-button';
import Menu from 'bee-menus';
import InputGroup from '../../src';

let MenuItem = Menu.Item;
let Divider = Menu.Divider;
let SubMenu = Menu.SubMenu;
let MenuItemGroup = Menu.MenuItemGroup;


function onSelect({ key }) {
	console.log(`${key} selected`);

}

function onVisibleChange(visible) {
	console.log(visible);
}

const menu1 = (
	<Menu
		multiple
		onSelect={onSelect}>
		<MenuItem key="1">借款合同</MenuItem>
		<MenuItem key="2">抵/质押合同</MenuItem>
		<MenuItem key="3">担保合同</MenuItem>
		<MenuItem key="4">联保合同</MenuItem>
		<Divider />
		<MenuItem key="5">合同审批</MenuItem>
		<MenuItem key="6">抵/质押合同跟踪</MenuItem>
	</Menu>
);
class Demo2 extends Component {
	render() {
		return (
			<div className="demo-input-group">
				<InputGroup>
					<InputGroup.Button>
						<Button>http://</Button>
					</InputGroup.Button>
					<FormControl type="text" />
				</InputGroup>

				<InputGroup>
					<InputGroup.Button shape="border">
						<Dropdown
							trigger={['click']}
							overlay={menu1}
							animation="slide-up"
							onVisibleChange={onVisibleChange}
						>
							<Button shape="border">带有分割线的下拉 <span className="uf uf-arrow-down"> </span></Button>
						</Dropdown>
					</InputGroup.Button>
					<FormControl type="text" />
					<InputGroup.Button>
						<Button><span className="uf uf-search"> </span></Button>
					</InputGroup.Button>
				</InputGroup>
				<InputGroup simple>
					<FormControl type="text" />
					<InputGroup.Button shape="border">
						<span className="uf uf-search"> </span>
					</InputGroup.Button>
				</InputGroup>
				{/* <InputGroup>
					<InputGroup.Button>
						<Button>test</Button>
					</InputGroup.Button>
					<FormControl type="text" />
					<InputGroup.Button>
						<Button>test</Button>
					</InputGroup.Button>
				</InputGroup> */}
			</div>
		)
	}
}

export default Demo2;