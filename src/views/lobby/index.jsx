import React from 'react'
import { LobbyContainer, MenuButton, MenuContainer, Title } from './elements'
import { useNavigate } from 'react-router-dom'

function Lobby () {
  const navigate = useNavigate()
  return (
    <LobbyContainer>
      <MenuContainer>
        <Title>Clouddle</Title>
        <MenuButton variant='contained' color='secondary' size='large' onClick={() => navigate('/new')}>
          Create room
        </MenuButton>
        <MenuButton variant='contained' color='secondary' size='large' onClick={() => navigate('/join')}>
          Join room
        </MenuButton>
      </MenuContainer>
    </LobbyContainer>
  )
}

export default Lobby
