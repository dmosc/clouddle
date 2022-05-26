import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import wsClient from '../../services/ws-client'
import {
  CellContainer,
  InputSection,
  MainSection,
  SessionLayout,
  WordInput,
  UserBadge,
  UsedWordsStackTitle, ActiveTurnSection, ActiveTurnTitle
} from './elements'
import httpClient from '../../services/http-client'
import { useMessage } from '../../providers/message-provider'
import { Badge, Chip, Stack } from '@mui/material'

const user = window.sessionStorage.getItem('user')

function Session () {
  const { state } = useLocation()
  const { id } = useParams()
  const [session, setSession] = useState(state.session)
  const { sendMessage } = useMessage()
  const [word, setWord] = useState(undefined)
  const isTurn = session?.userOrder[session?.currentUser] === user

  wsClient.on(id, function (data) {
    console.log(data)
    setSession(data)
  })

  return (
    <SessionLayout>
      <MainSection>
        <div />
        <Stack spacing={2} style={{ overflowY: 'scroll', maxHeight: '70%' }}>
          <UsedWordsStackTitle>
            Used words ({session?.usedWords.length})
          </UsedWordsStackTitle>
          {session?.usedWords.map((usedWord) => (
            <CellContainer
              key={usedWord}
              hide={!!word && !usedWord.includes(word)}
            >
              {usedWord}
            </CellContainer>
          ))}
        </Stack>
        <ActiveTurnSection>
          <ActiveTurnTitle>
            A word with <span style={{ color: 'red' }}>{session?.prefix}</span>?
          </ActiveTurnTitle>
          <Badge
            overlap='circular'
            badgeContent={<Chip label='🤔💭' style={{ fontSize: '2em' }} />}
          >
            <UserBadge current>
              {session?.userOrder[session?.currentUser].slice(0, 4)}
            </UserBadge>
          </Badge>
        </ActiveTurnSection>
        <Stack spacing={2}>
          {session?.userOrder.map((user) => (
            <Badge
              key={user}
              color='primary'
              showZero
              overlap='circular'
              badgeContent={`${session?.points[user]} points`}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              max={Number.MAX_SAFE_INTEGER}
            >
              <UserBadge>
                {user.slice(0, 4)}
              </UserBadge>
            </Badge>
          ))}
        </Stack>
        <div />
      </MainSection>
      <InputSection>
        <WordInput
          isTurn={isTurn}
          placeholder={isTurn ? `Something with "${session?.prefix}"` : 'Waiting for your turn'}
          autoFocus
          disabled={!isTurn}
          onChange={(e) => {
            e.preventDefault()
            setWord(e.target.value)
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              if (isTurn) {
                e.preventDefault()
                if (word) {
                  httpClient
                    .post('/rooms/turn', { word })
                    .catch(console.log)
                }
              } else {
                sendMessage('It\'s not your turn yet')
              }
              setWord(undefined)
              e.target.value = ''
            }
          }}
        />
      </InputSection>
    </SessionLayout>
  )
}

export default Session
