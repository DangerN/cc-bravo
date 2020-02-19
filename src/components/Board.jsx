import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { A, useRoutes, usePath } from 'hookrouter'

import Thread from './Thread'
import PreviewThreads from './PreviewThreads'

const routes = {
  '/': () => props => <PreviewThreads {...props} />,
  '/:thread': ({thread}) => props => <Thread />
}

const Board = props => {
  const { board } = props

  const routeResult = useRoutes(routes)
  return (
    <Row >
      {props[board] && routeResult({boardData: props[board]})}
    </Row>
  )
}

export default Board
