
import React from 'react';
import {Navbar, Nav, NavItem }  from 'react-bootstrap';

class NavigationMenu extends React.Component {

	constructor(props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleSelect(eventKey) {
		this.props.onChange(eventKey);
  }

	render() {
		return (
			<Navbar collapseOnSelect fixedTop className="em-text">
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#" className="em-text">Hospitals City</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse >
				    <Nav onSelect={this.handleSelect} pullRight>
				      <NavItem eventKey={"page-header"} href="#page-header">Home</NavItem>
				      <NavItem eventKey={"about"} href="#about">About</NavItem>
				      <NavItem eventKey={"services"} href="#services">Services</NavItem>
							<NavItem eventKey={"hospitals"} href="#hospitals">Hospitals</NavItem>
							<NavItem eventKey={"contact"} href="#contact">Contact</NavItem>
				    </Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}

}

export default NavigationMenu;
