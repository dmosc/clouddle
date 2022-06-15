import React, { useState } from 'react'
import { Divider, MenuButton, MenuButtonContainer, TextField, Title } from './elements'
import { CardContainer } from '../elements'
import httpClient from '../../services/http-client'
import { useUser } from '../../providers/user-provider'

//Auth component
function Auth () {
  //Declaring state variables
  const { maybeGetUser } = useUser()
  const [username, setUsername] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  const auth = (path) => {
    httpClient
      .post(`/auth/${path}`, { username, password })
      .then(maybeGetUser)
      .catch(console.log)
  }

  return (
//Login and Register container, container defined to be used in Home as well
    <CardContainer>
      {/* Game name display: animation made in CSS */}
      <Title>Clouddle</Title>
      {/* Username input, password input, login and register button container */}
      <MenuButtonContainer>
        {/* Username field, calling the onChange function to set the user state hook */}
        <TextField
          placeholder='username'
          onChange={({ target }) => setUsername(target.value)}
        />
        {/* Password field, calling the onChange function to set the password state hook */}
        <TextField
          placeholder='password'
          type='password'
          onChange={({ target }) => setPassword(target.value)}
        />
        {/* Login button, which is disable when username or password are missing */}
        {/* Calls function to pass login method */}
        <MenuButton
          variant='contained'
          color='secondary'
          disabled={!username || !password}
          onClick={() => auth('login')}
        >
          Login
        </MenuButton>
        <Divider />
        {/* Register button, which is disable when username or password are missing */}
        {/* Calls function to pass register method */}
        <MenuButton
          variant='contained'
          color='secondary'
          disabled={!username || !password}
          onClick={() => auth('register')}
        >
          Register
        </MenuButton>
      </MenuButtonContainer>
    </CardContainer>
  )
}

export default Auth
