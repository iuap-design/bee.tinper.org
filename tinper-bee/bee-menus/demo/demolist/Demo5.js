/**
 * @title Navbar和Menus的组合
 * @description 示例采取navbar与menus的组合，达到一种PC端常用的复合导航菜单。导航添加了常用的搜索表单消息提醒等组件。
 *
 */

import React, { Component } from 'react';
import Menu from '../../src';
import FormControl from 'bee-form-control';
import Badge from 'bee-badge';
import Icon from 'bee-icon';


import Navbar from 'bee-Navbar';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuToggle = Menu.MenuToggle;
const SideContainer = Menu.SideContainer;

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Nav = Navbar.Nav;


class Demo5 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: 1,
            searchValue:"Search"
        }
    }

    onToggle = (value) => {
        this.setState({expanded: value});
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    onChange = (e) => {
        this.setState({searchValue:e});
    }

    render() {
        return (
            <div id="demo5">
                <Navbar expanded={this.state.expanded} onToggle={this.onToggle}>
                    <MenuToggle show/>
                    <Header>
                        <Brand>
                            <a href="#"><img style={{width:140}} src="http://design.yyuap.com/logos/logox.png"/></a>
                        </Brand>
                    </Header>

                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                onChange={this.onChange}
                                value={this.state.searchValue}
                            />
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Badge dataBadge="4" colors="warning">
                                <Icon
                                    type="uf-bell"
                                />
                            </Badge>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <Icon type="uf-bubble-o" />
                        </NavItem>
                        <Menu mode="horizontal" className="dropdown">
                            <SubMenu title={<span>刘认华<Icon type="uf-triangle-down" /></span>}>
                                <Menu.Item key="setting:1">选项 1</Menu.Item>
                                <Menu.Item key="setting:2">选项 2</Menu.Item>
                                <Menu.Item key="setting:3">选项 3</Menu.Item>
                                <Menu.Item key="setting:4">选项 4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Nav>
                </Navbar>
                <SideContainer
                    onToggle={this.onToggle}
                    expanded={this.state.expanded}>
                    <Menu onClick={this.handleClick}
                          style={{ width: 240 }}
                          defaultOpenKeys={['demo3sub1']}
                          selectedKeys={[this.state.current]}
                          mode="inline"
                        >
                        <SubMenu key="demo3sub1" title={<span><span>组织 1</span></span>}>
                            <MenuItemGroup title="组 1">
                                <Menu.Item key="1">选项 1</Menu.Item>
                                <Menu.Item key="2">选项 2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="组 2">
                                <Menu.Item key="3">选项 3</Menu.Item>
                                <Menu.Item key="4">选项 4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu key="demo3sub2" title={<span><span>组织 2</span></span>}>
                            <Menu.Item key="5">选项 5</Menu.Item>
                            <Menu.Item key="6">选项 6</Menu.Item>
                            <SubMenu key="demo3sub3" title="子项">
                                <Menu.Item key="7">选项 7</Menu.Item>
                                <Menu.Item key="8">选项 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="demo3sub4" title={<span><span>组织 3</span></span>}>
                            <Menu.Item key="9">选项 9</Menu.Item>
                            <Menu.Item key="10">选项 10</Menu.Item>
                            <Menu.Item key="11">选项 11</Menu.Item>
                            <Menu.Item key="12">选项 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </SideContainer>
            </div>
        )
    }
}

export default Demo5;