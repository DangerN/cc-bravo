import React, { useState } from 'react'
import { Navbar, NavDropdown, Nav, Col, Button, Row } from 'react-bootstrap'
import { A } from 'hookrouter'

import Banner from './Banner'
import Settings from './Settings'

const ChanNav = (props) => {
  const { settingsDis, settingsState, boardList } = props

  const [settingsVis, setSettingsVis] = useState(false)
  const showSettings = () => setSettingsVis(true)

  const navItems = () => {
    return Object.keys(boardList).map(board=>{
      return <NavDropdown.Item as={A} key={`${board}-link`} href={`/${board}`}>{ boardList[board].name }</NavDropdown.Item>
    })
  }

  return (
    <Navbar collapseOnSelect style={{justifyContent: "space-between"}} varient="dark" bg="light" expand="lg" sticky="top">
      <Col xs={2} md={2}>
        <Navbar.Brand as={A} href="/">CloudChan</Navbar.Brand>
      </Col>
      <NavDropdown as={Col} xs={2} md={2} title="Boards" id="collasible-nav-dropdown">
        { navItems() }
      </NavDropdown>
      <Banner />
      <Navbar.Toggle/>
      <Navbar.Collapse as={Col} xs={4} md={2}>
        <Nav >
          <Nav.Link onClick={showSettings}>Settings</Nav.Link>
          <Settings settingsState={settingsState} settingsDis={settingsDis} visible={settingsVis} setVisible={setSettingsVis }/>
          <Nav.Link as={A} href='/account'>Account</Nav.Link>
          <Nav.Link as={A} href='/about'>About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default ChanNav
