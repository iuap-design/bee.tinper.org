/**
 * @title Navbar和Menus的组合
 * @description 示例采取navbar与menus的组合，达到一种PC端常用的复合导航菜单。导航添加了常用的搜索表单消息提醒等组件。
 *
 */

import React, { Component } from 'react';
import Menu from 'bee-menus';

import Tabs, { TabPane } from 'bee-tabs';

import Icon from 'bee-icon';
import Navbar from 'bee-navbar';

const SideContainer = Menu.SideContainer;

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;


class Demo8 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: "选项 1",
            panelActiveKey: "1",
            tabPaneList:{1:"fdaf",3:"fdsafds",55:"fdsafdsa"}
        }
    }

    onToggle = (value) => {
        this.setState({expanded: !this.state.expanded});
    }

    handleClick = (e) => {
        let map = {
            "选项 1": "选项 1",
            "选项 2": "选项 2",
            "选项 3": "选项 3",
            "选项 4": "选项 4"
        }
        let tabPaneList = this.state.tabPaneList;

        if(!tabPaneList[e.key]) {
            tabPaneList[e.key] = map[e.key];
        }
        
        this.setState({
            current: e.key,
            tabPaneList:tabPaneList
        });
    }

    handleMenuClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    changePanelKey = (panelActiveKey) => {
        this.setState({panelActiveKey: panelActiveKey});
    }

    closeTab = (index) => {
        let self = this;
        return function () {
            let tabPaneList = self.state.tabPaneList;

            delete tabPaneList[index];
            let tempKey;
            if(self.state.panelActiveKey==index && String(tabPaneList) !== '{}') {
                for(var i in tabPaneList) {
                    tempKey = i;
                    break;
                }
            }

            if(tempKey) {
                self.setState({tabPaneList:tabPaneList,panelActiveKey:tempKey})
            }else {
                self.setState({tabPaneList:tabPaneList})
            }
            
        }
    }

    renderNavTabPane = () => {
        let domArray = [];
        let tabPaneList = this.state.tabPaneList;
        console.log(tabPaneList);
        let self = this;
        for(var i in tabPaneList) {
            domArray.push(
                <TabPane key={i} tab={<span className="title-wrapper"><span>{tabPaneList[i]}</span><Icon type="uf-close-bold" onClick={self.closeTab(i)}/></span>}>
                </TabPane>
            )
        }

        return domArray;
    }

    renderTabPane = () => {
        let domArray = [];
        let tabPaneList = this.state.tabPaneList;
        for(var i in tabPaneList) {
            domArray.push(
                <TabPane key={i} tab={<span className="title-wrapper"><span>{tabPaneList[i]}</span><Icon type="uf-close-bold" /></span>}>
                    key {i} {tabPaneList[i]}
                </TabPane>
            )
        }

        return domArray;
    }

    render() {
        return (
            <div id="demo8">
                <Navbar fluid expanded={this.state.expanded} >
                   <div className="toggle-show" onClick={this.onToggle}>
                        <Icon type="uf-align-justify" />
                   </div>
                    <Nav className="u-navbar-nav-tab">
                        <Tabs
                          activeKey={this.state.panelActiveKey}
                          onChange={this.changePanelKey}
                          destroyInactiveTabPane
                          tabBarStyle="trapezoid"
                        >
                         {this.renderNavTabPane()}
                          
                        </Tabs>
                    </Nav>
                   <Nav pullRight>
                        
                        <NavItem eventKey={3} className="icon-nav">
                            <a href="#"> <Icon type="uf uf-qm-c"></Icon> 帮助 </a>
                            <a className="" href="#"> 
                                <img alt="@ahua52" className="float-left mr-1" src="https://avatars2.githubusercontent.com/u/19704104?v=4&amp;s=40" height="20" width="20" />
                                刘认华 
                            </a>
                        </NavItem>
                    </Nav>
                </Navbar>
                <SideContainer expanded={this.state.expanded}>
                    <Menu mode="inline" onClick={this.handleClick} openKeys={this.state.openKeys} selectedKeys={[this.state.current]} className="inner-menu">
                        <Menu.Item key="选项 1">选项</Menu.Item>
                        <Menu.Item key="选项 2">选项</Menu.Item>
                        <Menu.Item key="选项 3">选项</Menu.Item>
                        <Menu.Item key="选项 4">选项</Menu.Item>
                    </Menu>

                </SideContainer>
                <div className={this.state.expanded?"inner-container expanded":"inner-container"}>
                    <Tabs
                      activeKey={this.state.panelActiveKey}
                      onChange={this.changePanelKey}
                      destroyInactiveTabPane
                      tabBarStyle="trapezoid"
                    >
                      {this.renderTabPane()}
                      
                    </Tabs>
                    
                </div>
            </div>
        )
    }
}

export default Demo8;