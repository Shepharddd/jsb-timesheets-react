import './AuthView.css'

interface AuthProps {
  authLoading: boolean
  onSignIn: () => Promise<void>
}

export default function AuthView({ 
  authLoading,
  onSignIn
}: AuthProps) {

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          {/* <img src="/assets/JSBLogo.jpg" alt="JSB Logo" className="login-logo" /> */}
          <h1>Daily Site Log</h1>
          <p>Sign in with your Microsoft account to continue</p>
        </div>
        
        <button 
          className="login-button" 
          onClick={onSignIn}
          disabled={authLoading}
        >
          {authLoading ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </div>
  )
}

