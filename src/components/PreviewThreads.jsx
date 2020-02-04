import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { navigate } from 'hookrouter'

const PreviewThreads = props => {
  const threadPreview = () => {
    return (
      <Card as={Col} xs={6} md={4} lg={2}>
        <Card.Img variant="top" src="https://i.ytimg.com/vi/-NMPLAZ5JBI/maxresdefault.jpg"/>
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
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
      {threadPreview()}
    </>
  )
}

export default PreviewThreads
