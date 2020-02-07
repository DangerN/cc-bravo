import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { A, useRoutes } from 'hookrouter'

import Thread from './Thread'
import PreviewThreads from './PreviewThreads'

const routes = {
  '/': () => props => <PreviewThreads />,
  '/:thread': ({thread}) => props => <Thread />
}

const Board = props => {
  const routeResult = useRoutes(routes)
  return (
    <Row >
      {routeResult()}
    </Row>
  )
}

export default Board
