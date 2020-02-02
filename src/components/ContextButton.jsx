import React, { useState } from 'react'
import { Button, InputGroup, Form, Col } from 'react-bootstrap'

const ContextButton = props => {
  const [buttonOpen, setButtonOpen] = useState(false)
  const boldButton = () => {
    return (
      <Form>
        <InputGroup>
          <Form.Control placeholder="Username"/>
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
          <Button as="submit">Submit</Button>
          <Button onClick={()=>setButtonOpen(false)} variant="outline-primary">Cancel</Button>
        </Form.Row>
      </Form>
    )
  }
  const shyButton = () => {
    return (
        <Button onClick={()=>setButtonOpen(true)} variant="outline-primary">New</Button>
    )
  }
  return (
    <div className={ buttonOpen ? "" : "fixed-bottom"}>
      { buttonOpen ? boldButton() : shyButton() }
    </div>
  )
}

export default ContextButton
