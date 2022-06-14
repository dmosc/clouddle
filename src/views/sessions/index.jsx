import React, { useEffect, useState } from 'react'
import httpClient from '../../services/http-client'
import { useNavigate } from 'react-router-dom'
import { CardContainer } from '../elements'
import { Button, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

function Sessions () {
  const navigate = useNavigate()
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    httpClient
      .get('/sessions')
      .then(function ({ data }) {
        setSessions(data)
      })
      .catch(console.log)
  }, [])

  console.log(sessions)
  return (
    <CardContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Winner</TableCell>
              <TableCell>Points</TableCell>
              <TableCell>Words</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((session) => (
              <TableRow key={session?._id}>
                <TableCell>{session?.winner}</TableCell>
                <TableCell>
                  {Object.keys(session?.points).map((key) => (
                    <Chip key={key} label={`${key}:${session?.points[key]}`} size='small' />
                  ))}
                </TableCell>
                <TableCell>
                  {Object.keys(session?.words).map((key) => (
                    <Chip key={key} label={session?.words[key]} size='small' />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => navigate('/')}
      >
        Go back
      </Button>
    </CardContainer>
  )
}

export default Sessions
