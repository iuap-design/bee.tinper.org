import  Navbar from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'bee-dropdown';
import Form from 'bee-form';
import FormControl from 'bee-form-control';
import FormGroup from 'bee-form-group';

const SideContainer = Navbar.SideContainer;
const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const MenuToggle = Navbar.MenuToggle;
const Nav = Navbar.Nav;


class Demo extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	expanded : false
	    }
	}
	onToggle(value) {
		this.setState({expanded:value});
	}
	render(){
		return( 
			<div>
				<Navbar inverse expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
				    <Header>
					    <Brand>
					        	<a href="#">React-Bootstrap</a>
					    </Brand>
					    <Toggle />
				    </Header>

				    <Collapse>
					    <Nav>
						    <NavItem eventKey={1} href="#">Link</NavItem>
						    <NavItem eventKey={2} href="#">Link</NavItem>
						    <NavItem>
							    <Dropdown title="Dropdown" activeKey="A">
						            <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
						            <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
						            <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
						            <Dropdown.Item divider></Dropdown.Item>
						            <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
						        </Dropdown>
					        </NavItem>
					    </Nav>
					    <Navbar.Form pullRight>
					          <FormControl type="text" placeholder="Search" />
					    </Navbar.Form>
				    </Collapse>
				</Navbar>

			</div>
		)
	}
}
export default Demo;