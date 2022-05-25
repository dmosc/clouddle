import axios from 'axios'
import { backendConfig } from '../../environment'

const httpClient = axios.create({
  baseURL: backendConfig.httpUrl,
  timeout: 1000
})

httpClient.interceptors.request.use(function (config) {
  const session = window.sessionStorage.getItem('session')
  const user = window.sessionStorage.getItem('user')
  if (session && user) {
    config.headers = {
      ...config.headers,
      user,
      session
    }
  }
  return config
})

export default httpClient
