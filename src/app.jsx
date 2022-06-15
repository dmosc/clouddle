import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import { AppContainer } from './elements'
import { useUser } from './providers/user-provider'

TopBarProgress.config({
  barColors: {
    0: 'blueviolet',
    0.5: '#fce205',
    1: 'blueviolet'
  },
  barThickness: 5
})

const Home = React.lazy(() => import('views/home').catch(console.log))
const Room = React.lazy(() => import('views/room').catch(console.log))
const Session = React.lazy(() => import('views/session').catch(console.log))
const Sessions = React.lazy(() => import('views/sessions').catch(console.log))
const Auth = React.lazy(() => import('views/auth').catch(console.log))

window.sessionStorage.clear()

function App () {
  const { isLogged } = useUser()

  //Checks if user has already logged in
  if (!isLogged) {
    return (
      <AppContainer>
        <Auth />
      </AppContainer>
    )
  }
//if user has already logged in, the app enters the Single Page Application part
//The app displays the component which matches its path
  return (
    <AppContainer>
      <React.Suspense fallback={<TopBarProgress />}>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='room/:id' element={<Room />} />
          <Route path='session/:id' element={<Session />} />
          <Route path='sessions' element={<Sessions />} />
        </Routes>
      </React.Suspense>
    </AppContainer>
  )
}

export default App
