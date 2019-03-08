/**
 * @title 
 * @description 
 *
 */

import React, { Component } from 'react';
import Menu from 'bee-menus';
import Icon from 'bee-icon';
import Navbar from 'bee-navbar';
import Breadcrumb from 'bee-breadcrumb';

const SubMenu = Menu.SubMenu;

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Nav = Navbar.Nav;


class Demo2 extends Component {
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
        this.state.openKeys.map(function(item) {
            BreadcrumbDom.push(<Breadcrumb.Item>{item}</Breadcrumb.Item>)
        })
        BreadcrumbDom.push(<Breadcrumb.Item active>{this.state.current}</Breadcrumb.Item>)
        return <Breadcrumb>{BreadcrumbDom}</Breadcrumb>;
                            
    }

    render() {
        return (
            <div id="demo2">
                <Navbar fluid expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
                    <Header>
                        <Brand>
                            <a href="#">
                                <span className="logo-placeholder">logo</span>
                            </a>
                        </Brand>
                    </Header>

                    <Nav selectedkey={this.state.selectedkey} onSelect={this.handleSelect.bind(this)}>
                        <NavItem eventKey={1}>一级导航</NavItem>
                        <NavItem eventKey={2}>一级导航</NavItem>
                        <NavItem eventKey={3}>一级导航</NavItem>
                        
                    </Nav>
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
                <div className="inner-container">
                    <Menu
                        mode="inline"
                        className="wrapper-menu inner-menu"
                        openKeys={this.state.openKeys}
                        selectedKeys={[this.state.current]}
                        style={{ width: 240 }}
                        onOpenChange={this.onOpenChange.bind(this)}
                        onClick={this.handleClick.bind(this)}>
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
                    <div className="inner-content">
                        {
                            this.state.current && <Breadcrumb>{this.renderBreadcrumb()}</Breadcrumb>
                        }
                        
                    </div>
                </div>
                <footer>@2017 用友网络UED Team</footer>
            </div>
        )
    }
}

export default Demo2;