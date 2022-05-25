import { useContext } from 'react'
import MessageProvider, { MessageContext } from './provider'

const useMessage = () => useContext(MessageContext)

export { useMessage, MessageProvider }
