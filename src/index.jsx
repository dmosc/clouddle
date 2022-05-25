import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './app'
import { MessageProvider } from './providers/message-provider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <MessageProvider>
        <App />
      </MessageProvider>
    </BrowserRouter>
  </React.StrictMode>
)
