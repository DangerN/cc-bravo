import React, { useEffect } from 'react'
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

import "bootswatch/dist/flatly/bootstrap.min.css"

const routes = {
  '/': () => props => <Home {...props} />,
  '/:board*': ({board}) => (props) => <Board board={board} {...props} />
}

export default () => {
  const match = useRoutes(routes)

  // Initalize the settings hook, retrieve settings from localStorage and apply storedSettings to the settings state.
  const [settingsState, settingsDispatch] = useSettings()
  const storedSettings = JSON.parse(localStorage.getItem("cloudChanSettings"))
  useEffect(() => {
    const applyStoredSettings = () => settingsDispatch({type: 'loadStored', stored: storedSettings})
    storedSettings && applyStoredSettings()
  },[])

  return (
    <>
      { THEME[settingsState.theme] }
      <Container >
        <ChanNav settingsDis={settingsDispatch} settingsState={settingsState}/>
        {match()}
        <ContextButton />
      </Container>
    </>
  )
}
