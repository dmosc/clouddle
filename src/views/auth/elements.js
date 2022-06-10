import styled from '@emotion/styled'
import { Button } from '@mui/material'

const Title = styled.h2`
  --color-primary: #fce205;
  --color-secondary: #ffc30b;
  --color-tertiary: #fda50f;
  --color-quaternary: #cc7722;
  --color-quinary: #c49102;

  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  font-family: "Comic Sans MS", sans-serif;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 8vw;
  text-align: center;
  margin-top: 10px;
  color: var(--color-primary);
  animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
  letter-spacing: -0.5rem;

  @keyframes shadows {
    0% {
      text-shadow: none;
    }
    10% {
      text-shadow: 3px 3px 0 var(--color-secondary);
    }
    20% {
      text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary);
    }
    30% {
      text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
    }
    40% {
      text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
    }
    50% {
      text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
    }
    60% {
      text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
    }
    70% {
      text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
    }
    80% {
      text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary);
    }
    90% {
      text-shadow: 3px 3px 0 var(--color-secondary);
    }
    100% {
      text-shadow: none;
    }
  }

  @keyframes move {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(0px, -20px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`

const MenuButton = styled(Button)`
  width: 100%;
  font-size: xx-large;
  font-weight: bolder;
`

const MenuButtonContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextField = styled.input`
  font-weight: bolder;
  font-size: x-large;
  color: white;
  height: 3vw;
  width: 100%;
  background-color: rebeccapurple;
  border: none;
  margin: 10px;
  text-align: center;
  border-radius: 5px;

  ::placeholder {
    color: inherit;
    opacity: 0.5;
  }

  :focus {
    outline: none;
  }
`

const Divider = styled.div`
  width: 30%;
  background-color: rebeccapurple;
  height: 5px;
  margin: 10px 0;
`

export { Title, MenuButton, MenuButtonContainer, TextField, Divider }
