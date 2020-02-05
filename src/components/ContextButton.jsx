import React, { useState } from 'react'
import { Button, InputGroup, Form, Col } from 'react-bootstrap'

const ContextButton = props => {
  const buttonStyle = {
    position: "fixed",
    bottom: "5vh",
    right: "5vw"
  }
  const [buttonOpen, setButtonOpen] = useState(false)
  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(event);
  }
  const boldButton = () => {
    return (
      <Form onSubmit={handleFormSubmit}>
        <InputGroup>
          <Form.Control placeholder="Name"/>
          <Form.Control placeholder="Subject"/>
        </InputGroup>
        <InputGroup>
          <Form.Control placeholder="Enter media link or"/>
          <InputGroup.Append>
            <Button variant="secondary">Upload File</Button>
          </InputGroup.Append>
        </InputGroup>
        <Form.Control placeholder="Post text..." as="textarea"/>
        <Form.Row>
          <Button type="submit">Submit</Button>
          <Button onClick={()=>setButtonOpen(false)} variant="primary">Cancel</Button>
        </Form.Row>
      </Form>
    )
  }
  const shyButton = () => {
    return (
        <Button onClick={()=>setButtonOpen(true)} variant="primary">New</Button>
    )
  }
  return (
    <div style={buttonStyle} md={6}>
      { buttonOpen ? boldButton() : shyButton() }
    </div>
  )
}

export default ContextButton
