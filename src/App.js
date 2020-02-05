import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useRoutes, usePath } from 'hookrouter'

import ChanNav from './components/NavBar'
import ContextButton from './components/ContextButton'
import Home from './components/Home'
import Board from './components/Board'
import Settings from './components/Settings'

import {THEME} from './resources/constants'
import useSettings from './hooks/useSettings'

// import "bootswatch/dist/flatly/bootstrap.min.css"
// import "bootswatch/dist/darkly/bootstrap.min.css"


const routes = {
  '/': () => props => <Home {...props} />,
  '/:board*': ({board}) => (props) => <Board board={board} {...props} />
}

export default () => {
  const match = useRoutes(routes)
  const [settingsState, settingsDispatch] = useSettings()
  console.log(settingsState);
  return (
    <>
      { THEME[settingsState.theme] }
      <Container>
        <ChanNav settingsDis={settingsDispatch} settingsState={settingsState}/>
        {match()}
        <ContextButton />
      </Container>
    </>
  )
}
