import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Menus from '../src/index';

describe('Menus 组件测试', function() {
	
	it('Menus exist', function() {
		let menus = shallow(<Menus/>);
		expect(menus.hasClass('u-menu')).to.equal(true);
	})
})

describe('Menu 子组件测试', function() {
	it('Menu exist', function() {
		let menu = mount(<Menu></Menu>);
		expect(menu.find('.u-menu').length).to.equal(1);
	})
	it('light theme', function() {
		let menu = mount(<Menu></Menu>);
		expect(menu.find('.u-menu-light').length).to.equal(1);
	})
	it('dark theme exist', function() {
		let menu = mount(<Menu theme="dark"></Menu>);
		expect(menu.find('.u-menu-dark').length).to.equal(1);
	})
	it('horizontal', function() {
		let menu = mount(<Menu mode="horizontal"></Menu>);
		expect(menu.find('.u-menu-horizontal').length).to.equal(1);
	})
	it('inline', function() {
		let menu = mount(<Menu mode="inline"></Menu>);
		expect(menu.find('.u-menu-inline').length).to.equal(1);
	})
	it('inline', function() {
		let menu = mount(<Menu mode="vertical"></Menu>);
		expect(menu.find('.u-menu-vertical').length).to.equal(1);
	})
	
})

describe('SubMenu 子组件测试', function() {
	it('submenu ', function() {
		let menu = mount(<Menu openKeys={['sub1']}><SubMenu  keys="sub1"></SubMenu></Menu>);
		expect(menu.find('.u-menu-submenu').length).to.equal(1);
	})
})



describe('垂直menu测试', function() {
	class Demo4 extends Component {
		constructor(props, context) {
		    super(props, context);
		    this.state = {
		    	current : 1
		    }
		}
		handleClick(e) {
		    this.setState({
		      current: e.key,
		    });
		  }
		render(){
			return( 
				<Menu onClick={this.handleClick.bind(this)}
			        style={{ width: 240 }}
			        defaultOpenKeys={['sub1']}
			        selectedKeys={[this.state.current]}
			        mode="inline"
			      >
			        <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
			          <MenuItemGroup title="Item 1">
			            <Menu.Item key="1">Option 1</Menu.Item>
			            <Menu.Item key="2">Option 2</Menu.Item>
			          </MenuItemGroup>
			          <MenuItemGroup title="Item 2">
			            <Menu.Item key="3">Option 3</Menu.Item>
			            <Menu.Item key="4">Option 4</Menu.Item>
			          </MenuItemGroup>
			        </SubMenu>
			        <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
			          <Menu.Item key="5">Option 5</Menu.Item>
			          <Menu.Item key="6">Option 6</Menu.Item>
			          <SubMenu key="sub3" title="Submenu">
			            <Menu.Item key="7">Option 7</Menu.Item>
			            <Menu.Item key="8">Option 8</Menu.Item>
			          </SubMenu>
			        </SubMenu>
			        <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
			          <Menu.Item key="9">Option 9</Menu.Item>
			          <Menu.Item key="10">Option 10</Menu.Item>
			          <Menu.Item key="11">Option 11</Menu.Item>
			          <Menu.Item key="12">Option 12</Menu.Item>
			        </SubMenu>
			      </Menu>
			)
		}
	}
	it('点击menu title 当前menu展开', function() {
		let demo4 = mount(<Demo4 />);
		let submenu = demo4.find(".u-menu-submenu").at(2);
		let submenutitle = submenu.find('.u-menu-submenu-title').at(0);
		submenutitle.simulate('click');
		expect(submenu.hasClass('u-menu-submenu-open')).to.equal(true);
	})
	it('点击已经展开的menu title 当前menu合上', function() {
		let demo4 = mount(<Demo4 />);
		let submenu = demo4.find(".u-menu-submenu-open").at(0);
		let submenutitle = submenu.find('.u-menu-submenu-title').at(0);
		submenutitle.simulate('click');
		expect(submenu.hasClass('u-menu-submenu-open')).to.equal(false);
	})
})
describe('手风琴menu测试', function() {
	class Demo extends Component {
	
		handleClick() {
			console.log('click', e);
		}
		render(){
			return( 
				<Menu onClick={this.handleClick.bind(this)} style={{ width: 240 }} mode="vertical">
				    <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
				      <MenuItemGroup title="Item 1">
				        <Menu.Item key="1">Option 1</Menu.Item>
				        <Menu.Item key="2">Option 2</Menu.Item>
				      </MenuItemGroup>
				      <MenuItemGroup title="Iteom 2">
				        <Menu.Item key="3">Option 3</Menu.Item>
				        <Menu.Item key="4">Option 4</Menu.Item>
				      </MenuItemGroup>
				    </SubMenu>
				    <SubMenu key="sub2" title={<span><span>Navigation Two</span></span>}>
				      <Menu.Item key="5">Option 5</Menu.Item>
				      <Menu.Item key="6">Option 6</Menu.Item>
				      <SubMenu key="sub3" title="Submenu">
				        <Menu.Item key="7">Option 7</Menu.Item>
				        <Menu.Item key="8">Option 8</Menu.Item>
				      </SubMenu>
				    </SubMenu>
				    <SubMenu key="sub4" title={<span><span>Navigation Three</span></span>}>
				      <Menu.Item key="9">Option 9</Menu.Item>
				      <Menu.Item key="10">Option 10</Menu.Item>
				      <Menu.Item key="11">Option 11</Menu.Item>
				      <Menu.Item key="12">Option 12</Menu.Item>
				    </SubMenu>
				  </Menu>
			)
		}
	}
	it('点击menu title 当前menu展开', function() {
		let demo = mount(<Demo />);
		let submenu = demo.find(".u-menu-submenu").at(2);
		let submenutitle = submenu.find('.u-menu-submenu-title').at(0);
		submenutitle.simulate('click');
		console.log(submenutitle.html());
		console.log(submenu.html());
		//expect(submenu.hasClass('u-menu-submenu-open')).to.equal(true);
	})
	
})