import React, { useReducer, useEffect } from 'react'

const useSettings = () => {
  const initialState = {
    theme: "light",
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'setTheme':
        return {...state, theme: action.theme}
      case 'loadStored':
        return action.stored
      default:
        throw new Error("yikes")
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  //save the current state to localStorage every time it is updated.
  useEffect(() => {
    localStorage.setItem("cloudChanSettings", JSON.stringify(state))
  },[state])
  return [state, dispatch]
}

export default useSettings
