import axios from 'axios'
import { backendConfig } from '../../environment'

const httpClient = axios.create({
  baseURL: backendConfig.httpUrl,
  timeout: 1000,
  withCredentials: true
})

httpClient.interceptors.request.use(function (config) {
  const session = window.sessionStorage.getItem('session')
  if (session) {
    config.headers = {
      ...config.headers,
      session
    }
  }
  return config
})

export default httpClient
