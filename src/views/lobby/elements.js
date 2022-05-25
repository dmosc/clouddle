import styled from '@emotion/styled'

const LobbyContainer = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: blueviolet;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
`

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
  font-size: 11vw;
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

export { LobbyContainer, Title }
