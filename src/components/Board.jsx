import React from 'react'

import Thread from './Thread'
import { Card } from 'react-bootstrap'

const Board = props => {
  const threadPreview = () => {
    return (
      <Card style={{width: '18rem'}}>
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
    <div>
      {threadPreview()}
    </div>
  )
}

export default Board
