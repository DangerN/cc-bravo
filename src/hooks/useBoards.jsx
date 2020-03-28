import React, { useReducer } from 'react'

const useSettings = () => {
  const initialState = {
    boardList: {},
    boardSubs: []
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'boardList':
        return {...state, boardList: action.payload.boardList}
      case 'boardDump':
        return {...state, ...action.payload.boardDump}
      case 'addBoardSub':
        return {...state, boardSubs: [...state.boardSubs, action.payload]}
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
