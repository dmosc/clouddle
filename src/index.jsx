import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './app'
import { MessageProvider } from './providers/message-provider'
import { UserProvider } from './providers/user-provider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <MessageProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </MessageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
