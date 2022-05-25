import React from 'react'
import { MenuButton, MenuButtonContainer } from './elements'
import { useNavigate } from 'react-router-dom'

function Menu () {
  const navigate = useNavigate()
  return (
    <MenuButtonContainer>
      <MenuButton variant='contained' color='secondary' onClick={() => navigate('/new')} style={{ marginBottom: 20 }}>
        Create room
      </MenuButton>
      <MenuButton variant='contained' color='secondary' onClick={() => navigate('/join')}>
        Join room
      </MenuButton>
    </MenuButtonContainer>
  )
}

export default Menu
