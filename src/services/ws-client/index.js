import { io } from 'socket.io-client'
import { backendConfig } from '../../environment'

const wsClient = io(backendConfig.wsUrl)

export default wsClient
