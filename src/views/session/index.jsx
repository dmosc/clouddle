import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Confetti from 'react-confetti'
import wsClient from '../../services/ws-client'
import {
  ActiveTurnSection,
  ActiveTurnTitle,
  CellContainer,
  DialogBody,
  InputSection,
  MainSection,
  SessionLayout,
  UsedWordsStackTitle,
  UserBadge,
  WordInput
} from './elements'
import httpClient from '../../services/http-client'
import { useMessage } from '../../providers/message-provider'
import { Badge, Chip, Dialog, DialogActions, Stack } from '@mui/material'
import { MenuButton } from '../home/elements'
import { useWindowSize } from 'react-use'
import useCountDown from 'react-countdown-hook'
import { useUser } from '../../providers/user-provider'

function Session () {
  const { userPayload } = useUser()
  const { width, height } = useWindowSize()
  const navigate = useNavigate()
  const { state } = useLocation()
  const { id } = useParams()
  const [session, setSession] = useState(state.session)
  const { sendMessage } = useMessage()
  const [word, setWord] = useState(undefined)
  const [timeLeft, timeLeftActions] = useCountDown(session?.defaultTurnDuration, 1000)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const isTurn = session?.userOrder[session?.currentUser] === userPayload?.username

  wsClient.on(id, function (data) {
    if (data?.winner) {
      timeLeftActions.pause()
      setTimeout(() => setSession(data), 2000)
    } else {
      setSession(data)
    }
  })

  useEffect(() => {
    if (isTurn) {
      timeLeftActions.reset()
      timeLeftActions.start()
      setIsTimeRunning(true)
    } else {
      timeLeftActions.pause()
      setIsTimeRunning(false)
    }
  }, [isTurn, timeLeftActions])

  useEffect(() => {
    if (isTimeRunning && !timeLeft) {
      httpClient
        .post('/rooms/turn', { word: word ?? '_' })
        .catch(console.log)
      setWord(undefined)
      setIsTimeRunning(false)
    }
  }, [isTimeRunning, timeLeft, timeLeftActions, word])

  return (
    <SessionLayout>
      <MainSection>
        <div />
        <Stack spacing={2} style={{ overflowY: 'scroll', maxHeight: '75%' }}>
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
          <ActiveTurnTitle>
            {isTurn && `${timeLeft / 1000}s`}
          </ActiveTurnTitle>
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
                {user}
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
      <Dialog
        open={!!session?.winner}
        onClose={() => navigate('/')}
        fullWidth
      >
        <DialogBody>
          <Badge
            key={session?.winner}
            color='primary'
            showZero
            overlap='circular'
            badgeContent={`${session?.points[session?.winner]} points 🥇`}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            max={Number.MAX_SAFE_INTEGER}
          >
            <UserBadge current>
              {session?.winner?.slice(0, 4)}
            </UserBadge>
          </Badge>
          <Stack spacing={3} direction='row'>
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
                  {user}
                </UserBadge>
              </Badge>
            ))}
          </Stack>
        </DialogBody>
        <DialogActions style={{ backgroundColor: 'rebeccapurple' }}>
          <MenuButton
            variant='contained'
            color='secondary'
            onClick={() => {
              window.sessionStorage.clear()
              navigate('/')
            }}
          >
            Go home
          </MenuButton>
        </DialogActions>
      </Dialog>
      <Confetti width={width} height={height} run={!!session?.winner} />
    </SessionLayout>
  )
}

export default Session
