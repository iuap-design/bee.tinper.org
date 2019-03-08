/**
 * @title 
 * @description 
 *
 */

import React, { Component } from 'react';
import Menu from 'bee-menus';
import Icon from 'bee-icon';
import Navbar from 'bee-navbar';

const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Nav = Navbar.Nav;


class Demo3 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedkey: 1,
            expanded: false,
        }
    }

    handleSelect(index) {
        this.setState({selectedkey: index});
    } 

    onToggle(value) {
        this.setState({expanded: value});
    }


    render() {
        return (
            <div id="demo3">
                <div className="header-top">
                    <a href="#">登陆</a>
                    <a className="part_1" href="#">注册</a>
                    <span>|</span>
                    <a className="part_2" href="#">通知</a>
                    <a href="#">二维码</a>
                </div>
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
                <div className="inner-container"></div>
            </div>
        )
    }
}

export default Demo3;