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
  //Declare states and variables
  const { id } = useParams()
  const [session, setSession] = useState(undefined)
  const { sendMessage } = useMessage()
  const navigate = useNavigate()
  const shouldCreateRoom = id === 'new'


  useEffectOnce(() => {
    httpClient
      .get(shouldCreateRoom ? '/rooms/new' : `/rooms/join/${id}`)
      .then(function ({ data }) {
        const { session } = data
        window.sessionStorage.setItem('session', session.id)
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
    //Room elements container
    <CardContainer>
      {/* Contains room chip, calls function to copy content to clipboard and returns a promise to send a message */}
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
                {user}
              </UserBadge>
            </Badge>
          ))}
        </Stack>
      </UserBadgeContainer>
      {/* Start button, disabled until at least 2 people join */}
      {/* Calls onClick function to launch game */}
      <StartButton
        variant='contained'
        color='secondary'
        disabled={session?.userOrder.length < 2}
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
