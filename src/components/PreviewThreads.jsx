import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { navigate } from 'hookrouter'

const BASE_PATH = process.env.REACT_APP_MEDIA_BASE_URL

const PreviewThreads = props => {
  const { boardData } = props
  const { flags, threads } = boardData

  console.log(boardData);

  const threadPreviews = () => {
    return Object.keys(threads).map(thread => {
      const threadData = threads[thread]
      console.log(threadData);
      return (
        <Card as={Col} xs={6} md={4} lg={2}>
          <Card.Img src="http://0.0.0.0:3001/media/cute-latte"/>
          <Card.Body onClick={()=>navigate(`{boardData.id}/${threadData.id}`)}>
            <Card.Title>
              Im a thread preview!
            </Card.Title>
            <Card.Text>
              lorem ipsum potatoeum
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })
  }

  threadPreviews()


  const threadPreview = () => {
    return (
      <Card as={Col} xs={6} md={4} lg={2}>
        <Card.Img src="http://0.0.0.0:3001/media/cute-latte"/>
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
