import React, { useState } from 'react'
import { Button, InputGroup, Form, Col, Container, Navbar } from 'react-bootstrap'
import { usePath } from 'hookrouter'

import { BUTTON } from '../resources/constants.jsx'

const ContextButton = props => {
  // determine button context from current path
  const context = BUTTON.CONTEXT(usePath())

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
        <Button onClick={()=>setButtonOpen(true)} size="lg" variant="primary">New</Button>
    )
  }
  return (
    <Navbar fixed="bottom" style={BUTTON.STYLE[context]}>
      { buttonOpen ? boldButton() : shyButton() }
    </Navbar>
  )
}

export default ContextButton
