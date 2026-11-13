
import { useState } from 'react'
import {
  CarFront,
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'
import './login.css'

function Login({ onBack, onLogin }) {
  const [role, setRole] = useState('passenger')
  const [showPassword, setShowPassword] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [message, setMessage] = useState('')

 const handleSubmit = (e) => {
  e.preventDefault()

  if (onLogin) {
    onLogin(role)
  } else {
    setMessage('Demo login submitted!')
  }
}

  return (
    <div className="login-page">

      <div className="login-brand-panel">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={18} /> Back to Home
        </button>

        <div className="login-brand">
          <CarFront size={38} />
          <span>RideSync <b>AI</b></span>
        </div>

        <div className="brand-message">
          <span className="brand-label">SMARTER MOBILITY</span>
          <h1>
            Every journey
            <br />
            begins with
            <br />
            <span>intelligence.</span>
          </h1>
          <p>
            Experience smarter rides with intelligent
            driver matching and predictive mobility.
          </p>
        </div>

        <div className="brand-footer">
          <ShieldCheck size={18} />
          Intelligent mobility. Better journeys.
        </div>
      </div>

      <div className="login-form-panel">
        <div className="login-box">

          <div className="welcome-text">
            <span>WELCOME TO RIDESYNC</span>
            <h2>{isRegister ? 'Create account' : 'Welcome back!'}</h2>
            <p>
              {isRegister
                ? 'Create your account to get started.'
                : 'Sign in to continue your journey.'}
            </p>
          </div>

          <div className="role-selector">
            <button
              type="button"
              className={role === 'passenger' ? 'role-active' : ''}
              onClick={() => setRole('passenger')}
            >
              <UserRound size={18} />
              Passenger
            </button>

            <button
              type="button"
              className={role === 'driver' ? 'role-active' : ''}
              onClick={() => setRole('driver')}
            >
              <CarFront size={18} />
              Driver
            </button>
          </div>

          <form onSubmit={handleSubmit}>

            {isRegister && (
              <div className="form-group">
                <label>Full name</label>
                <div className="input-wrapper">
                  <UserRound size={18} />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label>Email address</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {!isRegister && (
              <div className="forgot-password">
                <a href="#forgot">Forgot password?</a>
              </div>
            )}

            <button className="login-submit" type="submit">
              {isRegister ? 'Create Account' : 'Sign In'}
              <ArrowRight size={18} />
            </button>

          </form>

          {message && (
            <div className="login-message">
              {message}
            </div>
          )}

          <div className="register-text">
            {isRegister
              ? 'Already have an account?'
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsRegister(!isRegister)
                setMessage('')
              }}
            >
              {isRegister ? 'Sign In' : 'Create Account'}
            </button>
          </div>

          <div className="login-security">
            <ShieldCheck size={16} />
            Secure access to your RideSync account
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login
