import React from 'react'

import Thread from './Thread'
import { Card, Row, Col } from 'react-bootstrap'

const Board = props => {
  const threadPreview = () => {
    return (
      <Card as={Col} xs={6} md={4} lg={2}>
        <Card.Img variant="top" src="https://i.ytimg.com/vi/-NMPLAZ5JBI/maxresdefault.jpg"/>
        <Card.Body>
          <Card.Title>
            Im a thread preview!
          </Card.Title>
          <Card.Text>
            lorem ipsum potatoeum
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  return (
    <Row>
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
    </Row>
  )
}

export default Board
