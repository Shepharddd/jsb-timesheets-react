import React, { useState } from 'react'
import { signInWithMicrosoft } from '../../services/authService'
import './AuthView.css'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignIn = async () => {
    setLoading(true)
    setError(null)
    
    try {
      await signInWithMicrosoft()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in')
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          {/* <img src="/assets/JSBLogo.jpg" alt="JSB Logo" className="login-logo" /> */}
          <h1>Daily Site Log</h1>
          <p>Sign in with your Microsoft account to continue</p>
        </div>
        
        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <button 
          className="login-button" 
          onClick={handleSignIn}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in with Microsoft'}
        </button>
      </div>
    </div>
  )
}

export default Login

