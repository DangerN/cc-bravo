export const handleMessage = (message, dispatch) => {
  dispatch({type: message.type, payload: message })
}
