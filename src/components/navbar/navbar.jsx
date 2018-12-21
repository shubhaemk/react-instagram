import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';


const NavBar = (props) => {

  return (
      <div>
        <Navbar color="light" light expand="md" className="fixed-top">
          <NavbarBrand href="/">Commentlyser for Instagram</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/" className="text-primary">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
}

export default NavBar;
