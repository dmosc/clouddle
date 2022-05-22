import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'

TopBarProgress.config({
  barColors: {
    0: 'blueviolet',
    0.5: '#fce205',
    1: 'blueviolet'
  },
  barThickness: 5
})

function wrapWithFallback (children) {
  return (
    <React.Suspense fallback={<TopBarProgress />}>
      {children}
    </React.Suspense>
  )
}

const Lobby = React.lazy(() => import('views/lobby').catch(console.log))
const Room = React.lazy(() => import('views/room').catch(console.log))

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={wrapWithFallback(<Lobby />)} />
        <Route path='/new' element={wrapWithFallback(<Room />)} />
      </Routes>
    </div>
  )
}

export default App
