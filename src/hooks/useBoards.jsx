import React, { useReducer } from 'react'

const useSettings = () => {
  const initialState = {
    boardList: {}
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'boardList':
        return {...state, boardList: action.payload.boardList}
      case 'boardDump':
        const newState = {...state, ...action.payload.boardDump}
        return newState
      case 'fullImage':
        return {...state, ...action.payload.image}
      default:
        throw new Error("Board Dispatch Error, check dispatch type")
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}

export default useSettings
