import React, { useState } from 'react'
import { Title, Divider, MenuButton, MenuButtonContainer, RoomTextField } from './elements'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from '../elements'

function Home () {
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
      </MenuButtonContainer>
    </CardContainer>
  )
}

export default Home
