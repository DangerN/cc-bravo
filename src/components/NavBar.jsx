import React, { useState } from 'react'
import { Navbar, NavDropdown, Nav, Col, Button } from 'react-bootstrap'
import { A } from 'hookrouter'

import Banner from './Banner'
import Settings from './Settings'

const ChanNav = (props) => {
  const [settingsVis, setSettingsVis] = useState(false)
  const showSettings = () => setSettingsVis(true)

  return (
    <Navbar collapseOnSelect style={{justifyContent: "space-between"}} varient="dark" bg="light" expand="lg" sticky="top">
      <Col xs={2} md={2}>
        <Navbar.Brand as={A} href="/">CloudChan</Navbar.Brand>
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
          <Nav.Link onClick={showSettings}>Settings</Nav.Link>
          <Settings visible={settingsVis} setVisible={setSettingsVis}/>
          <Nav.Link>Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ChanNav
