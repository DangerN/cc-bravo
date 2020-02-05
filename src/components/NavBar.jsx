import React from 'react'
import { Navbar, NavDropdown, Nav, Col } from 'react-bootstrap'
import { A } from 'hookrouter'

import Banner from './Banner'

const ChanNav = (props) => {
  return (
    <Navbar collapseOnSelect style={{justifyContent: "space-between"}} varient="dark" bg="light" expand="lg" sticky="top">
      <Col xs={2} md={2}>
        <Navbar.Brand href="/">CloudChan</Navbar.Brand>
      </Col>
      <NavDropdown as={Col} xs={2} md={2} title="Boards" id="collasible-nav-dropdown">
        <NavDropdown.Item as={A} href="/fit">fit</NavDropdown.Item>
        <NavDropdown.Item as={A} href="/pol">pol</NavDropdown.Item>
        <NavDropdown.Item as={A} href="/ck">ck</NavDropdown.Item>
      </NavDropdown>
      <Banner />
      <Navbar.Toggle/>
      <Navbar.Collapse as={Col} xs={4} md={2}>
        <Nav >
          <Nav.Link>Settings</Nav.Link>
          <Nav.Link>Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ChanNav
