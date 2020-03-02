import React, { useState } from 'react'
import { Button, InputGroup, Form, Col, Container, Navbar } from 'react-bootstrap'
import { usePath } from 'hookrouter'
import axios from 'axios'

import { BUTTON } from '../resources/constants.jsx'

const NEW_URL = `${process.env.REACT_APP_BOARD_POST_URL}/new`

const ContextButton = props => {
  // determine button context from current path
  const path = usePath()
  const context = BUTTON.CONTEXT(path)

  const [buttonOpen, setButtonOpen] = useState(false)
  const [text, setText] = useState('')
  const [file, setFile] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')

  const handleText = event => setText(event.target.value)
  const handleFile = event => setFile(event.target.files[0])
  const handleName = event => setName(event.target.value)
  const handleSubject = event => setSubject(event.target.value)

  const handleFormSubmit = event => {
    event.preventDefault()
    const pathChunks = path.split('/')
    const data = new FormData()
    data.append('name', name)
    data.append('text', text)
    data.append('subject', subject)
    data.append('file', file)
    data.append('board', pathChunks[1])
    data.append('thread', pathChunks[2])
    axios.post( NEW_URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    } ).then(res=>{
      console.log(res)
      setButtonOpen(false)
      clearForm()
    })
  }

  const clearForm = () => {
    setText("")
    setFile("")
    setName("")
    setSubject("")
  }

  const handleCancel = event => {
    setButtonOpen(false)
    clearForm()
  }

  const boldButton = () => {
    return (
      <Form onSubmit={handleFormSubmit} className='bg-light'>
        <InputGroup>
          <Form.Control name='name' onChange={handleName} value={name} placeholder="Name"/>
          <Form.Control name='subject' onChange={handleSubject} value={subject} placeholder="Subject"/>
        </InputGroup>
        <input type="file" name='file' onChange={handleFile} />
        <Form.Control name='text' onChange={handleText} value={text} placeholder="Post text..." as="textarea"/>
        <Form.Row>
          <Button type="submit">Submit</Button>
          <Button onClick={handleCancel} variant="primary">Cancel</Button>
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
