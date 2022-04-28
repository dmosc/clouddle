import React from 'react'
import { LobbyContainer, MenuButton, MenuContainer } from './elements'
import { Typography } from '@mui/material'

function Lobby () {
  return (
    <LobbyContainer>
      <MenuContainer>
        <Typography variant='h1' gutterBottom style={{ fontWeight: 'bolder' }}>
          Clouddle
        </Typography>
        <MenuButton variant='contained' size='large'>Create room</MenuButton>
        <MenuButton variant='contained' size='large'>Join room</MenuButton>
      </MenuContainer>
    </LobbyContainer>
  )
}

export default Lobby
