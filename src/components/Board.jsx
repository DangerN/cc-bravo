import React, { useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { A, useRoutes, usePath } from 'hookrouter'

import Thread from './Thread'
import PreviewThreads from './PreviewThreads'

const routes = {
  '/': () => props => <PreviewThreads {...props} />,
  '/:thread': ({thread}) => props => <Thread threadData={props.boardData.threads[thread]}/>
}

const Board = props => {
  const { board, boardsDispatch, boards } = props

  //If current board is not in boards, add to subscription list.
  useEffect(() => {
    !props.boardSubs.includes(board) && boardsDispatch({type: "addBoardSub", payload: board})
  },[])

  const routeResult = useRoutes(routes)

  return (
    <Row >
      {props[board] && routeResult({boardData: props[board]})}
    </Row>
  )
}

export default Board
