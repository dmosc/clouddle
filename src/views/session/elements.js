import styled from '@emotion/styled'

const SessionLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin: auto auto;
  padding: 30px;
`

const MainSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: inherit;
  height: 80%;
  border-radius: 5px;
`

const ActiveTurnSection = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ActiveTurnTitle = styled.div`
  padding: 10px;
  font-weight: bold;
  font-size: xxx-large;
  width: 130%;
  color: #ffffff;
  background-color: transparent;
  text-align: center;
`

const InputSection = styled.div`
  display: flex;
  width: inherit;
  justify-content: center;
  align-items: center;
  height: 20%;
`

const WordInput = styled.input`
  font-weight: bolder;
  font-size: xx-large;
  color: white;
  height: 4vw;
  width: 50%;
  background-color: rebeccapurple;
  border: none;
  margin: 20px;
  text-align: center;
  text-transform: lowercase;
  border-radius: 5px;
  opacity: ${props => props.isTurn ? 1 : 0.2};

  ::placeholder {
    color: white;
    opacity: 0.5;
  }

  :focus {
    outline: none;
  }
`

const CellContainer = styled.div`
  padding: 10px;
  font-weight: bold;
  font-size: x-large;
  color: #ffffff;
  display: ${props => props.hide ? 'none' : 'block'};
  background-color: blueviolet;
  border-radius: 5px;
  text-align: center;
`

const UsedWordsStackTitle = styled.div`
  padding: 10px;
  font-weight: bold;
  font-size: x-large;
  color: #ffffff;
  background-color: black;
  text-align: center;
`

const UserBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.current ? 'deeppink' : 'blueviolet'};
  width: ${props => props.current ? '6em' : '4em'};
  height: ${props => props.current ? '6em' : '4em'};
  border-radius: 50%;
  color: white;
  font-weight: bolder;
  font-size: xx-large;
  animation: ${props => props.current ? '2s bounce infinite' : 'none'};

  @keyframes bounce {
    0% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(0.90);
    }
    100% {
      transform: scale(1.2);
    }
  }
`

const DialogBody = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  background-color: rebeccapurple;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export {
  SessionLayout,
  MainSection,
  ActiveTurnSection,
  ActiveTurnTitle,
  InputSection,
  WordInput,
  CellContainer,
  UsedWordsStackTitle,
  UserBadge,
  DialogBody
}
