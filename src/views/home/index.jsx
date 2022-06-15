import React, { useState } from 'react'
import { ActionButtonsContainer, Divider, MenuButton, MenuButtonContainer, RoomTextField, Title } from './elements'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from '../elements'
import { Button, Typography } from '@mui/material'
import { useUser } from '../../providers/user-provider'

//Home component
function Home () {
  //Declaring hooks
  const { userPayload, logout } = useUser()
  const [room, setRoom] = useState(undefined)
  //Declare a useNavigate() variable to call components
  const navigate = useNavigate()

  return (
//Input room-id and buttons container
    <CardContainer>
      {/* Game name display: animation made in CSS */}
      <Title>Clouddle</Title>
      {/* Display greeting to user */}
      <Typography variant='h4' style={{ color: 'white', fontWeight: 'bolder' }}>
        {`Hello, ${userPayload?.username}`}
      </Typography>
      <MenuButtonContainer>
        {/* Room-id input, calling onChange function to set the room state hook to its content */}
        <RoomTextField
          placeholder='room-id'
          onChange={({ target }) => {
            setRoom(target.value)
          }}
        />
        {/* Join room button, calling onClick funtion to navigate to Lobby (room component) */}
        <MenuButton
          variant='contained'
          color='secondary'
          onClick={() => navigate(`/room/${room}`)}
        >
          Join room
        </MenuButton>
        {/* Create room button, calling onClick funtion to navigate to a new Lobby (room component) */}
        <Divider />
        <MenuButton
          variant='contained'
          color='secondary'
          onClick={() => navigate('/room/new')}
        >
          Create room
        </MenuButton>

        <ActionButtonsContainer>
          {/* Logout button, calling onClick funtion to perform logout */}
          <Button
            variant='contained'
            color='secondary'
            onClick={logout}
          >
            Logout
          </Button>

          {/* Past games button, calling onClick funtion to navigate to sessions component */}
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
