import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'

const BASE_PATH = process.env.REACT_APP_MEDIA_BASE_URL

const Post = props => {
  const { id, badges, flags, text, media_name, name, subject } = props
  const [ showThumb, setShowThumb ] = useState(true)

  const postImage = () => {
    return showThumb
      ? <img style={{float: "left", margin: ".5rem", maxHeight: "128px", maxWidth: "128px"}} onClick={()=>setShowThumb(false)} src={`${BASE_PATH}/thumb/${media_name}`}/>
      : <img style={{float: "", margin: ".5rem", maxWidth: "100%"}} onClick={()=>setShowThumb(true)} src={`${BASE_PATH}/media/${media_name}`}/>
  }

  return (
    <Card>
      <Card.Body>
      <Card.Subtitle>
        <strong>{ name }</strong>
        { " " }
        No.{ id }
        { " " }
        { subject ? props.subject : null }
      </Card.Subtitle>
        { media_name.length > 1 ? postImage() : null }
        { showThumb ? null : <br/> }
        { text }
      </Card.Body>
    </Card>
  )
}

export default Post
