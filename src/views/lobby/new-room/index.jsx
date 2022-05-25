import React, { useState } from 'react'
import httpClient from '../../../services/http-client'
import useEffectOnce from '../../../hooks/use-effect-once'
import wsClient from '../../../services/ws-client'
import { useMessage } from '../../../providers/message-provider'
import { RoomChip, StartButton, UserBadge, UserBadgeContainer } from './elements'
import { Badge, Stack } from '@mui/material'

function NewRoom () {
  const [session, setSession] = useState(undefined)
  const { sendMessage } = useMessage()

  useEffectOnce(() => {
    httpClient
      .get('/rooms/new')
      .then(function ({ data }) {
        const { session, user } = data
        window.sessionStorage.setItem('session', session.id)
        window.sessionStorage.setItem('user', user)
        setSession(session)
        wsClient.on(session.id, function (data) {
          setSession(data)
        })
      })
      .catch(console.log)
  })

  return (
    <>
      <RoomChip
        clickable
        label={session?.id}
        onClick={() => {
          navigator.clipboard.writeText(session?.id).then(() => sendMessage('Copied to clipboard'))
        }}
      />
      <UserBadgeContainer>
        <Stack spacing={3} direction='row'>
          {session?.userOrder.map((user, i) => (
            <Badge
              key={user}
              color='primary'
              showZero
              overlap='circular'
              badgeContent={i}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <UserBadge>
                {user.slice(0, 4)}
              </UserBadge>
            </Badge>
          ))}
        </Stack>
      </UserBadgeContainer>
      <StartButton variant='contained' color='secondary'>
        Start game
      </StartButton>
    </>
  )
}

export default NewRoom
