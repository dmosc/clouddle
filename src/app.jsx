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

const Lobby = React.lazy(() => import('views/lobby').catch(console.log))
const Room = React.lazy(() => import('views/room').catch(console.log))

function App () {
  window.sessionStorage.clear()
  return (
    <AppContainer>
      <React.Suspense fallback={<TopBarProgress />}>
        <Routes>
          <Route path='*' element={<Lobby />} />
          <Route path='/join:id' element={<Room />} />
        </Routes>
      </React.Suspense>
    </AppContainer>
  )
}

export default App
