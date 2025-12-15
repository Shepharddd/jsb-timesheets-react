import { useState, useEffect } from 'react'
import Login from './views/Auth/AuthView'
import Home from './views/Home/HomeView'
import { useAppViewModel } from './viewmodels/AppViewModel'
import React from 'react'

function App() {
  const { user, loading } = useAppViewModel()
  const [view, setView] = useState<'login' | 'home'>('login')

  // Update view based on authentication state
  useEffect(() => {
    if (!loading) {
      if (user) {
        setView('home')
      } else {
        setView('login')
      }
    }
  }, [loading, user])

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div>
      <div className="section timesheet-logo-section">
          <img src="/assets/JSBLogo.jpg" alt="JSB Logo" className="timesheet-logo" />
          <div className="timesheet-logo-spacer"></div>
        </div>
      {(view === 'login' || !user) ? <Login /> : <Home user={user} />}
    </div>
  )
}

export default App
