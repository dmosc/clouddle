import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import httpClient from '../../services/http-client'

const UserContext = React.createContext({})

function UserProvider ({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const [userPayload, setUserPayload] = useState({})

  function maybeGetUser () {
    const token = Cookies.get('cld-token')
    if (token) {
      const payload = jwtDecode(token)
      setIsLogged(!!token)
      setUserPayload(payload)
    }
  }

  function logout () {
    httpClient
      .post('/auth/logout')
      .catch(console.log)
    setIsLogged(false)
    setUserPayload({})
  }

  useEffect(() => {
    maybeGetUser()
  }, [])

  return (
    <UserContext.Provider value={{ userPayload, isLogged, maybeGetUser, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext }
export default UserProvider
