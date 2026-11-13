import { useState } from 'react'
import Login from './login'
import './App.css'
import {
  ArrowRight,
  MapPin,
  BrainCircuit,
  ShieldCheck,
  Clock,
  CarFront,
  Zap,
  Menu
} from 'lucide-react'

function App() {
  const [showLogin, setShowLogin] = useState(false)

if (showLogin) {
  return <Login onBack={() => setShowLogin(false)} />
}
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <CarFront size={25} />
          </div>
          <span>RideSync<span className="highlight"> AI</span></span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

       <button
  className="nav-button"
  onClick={() => setShowLogin(true)}
>
  Get Started <ArrowRight size={16} />
</button>

        <Menu className="mobile-menu" />
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">

          <div className="tagline">
            <Zap size={15} />
            SMARTER MOBILITY. BETTER JOURNEYS.
          </div>

          <h1>
            Your Journey,
            <br />
            <span>Intelligently</span>
            <br />
            Connected.
          </h1>

          <p>
            Experience smarter transportation with AI-powered
            driver matching, predictive demand and intelligent
            ride allocation.
          </p>

          <div className="hero-buttons">
            <button
  className="primary-button"
  onClick={() => setShowLogin(true)}
>
  Book a Ride <ArrowRight size={18} />
</button>
       

            <a href="#features" className="secondary-button">
              Explore Features
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>AI Powered</h3>
              <span>Smart allocation</span>
            </div>
            <div>
              <h3>Real-time</h3>
              <span>Ride monitoring</span>
            </div>
            <div>
              <h3>24/7</h3>
              <span>Smart mobility</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="map-card">
            <div className="map-top">
              <span><MapPin size={17} /> Live Mobility</span>
              <span className="live-dot">● LIVE</span>
            </div>

            <div className="map-content">
              <div className="route-line"></div>
              <div className="map-pin pin-one">
                <MapPin size={27} />
              </div>
              <div className="map-pin pin-two">
                <MapPin size={27} />
              </div>
              <div className="car-marker">
                <CarFront size={25} />
              </div>
            </div>

            <div className="ride-info">
              <div>
                <span>Estimated pickup</span>
                <h3>4 minutes</h3>
              </div>
              <div className="driver-status">
                <span className="status-dot"></span>
                Driver available
              </div>
            </div>
          </div>

          <div className="floating-card">
            <BrainCircuit size={22} />
            <div>
              <strong>Smart Matching</strong>
              <span>AI selecting best driver</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-heading">
          <span>OUR TECHNOLOGY</span>
          <h2>Mobility made intelligent.</h2>
          <p>Technology that makes every journey smarter.</p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">
              <BrainCircuit />
            </div>
            <h3>Smart Driver Matching</h3>
            <p>
              Identify the most suitable driver using
              distance, ETA and driver availability.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Clock />
            </div>
            <h3>Predictive Demand</h3>
            <p>
              Predict high-demand areas and help
              reduce passenger waiting times.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <ShieldCheck />
            </div>
            <h3>Fair Driver Allocation</h3>
            <p>
              Balance driver workload while providing
              efficient passenger service.
            </p>
          </div>

        </div>
      </section>

      {/* Booking section */}
      <section className="booking" id="booking">
        <div>
          <span>READY TO EXPERIENCE RIDESYNC?</span>
          <h2>Let's make your next journey smarter.</h2>
        </div>
        <a href="#home" className="primary-button">
          Explore RideSync <ArrowRight size={18} />
        </a>
      </section>

      <footer id="about">
        <div className="logo">
          <CarFront />
          <span>RideSync<span className="highlight"> AI</span></span>
        </div>
        <p>Intelligent mobility for a smarter tomorrow.</p>
        <span>©️ 2026 RideSync AI. Hackathon Prototype.</span>
      </footer>

    </div>
  )
}

export default App