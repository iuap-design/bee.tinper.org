/**
 * @title Navbar基础样式
 * @description 当屏幕小于768 菜单隐藏。
 *  const NavItem = Navbar.NavItem;
 *  const Header = Navbar.Header;
 *  const Brand = Navbar.Brand;
 *  const Collapse = Navbar.Collapse;
 *  const Toggle = Navbar.Toggle;
 *  const Nav = Navbar.Nav;
 * 添加Collapse组件是在bee-transition的子组件组件上做的扩展 
 * 此例子结合了常用的表单场景
 */


import React, { Component } from 'react';
import Navbar from '../../src';
import FormControl from 'bee-form-control';


const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;

class Demo2 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            selectedkey: 1
        }
    }

    onToggle = (value) => {
        this.setState({expanded: value});
    }

    handleSelect = (index) => {
        this.setState({selectedkey: index});
    }

    render() {
        return (
            <div className="demo-container">
                <Navbar
                    inverse
                    expanded={this.state.expanded}
                    onToggle={this.onToggle}>
                    <Header>
                        <Brand>
                            <a href="#">React-FED</a>
                        </Brand>
                        <Toggle />
                    </Header>

                    <Collapse>
                        <Nav
                            selectedkey={this.state.selectedkey}
                            onSelect={this.handleSelect}>
                            <NavItem eventKey={1}>选项</NavItem>
                            <NavItem href="#" eventKey={2}>
                                选项
                            </NavItem>
                        </Nav>
                        
                        <Navbar.Form pullRight>
                            <FormControl type="text" placeholder="Search"/>
                        </Navbar.Form>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Demo2;