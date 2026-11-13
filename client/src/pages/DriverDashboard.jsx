
import { useState } from 'react'
import {
  CarFront,
  MapPin,
  Clock,
  Wallet,
  CheckCircle,
  XCircle,
  UserRound,
  Power,
  Navigation,
  History,
  TrendingUp
} from 'lucide-react'

import './DriverDashboard.css'

function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(true)

  const [requests, setRequests] = useState([
    {
      id: 1,
      passenger: 'Passenger A',
      pickup: 'Vidyagiri',
      destination: 'Dharwad Railway Station',
      distance: '2.4 km',
      fare: '₹180',
      time: '5 min ago'
    },
    {
      id: 2,
      passenger: 'Passenger B',
      pickup: 'Jubilee Circle',
      destination: 'Saptapur',
      distance: '3.1 km',
      fare: '₹220',
      time: 'Just now'
    }
  ])

  const [activeRide, setActiveRide] = useState(null)
  const [message, setMessage] = useState('')

  const handleAccept = (ride) => {
    setActiveRide(ride)
    setRequests((previous) =>
      previous.filter((request) => request.id !== ride.id)
    )
    setMessage('Ride request accepted successfully!')
  }

  const handleReject = (id) => {
    setRequests((previous) =>
      previous.filter((request) => request.id !== id)
    )
    setMessage('Ride request rejected.')
  }

  return (
    <div className="driver-dashboard">

      <aside className="driver-sidebar">
        <h2 className="driver-logo">
          RideSync <span>AI</span>
        </h2>

        <div className="driver-profile">
          <div className="driver-avatar">
            <UserRound size={28} />
          </div>
          <div>
            <h3>Driver Name</h3>
            <p>Verified Driver</p>
          </div>
        </div>

        <nav className="driver-navigation">
          <a href="#overview">Overview</a>
          <a href="#requests">Ride Requests</a>
          <a href="#current-ride">Current Ride</a>
          <a href="#earnings">Earnings</a>
          <a href="#history">Ride History</a>
        </nav>

        <div className="driver-sidebar-footer">
          <CarFront size={20} />
          <span>Intelligent Mobility</span>
        </div>
      </aside>

      <main className="driver-main">

        <header className="driver-header" id="overview">
          <div>
            <h1>Driver Dashboard</h1>
            <p>Manage your rides and availability</p>
          </div>

          <button
            className={`availability-button ${isOnline ? 'online' : 'offline'}`}
            onClick={() => setIsOnline(!isOnline)}
          >
            <Power size={18} />
            {isOnline ? 'Go Offline' : 'Go Online'}
          </button>
        </header>

        <section className="driver-welcome">
          <div>
            <h2>Welcome back, Driver!</h2>
            <p>
              {isOnline
                ? 'You are online and ready to receive ride requests.'
                : 'You are offline. Go online to receive ride requests.'}
            </p>
          </div>

          <div className={`status-indicator ${isOnline ? 'active' : ''}`}>
            <span />
            {isOnline ? 'Online' : 'Offline'}
          </div>
        </section>

        <section className="driver-stats" id="earnings">
          <div className="driver-stat-card">
            <Wallet />
            <p>Today's Earnings</p>
            <h2>₹1,250</h2>
          </div>

          <div className="driver-stat-card">
            <CarFront />
            <p>Completed Rides</p>
            <h2>8</h2>
          </div>

          <div className="driver-stat-card">
            <Clock />
            <p>Online Hours</p>
            <h2>6.5 hrs</h2>
          </div>

          <div className="driver-stat-card">
            <TrendingUp />
            <p>Acceptance Rate</p>
            <h2>92%</h2>
          </div>
        </section>

        <section className="driver-section" id="requests">
          <div className="section-heading">
            <div>
              <h2>Incoming Ride Requests</h2>
              <p>Review and respond to passenger requests</p>
            </div>
            <span>{requests.length} Requests</span>
          </div>

          {!isOnline && (
            <div className="driver-empty">
              You are offline. Go online to receive new requests.
            </div>
          )}

          {isOnline && requests.length === 0 && (
            <div className="driver-empty">
              No pending ride requests.
            </div>
          )}

          {isOnline && requests.map((ride) => (
            <div className="ride-request-card" key={ride.id}>
              <div className="request-top">
                <div className="passenger-info">
                  <div className="passenger-avatar">
                    <UserRound />
                  </div>
                  <div>
                    <h3>{ride.passenger}</h3>
                    <p>{ride.time}</p>
                  </div>
                </div>

                <h2>{ride.fare}</h2>
              </div>

              <div className="request-route">
                <p>
                  <MapPin size={17} />
                  <span>Pickup: {ride.pickup}</span>
                </p>
                <p>
                  <Navigation size={17} />
                  <span>Destination: {ride.destination}</span>
                </p>
              </div>

              <div className="request-details">
                <span>{ride.distance} away</span>
                <span>Estimated pickup: {ride.distance}</span>
              </div>

              <div className="request-actions">
                <button
                  className="accept-button"
                  onClick={() => handleAccept(ride)}
                >
                  <CheckCircle size={17} />
                  Accept
                </button>

                <button
                  className="reject-button"
                  onClick={() => handleReject(ride.id)}
                >
                  <XCircle size={17} />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className="driver-section" id="current-ride">
          <div className="section-heading">
            <div>
              <h2>Current Ride</h2>
              <p>Your active passenger trip</p>
            </div>
          </div>

          {activeRide ? (
            <div className="active-ride-card">
              <span className="active-ride-label">Ride Accepted</span>
              <h3>{activeRide.passenger}</h3>
              <p>Pickup: {activeRide.pickup}</p>
              <p>Destination: {activeRide.destination}</p>
              <p>Estimated Fare: {activeRide.fare}</p>
              <p className="demo-note">
                Demo interface: live ride updates will come from the backend.
              </p>
            </div>
          ) : (
            <div className="driver-empty">
              <CarFront size={28} />
              <p>No active ride. Accept a request to get started.</p>
            </div>
          )}
        </section>

        <section className="driver-section" id="history">
          <div className="section-heading">
            <div>
              <h2>Ride History</h2>
              <p>Your recent completed trips</p>
            </div>
            <History size={22} />
          </div>

          <div className="history-card">
            <span>Yesterday</span>
            <strong>₹240</strong>
            <p>Vidyagiri → Hubli Bus Stand</p>
            <small>Completed</small>
          </div>

          <div className="history-card">
            <span>Yesterday</span>
            <strong>₹150</strong>
            <p>Saptapur → Jubilee Circle</p>
            <small>Completed</small>
          </div>
        </section>

        {message && (
          <div className="driver-message">
            {message}
            <button onClick={() => setMessage('')}>Dismiss</button>
          </div>
        )}

        <footer className="driver-footer">
          RideSync AI · Intelligent mobility for a smarter tomorrow.
        </footer>

      </main>
    </div>
  )
}

export default DriverDashboard
