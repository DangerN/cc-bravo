import React, { useReducer } from 'react'

const useSettings = () => {
  const initialState = {
    boardList: {},
    boardSubs: ['wahtthefuck']
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'boardList':
        return {...state, boardList: action.payload.boardList}
      case 'boardDump':
        const newState = {...state, ...action.payload.boardDump}
        return newState
      case 'addBoardSub':
        console.log(action.payload.board);
        return {...state, boardSubs: action.payload.board}
      case 'fullImage':
        return {...state, ...action.payload.image}
      default:
        console.log("Dispatch type:", action.type);
        throw new Error("Board Dispatch Error", action.type)
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}

export default useSettings
