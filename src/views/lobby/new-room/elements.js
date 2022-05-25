import styled from '@emotion/styled'
import { Button, Chip } from '@mui/material'

const RoomChip = styled(Chip)`
  width: 95%;
  padding: 3px;
  color: white;
  font-weight: bolder;
  font-size: x-large;
  background-color: deeppink;
`

const UserBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #B65BCD;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  color: white;
  font-weight: bolder;
  font-size: x-large;
`

const UserBadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 30vh;
  margin: 20px;
`

const StartButton = styled(Button)`
  width: 90%;
  height: 10%;
  font-size: xx-large;
  font-weight: bolder;
  margin-bottom: 20px;
`

export { RoomChip, UserBadge, UserBadgeContainer, StartButton }
