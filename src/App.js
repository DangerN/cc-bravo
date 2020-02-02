import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useRoutes, usePath } from 'hookrouter'

import ChanNav from './components/NavBar'
import ContextButton from './components/ContextButton'
import Home from './components/Home'
import Board from './components/Board'

const routes = {
  '/': () => props => <Home {...props} />,
  '/:board*': ({board}) => (props) => <Board board={board} {...props} />
}

export default () => {
  const match = useRoutes(routes)

  return (
    <Container>
    <ChanNav />
      {match()}
      <ContextButton />
    </Container>
  )
}
