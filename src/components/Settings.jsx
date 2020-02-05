import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const Settings = props => {
  const { visible, setVisible, settingsDis, settingsState } = props
  const { theme } = settingsState
  const closeSettings = () => setVisible(false)

  const handleThemeSwitch = event => {
    settingsDis({type: "setTheme", theme: (event.target.checked ? "dark" : "light")})
  }

  return (
    <Modal show={props.visible} onHide={closeSettings}>
      <Modal.Header>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Check onChange={handleThemeSwitch} checked={theme==='dark' ? true : false} type="switch" label="Dark Mode" id="darkModeSwitch"/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={closeSettings}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Settings
