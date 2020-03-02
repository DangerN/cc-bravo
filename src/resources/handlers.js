export const handleMessage = (message, dispatch) => {
  if (message.error) { console.log(message.error); return}
  dispatch({type: message.type, payload: message })
}
