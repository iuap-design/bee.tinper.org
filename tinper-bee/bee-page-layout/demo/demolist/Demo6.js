/**
 * @title Navbar和Menus的组合
 * @description 示例采取navbar与menus的组合，达到一种PC端常用的复合导航菜单。导航添加了常用的搜索表单消息提醒等组件。
 *
 */

import React, { Component } from 'react';

import Menu from 'bee-menus';
import Icon from 'bee-icon';
import Navbar from 'bee-navbar';

const SubMenu = Menu.SubMenu;
const SideContainer = Menu.SideContainer;

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;


class Demo6 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: "选项 1"
        }
    }

    onToggle = (value) => {
        this.setState({expanded: !this.state.expanded});
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    handleMenuClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div id="demo6">
                <Navbar fluid expanded={this.state.expanded} >
                   <div className="toggle-show" onClick={this.onToggle}>
                        <Icon type="uf-align-justify" />
                   </div>
                   <Nav pullRight>
                        <NavItem eventKey={3} className="icon-nav">
                            <a href="#"> <Icon type="uf uf-qm-c"></Icon> 帮助 </a>
                            <a className="" href="#"> 
                                <img alt="@ahua52" className=" float-left mr-1" src="https://avatars2.githubusercontent.com/u/19704104?v=4&amp;s=40" height="20" width="20" />
                                刘认华 
                            </a>
                        </NavItem>
                    </Nav>
                </Navbar>
                <SideContainer expanded={this.state.expanded}>
                    <Menu onClick={this.handleClick.bind(this)} style={{ width: 70 }} mode="vertical">
                        <SubMenu key="sub1" title={<span className="first-menu"><Icon type="uf-pc-2" /><span>组织</span></span>}>
                            <Menu.Item key="1">选项 1</Menu.Item>
                            <Menu.Item key="2">选项 2</Menu.Item>
                            <Menu.Item key="3">选项 3</Menu.Item>
                            <Menu.Item key="4">选项 4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span className="first-menu"><Icon type="uf-pc-2" /><span>组织</span></span>}>
                            <Menu.Item key="5">选项 5</Menu.Item>
                            <Menu.Item key="6">选项 6</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span className="first-menu"><Icon type="uf-pc-2" /><span>组织</span></span>}>
                            <Menu.Item key="9">选项 9</Menu.Item>
                            <Menu.Item key="10">选项 10</Menu.Item>
                            <Menu.Item key="11">选项 11</Menu.Item>
                            <Menu.Item key="12">选项 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </SideContainer>
                <div className={this.state.expanded?"inner-container expanded":"inner-container"}>
                    <div className="inner-content">
                        <Menu
                            mode="inline"
                            className="wrapper-menu inner-menu"
                            onClick={this.handleClick}
                            openKeys={this.state.openKeys}
                            selectedKeys={[this.state.current]}
                            style={{ width: 240 }}>
                            <Menu.Item key="选项 1">选项 1</Menu.Item>
                            <Menu.Item key="选项 2">选项 2</Menu.Item>
                            <Menu.Item key="选项 3">选项 3</Menu.Item>
                            <Menu.Item key="选项 4">选项 4</Menu.Item>
                            
                        </Menu>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Demo6;