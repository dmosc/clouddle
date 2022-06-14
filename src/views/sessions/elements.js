import styled from '@emotion/styled'
import { Button } from '@mui/material'

const RoomChip = styled.div`
  text-align: center;
  vertical-align: middle;
  min-width: 120%;
  height: 80px;
  border-radius: 5px;
  margin-top: -30px;
  color: white;
  font-weight: bolder;
  font-size: x-large;
  background-color: deeppink;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  :hover {
    background-color: darkmagenta;
    cursor: copy;
  }
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
