import styled from '@emotion/styled'
import { Button } from '@mui/material'

const MenuButton = styled(Button)`
  width: 90%;
  font-size: xx-large;
  font-weight: bolder;
`

const MenuButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export { MenuButton, MenuButtonContainer }
