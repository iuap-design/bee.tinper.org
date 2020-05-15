/**
 * @title Navbar基础样式
 * @description 最常用简易navbar
 *  const NavItem = Navbar.NavItem;
 *  const Header = Navbar.Header;
 *  const Brand = Navbar.Brand;
 *  const Collapse = Navbar.Collapse;
 *  const Toggle = Navbar.Toggle;
 *  const Nav = Navbar.Nav;
 */


import React, { Component } from 'react';
import Navbar from '../../src';



const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Nav = Navbar.Nav;

class Demo1 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedkey: 1
        }
    }
    handleSelect = (index) => {
        this.setState({selectedkey: index});
    }   
    render() {
        return (
            <div className="demo-container">
                <Navbar>
                    <Header>
                        <Brand>
                            <a href="#">React-FED</a>
                        </Brand>
                    </Header>
                    <Nav
                        selectedkey={this.state.selectedkey}
                        onSelect={this.handleSelect}>
                        <NavItem eventKey={1}>选项1</NavItem>
                        <NavItem eventKey={2}>
                            选项2
                        </NavItem>
                        <NavItem eventKey={3}>
                            选项3
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Demo1;