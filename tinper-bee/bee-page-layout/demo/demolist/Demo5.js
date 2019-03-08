/**
 * @title Demo5
 * @description 示例采取navbar与menus的组合，达到一种PC端常用的复合导航菜单。导航添加了常用的搜索表单消息提醒等组件。
 *
 */

import React, { Component } from 'react';
import Menu from 'bee-menus';
import Breadcrumb from 'bee-breadcrumb';
import Icon from 'bee-icon';
import Navbar from 'bee-navbar';

const SubMenu = Menu.SubMenu;
const SideContainer = Menu.SideContainer;

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;

console.log(SideContainer);

class Demo5 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedkey: 1,
            expanded: false,
            currentArray: [],
            openKeys: []
        }
        this.myfilter = this.myfilter.bind(this);
    }

    handleSelect(index) {
        this.setState({selectedkey: index});
    } 

    onToggle(value) {
        this.setState({expanded: value});
    }

    handleClick(e) {
        console.log('Clicked: ', e.key);
        this.setState({current: e.key});
    }
    onOpenChange(openKeys) {
        const state = this.state;
        const latestOpenKey = this.myfilter(openKeys,state.openKeys);
        const latestCloseKey = this.myfilter(state.openKeys,openKeys);

         /*   const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
            const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));*/

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            this.state.currentArray.push(latestCloseKey);
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({openKeys: nextOpenKeys});
    }
    //IE下 array.find（）方法不可用
    myfilter(arr1,arr2) {
        if(arr2.length == 0 || !arr2) {
            return arr1[0];
        }

        for(var i=0;i<arr1.length;i++)
        {
          if(arr2.indexOf(arr1[i].toString())==-1)
          {
                return arr1[i];
          }      
        }
        return false;
    }
    getAncestorKeys(key) {

        const map = {
            "子项": ['组织2'],
        };

        return map[key] || [];
    }

    renderBreadcrumb = () => {
        let currentArray = this.state.currentArray;
        let BreadcrumbDom = [];
        this.state.openKeys.map(function(item,index) {
            BreadcrumbDom.push(<Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)
        })
        BreadcrumbDom.push(<Breadcrumb.Item active>{this.state.current}</Breadcrumb.Item>)
        return <Breadcrumb>{BreadcrumbDom}</Breadcrumb>;
                            
    }

    render() {
        return (
            <div id="demo5">
                <Navbar fluid expanded={this.state.expanded} onToggle={this.onToggle}>
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
                <div className="content">
                    <div className="sider-menu">
                        <div className="logo-header">
                            <a href="#">
                                <span className="logo-placeholder">logo</span>
                            </a>
                        </div>
                        <Menu mode="inline" className="wrapper-menu" openKeys={this.state.openKeys} selectedKeys={[this.state.current]} style={{ width: 240 }} onOpenChange={this.onOpenChange.bind(this)}  onClick={this.handleClick.bind(this)}>
                            <SubMenu key="组织1" title={<span><span>组织 1</span></span>}>
                                <Menu.Item key="选项 1">选项 1</Menu.Item>
                                <Menu.Item key="选项 2">选项 2</Menu.Item>
                                <Menu.Item key="选项 3">选项 3</Menu.Item>
                                <Menu.Item key="选项 4">选项 4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="组织2" title={<span><span>组织 2</span></span>}>
                                <Menu.Item key="选项 5">选项 5</Menu.Item>
                                <Menu.Item key="选项 6">选项 6</Menu.Item>
                                <SubMenu key="子项" title="子项">
                                    <Menu.Item key="选项 7">选项 7</Menu.Item>
                                    <Menu.Item key="选项 8">选项 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="组织3" title={<span><span>组织 3</span></span>}>
                                <Menu.Item key="选项 9">选项 9</Menu.Item>
                                <Menu.Item key="选项 10">选项 10</Menu.Item>
                                <Menu.Item key="选项 11">选项 11</Menu.Item>
                                <Menu.Item key="选项 12">选项 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                    <div className="inner-container">
                        {this.state.current && <Breadcrumb>{this.renderBreadcrumb()}</Breadcrumb>}
                        <div className="inner-content"></div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Demo5;