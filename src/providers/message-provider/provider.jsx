import React, { useState } from 'react'
import { Snackbar } from '@mui/material'

const MessageContext = React.createContext({})

function MessageProvider ({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState('')

  function sendMessage (message) {
    setIsVisible(true)
    setMessage(message)
  }

  return (
    <MessageContext.Provider value={{ sendMessage }}>
      {children}
      <Snackbar
        open={isVisible}
        message={message}
        autoHideDuration={5000}
        onClose={() => {
          setMessage('')
          setIsVisible(false)
        }}
      />
    </MessageContext.Provider>
  )
}

export { MessageContext }
export default MessageProvider
