import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Settings = props => {
  const { visible, setVisible } = props
  const closeSettings = () => setVisible(false)
  return (
    <Modal show={props.visible} onHide={closeSettings}>
      <Modal.Header>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        If you could set settings this is where you would set them.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeSettings}>
          Remain ignorant
        </Button>
        <Button variant="primary" onClick={closeSettings}>
          I understand
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Settings
