// noinspection HttpUrlsUsage
const backendConfig = {
  httpUrl: `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`,
  wsUrl: `ws://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`
}

export { backendConfig }
