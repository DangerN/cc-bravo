import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { navigate } from 'hookrouter'

const PreviewThreads = props => {
  const threadPreview = () => {
    return (
      <Card as={Col} xs={6} md={4} lg={2}>
        <Card.Img src="http://0.0.0.0:3001/media/test"/>
        <Card.Body onClick={()=>navigate(`test/00000000000`)}>
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
  const threadPreview2 = () => {
    return (
      <Card as={Col} xs={6} md={4} lg={2}>
        <Card.Img variant="top" src="http://0.0.0.0:3001/media/cute-potato"/>
        <Card.Body onClick={()=>navigate(`test/00000000000`)}>
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
    <>
      {threadPreview()}
      {threadPreview2()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
    </>
  )
}

export default PreviewThreads
