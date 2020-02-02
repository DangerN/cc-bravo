import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

const ChanNav = (props) => {
  return (
    <Navbar collapseOnSelect varient="dark" bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">CloudChan</Navbar.Brand>
      <NavDropdown title="Boards" id="collasible-nav-dropdown">
        <NavDropdown.Item>fit</NavDropdown.Item>
        <NavDropdown.Item>pol</NavDropdown.Item>
        <NavDropdown.Item>ck</NavDropdown.Item>
      </NavDropdown>
      <Navbar.Toggle/>
      <Navbar.Collapse >
        <Nav className="ml-auto">
          <Nav.Link>Settings</Nav.Link>
          <Nav.Link>Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ChanNav
