import React, { useState } from 'react'
import { Divider, MenuButton, MenuButtonContainer, TextField, Title } from './elements'
import { CardContainer } from '../elements'
import httpClient from '../../services/http-client'
import { useUser } from '../../providers/user-provider'

function Auth () {
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
    <CardContainer>
      <Title>Clouddle</Title>
      <MenuButtonContainer>
        <TextField
          placeholder='username'
          onChange={({ target }) => setUsername(target.value)}
        />
        <TextField
          placeholder='password'
          type='password'
          onChange={({ target }) => setPassword(target.value)}
        />
        <MenuButton
          variant='contained'
          color='secondary'
          disabled={!username || !password}
          onClick={() => auth('login')}
        >
          Login
        </MenuButton>
        <Divider />
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
