import React, { useEffect, useState, useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useRoutes, usePath } from 'hookrouter'
import useWebSocket from 'react-use-websocket'

import ChanNav from './components/NavBar'
import ContextButton from './components/ContextButton'
import Home from './components/Home'
import Board from './components/Board'
import Settings from './components/Settings'

import { THEME } from './resources/constants'
import { handleMessage } from './resources/handlers'
import useSettings from './hooks/useSettings'
import useBoards from './hooks/useBoards'

import "bootswatch/dist/flatly/bootstrap.min.css"

const routes = {
  '/': () => props => <Home {...props} />,
  '/:board*': ({board}) => props => <Board board={board} {...props} />
}

const BOARD_URL = process.env.REACT_APP_BOARD_BASE_URL

export default () => {
  const match = useRoutes(routes)

  // Initialize the settings hook, retrieve settings from localStorage and apply storedSettings to the settings state.
  const [settingsState, settingsDispatch] = useSettings()
  const storedSettings = JSON.parse(localStorage.getItem("cloudChanSettings"))
  useEffect(() => {
    const applyStoredSettings = () => settingsDispatch({type: 'loadStored', stored: storedSettings})
    storedSettings && applyStoredSettings()
  },[])

  //Initialize the websocket connection to Charlie and set up message processing
  const [ socketState, setSocketState ] = useState(0)
  const [ messageHistory, setMessageHistory ] = useState([])
  const options = useMemo(() => ({
    onOpen: event => setSocketState(1),
    onClose: event => setSocketState(0),
    onError: error => console.log('Socket Error', error)
  }) , [setSocketState])
  const [sendMessage, lastMessage, readyState] = useWebSocket(BOARD_URL, options)
  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory(previous => previous.concat(lastMessage))
      handleMessage(JSON.parse(lastMessage.data), boardsDispatch)
    }
  }, [lastMessage])

  // Initialize the useBoards hook
  const [ boards, boardsDispatch ] = useBoards()

  // Populate the board list once connection to Charlie is open
  useEffect(() => {
    if (socketState === 1) {
      sendMessage('base')
      sendMessage('test')
    }
  },[socketState])

  return (
    <>
      { THEME[settingsState.theme] }
      <ChanNav settingsDis={settingsDispatch} settingsState={settingsState} boardList={boards.boardList}/>
      <Container >
        {match(boards)}
        <ContextButton />
      </Container>
    </>
  )
}
