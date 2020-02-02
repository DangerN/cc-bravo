import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import ChanNav from './components/NavBar'
import ContextButton from './components/ContextButton'

export default () => {
  return (
    <Container>
    <ChanNav />
      <Row>
      </Row>
      <ContextButton />
    </Container>
  )
}
