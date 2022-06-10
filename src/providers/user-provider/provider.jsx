import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import httpClient from '../../services/http-client'

const UserContext = React.createContext({})

function UserProvider ({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const [userPayload, setUserPayload] = useState({})

  function maybeGetUser (tokenFromRequest = null) {
    const cookie = Cookies.get('cld-token')
    const token = cookie ?? tokenFromRequest?.data.token

    if (!cookie && token) {
      Cookies.set('cld-token', token)
    }

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
    Cookies.remove('cld-token')
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
