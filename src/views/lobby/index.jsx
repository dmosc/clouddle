import React from 'react'
import { LobbyContainer, MenuButton, MenuContainer, Title } from './elements'

function Lobby () {
  return (
    <LobbyContainer>
      <MenuContainer>
        <Title>Clouddle</Title>
        <MenuButton variant='contained' color='secondary' size='large'>Create room</MenuButton>
        <MenuButton variant='contained' color='secondary' size='large'>Join room</MenuButton>
      </MenuContainer>
    </LobbyContainer>
  )
}

export default Lobby
