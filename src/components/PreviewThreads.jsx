import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { navigate } from 'hookrouter'

const BASE_PATH = process.env.REACT_APP_MEDIA_BASE_URL

const PreviewThreads = props => {
  const { boardData } = props
  const { flags, threads } = boardData

  const threadPreviews = () => {
    return Object.keys(threads).map(thread => {
      const threadData = threads[thread]
      const firstPost = threadData.posts[0]
      return (
        <Card as={Col} xs={6} md={4} lg={2} key={threadData.id}>
          <Card.Img src={`${BASE_PATH}/thumb/${firstPost.media_name}`}/>
          <Card.Body onClick={()=>navigate(`${boardData.id}/${threadData.id}`)}>
            <Card.Title>
              {firstPost.subject}
            </Card.Title>
            <Card.Text>
              {firstPost.text}
            </Card.Text>
          </Card.Body>
        </Card>
      )
    })
  }

  return (
    <>
      {threadPreviews()}
    </>
  )
}

export default PreviewThreads
