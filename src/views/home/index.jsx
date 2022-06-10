import React, { useState } from 'react'
import { Divider, MenuButton, MenuButtonContainer, RoomTextField, Title } from './elements'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from '../elements'
import { Button } from '@mui/material'
import { useUser } from '../../providers/user-provider'

function Home () {
  const { logout } = useUser()
  const [room, setRoom] = useState(undefined)
  const navigate = useNavigate()

  return (
    <CardContainer>
      <Title>Clouddle</Title>
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
        <Button
          variant='contained'
          color='secondary'
          onClick={logout}
          style={{ marginTop: '30px' }}
        >
          Logout
        </Button>
      </MenuButtonContainer>
    </CardContainer>
  )
}

export default Home
