import styled from '@emotion/styled'
import { Button } from '@mui/material'

const LobbyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuContainer = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: cornflowerblue;
  border-radius: 2%;
`

const MenuButton = styled(Button)`
  width: 90%;
  height: 20%;
  font-size: xx-large;
  font-weight: bolder;
  margin-bottom: 20px;
`

export { LobbyContainer, MenuContainer, MenuButton }
