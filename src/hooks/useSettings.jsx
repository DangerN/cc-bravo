import React, { useReducer } from 'react'

const useSettings = () => {
  const initialState = {
    theme: "light",
  }
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'setTheme':
        return {...state, theme: action.theme}
      default:
        throw new Error("yikes")
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}

export default useSettings
