import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LobbyContainer, Title } from './elements'
import Menu from './menu'
import NewRoom from './new-room'

function Lobby () {
  return (
    <LobbyContainer>
      <Title>Clouddle</Title>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/new' element={<NewRoom />} />
      </Routes>
    </LobbyContainer>
  )
}

export default Lobby
