import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import { AppContainer } from './elements'

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

window.sessionStorage.clear()

function App () {
  return (
    <AppContainer>
      <React.Suspense fallback={<TopBarProgress />}>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='room/:id' element={<Room />} />
          <Route path='session/:id' element={<Session />} />
        </Routes>
      </React.Suspense>
    </AppContainer>
  )
}

export default App
