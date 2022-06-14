import React, { useState } from 'react'
import { ActionButtonsContainer, Divider, MenuButton, MenuButtonContainer, RoomTextField, Title } from './elements'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from '../elements'
import { Button, Typography } from '@mui/material'
import { useUser } from '../../providers/user-provider'

function Home () {
  const { userPayload, logout } = useUser()
  const [room, setRoom] = useState(undefined)
  const navigate = useNavigate()

  return (
    <CardContainer>
      <Title>Clouddle</Title>
      <Typography variant='h4' style={{ color: 'white', fontWeight: 'bolder' }}>
        {`Hello, ${userPayload?.username}`}
      </Typography>
      <MenuButtonContainer>
        <RoomTextField
          placeholder='room-id'
          onChange={({ target }) => {
            setRoom(target.value)
          }}
        />
        <MenuButton
          variant='contained'
          color='secondary'
          onClick={() => navigate(`/room/${room}`)}
        >
          Join room
        </MenuButton>
        <Divider />
        <MenuButton
          variant='contained'
          color='secondary'
          onClick={() => navigate('/room/new')}
        >
          Create room
        </MenuButton>
        <ActionButtonsContainer>
          <Button
            variant='contained'
            color='secondary'
            onClick={logout}
          >
            Logout
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => navigate('/sessions')}
          >
            Past games
          </Button>
        </ActionButtonsContainer>
      </MenuButtonContainer>
    </CardContainer>
  )
}

export default Home
