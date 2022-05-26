import React, { useState } from 'react'
import httpClient from '../../services/http-client'
import useEffectOnce from '../../hooks/use-effect-once'
import wsClient from '../../services/ws-client'
import { useMessage } from '../../providers/message-provider'
import { RoomChip, StartButton, UserBadge, UserBadgeContainer } from './elements'
import { Badge, Stack } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { CardContainer } from '../elements'

function Room () {
  const { id } = useParams()
  const [session, setSession] = useState(undefined)
  const { sendMessage } = useMessage()
  const navigate = useNavigate()
  const shouldCreateRoom = id === 'new'

  useEffectOnce(() => {
    httpClient
      .get(shouldCreateRoom ? '/rooms/new' : `/rooms/join/${id}`)
      .then(function ({ data }) {
        const { session, user } = data
        window.sessionStorage.setItem('session', session.id)
        window.sessionStorage.setItem('user', user)
        setSession(session)
        wsClient.on(session.id, function (data) {
          if (data?.isActive) {
            navigate(`/session/${data?.id}`, { state: { session: data } })
          } else {
            setSession(data)
          }
        })
      })
      .catch(console.log)
  })

  return (
    <CardContainer>
      <RoomChip
        onClick={() => {
          navigator.clipboard.writeText(session?.id).then(() => sendMessage('Copied to clipboard'))
        }}
      >
        <p>{session?.id}</p>
      </RoomChip>
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
      <StartButton
        variant='contained'
        color='secondary'
        onClick={() => {
          httpClient
            .post('/rooms/start')
            .catch(console.log)
        }}
      >
        Start game
      </StartButton>
    </CardContainer>
  )
}

export default Room
