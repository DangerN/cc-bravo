import React, { useReducer } from 'react'

const useSettings = () => {
  const initialState = {
    boardList: []
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'hmm':
        return state
      default:
        throw new Error("yikes")
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return [state, dispatch]
}

export default useSettings
