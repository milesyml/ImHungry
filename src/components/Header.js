import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import LoginButton from './LoginButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: ""
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      user: props.user
    })
  }

  toggle() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  }


  render() {
    const { isOpen } = this.state;
    var button;
    if (this.state.user == "") {
      button = <LoginButton login={this.props.login}/>
    } else {
      button = <button type="button" class="btn btn-light" disabled="true">Welcome, {this.state.user}</button>
    }
    return (
      <Navbar
        className="navbar-static-top"
        color="dark"
        dark
        expand="md"
        fixed="top"
        id="mainNav">
        <NavbarBrand tag={NavLink} to="/">
          I'm Hungry
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                onClick={this.toggle}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                to="restaurants"
                activeClassName="active"
                onClick={this.toggle}>
                Restaurants
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className="justify-content-end">
            <NavItem>
              {button}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
