
import { useState } from 'react'
import {
  MapPin,
  Navigation,
  CarFront,
  Bike,
  Clock,
  Wallet,
  ArrowRight,
  Menu,
  UserRound,
  LocateFixed
} from 'lucide-react'
import './PassengerDashboard.css'

function PassengerDashboard() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [rideType, setRideType] = useState('Standard')
  const [bookingMessage, setBookingMessage] = useState('')
  const [rideStatus, setRideStatus] = useState('')
  const [rating, setRating] = useState(0)
const [reviewText, setReviewText] = useState('')
const [reviewSubmitted, setReviewSubmitted] = useState(false)

  const fares = {
    Standard: 100,
    Premium: 180,
    Bike: 50
  }

  const handleBooking = (e) => {
    e.preventDefault()

    if (!pickup.trim() || !destination.trim()) {
      setBookingMessage('Please enter both pickup and destination.')
      return
    }

    setBookingMessage(
      `Demo booking created! ${rideType} ride from ${pickup} to ${destination}. Estimated fare: ₹${fares[rideType]}.`
    )
    setRideStatus('Requested')
  }

  return (
    <div className="passenger-dashboard">

      <aside className="passenger-sidebar">
        <div className="passenger-logo">
          <CarFront size={30} />
          <span>RideSync <b>AI</b></span>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">
            <UserRound size={24} />
          </div>
          <div>
            <strong>Welcome, Passenger</strong>
            <span>Plan your next journey</span>
          </div>
        </div>

        <nav className="passenger-nav">
          <a className="active" href="#book">
            <CarFront size={19} /> Book a Ride
          </a>
          <a href="#history">
            <Clock size={19} /> Ride History
          </a>
          <a href="#payments">
            <Wallet size={19} /> Payments
          </a>
        </nav>

        <div className="sidebar-footer">
          <span>RIDESYNC AI</span>
          <p>Smarter mobility for everyone.</p>
        </div>
      </aside>

      <main className="passenger-main">

        <header className="passenger-header">
          <div>
            <span>PASSENGER PORTAL</span>
            <h1>Where are you going?</h1>
            <p>Book your next ride with intelligent driver matching.</p>
          </div>
          <button className="profile-button">
            <UserRound size={20} /> My Profile
          </button>
        </header>

        <div className="passenger-content">

          <section className="booking-panel" id="book">

            <div className="panel-heading">
              <div>
                <span>NEW BOOKING</span>
                <h2>Find your ride</h2>
              </div>
              <CarFront size={30} />
            </div>

            <form onSubmit={handleBooking}>

              <div className="location-input">
                <MapPin size={21} />
                <div>
                  <label>Pickup location</label>
                  <input
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Enter your pickup location"
                    required
                  />
                </div>
              </div>

              <div className="location-input">
                <Navigation size={21} />
                <div>
                  <label>Destination</label>
                  <input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where do you want to go?"
                    required
                  />
                </div>
              </div>

              <div className="ride-selection">
                <label>Choose your ride</label>

                <div className="ride-options">
                  <button
                    type="button"
                    className={rideType === 'Standard' ? 'selected' : ''}
                    onClick={() => {
                      setRideType('Standard')
                      setBookingMessage('')
                    }}
                  >
                    <CarFront size={24} />
                    <strong>Standard</strong>
                    <span>₹100</span>
                  </button>

                  <button
                    type="button"
                    className={rideType === 'Premium' ? 'selected' : ''}
                    onClick={() => {
                      setRideType('Premium')
                      setBookingMessage('')
                    }}
                  >
                    <CarFront size={24} />
                    <strong>Premium</strong>
                    <span>₹180</span>
                  </button>

                  <button
                    type="button"
                    className={rideType === 'Bike' ? 'selected' : ''}
                    onClick={() => {
                      setRideType('Bike')
                      setBookingMessage('')
                    }}
                  >
                    <Bike size={24} />
                    <strong>Bike</strong>
                    <span>₹50</span>
                  </button>
                </div>
              </div>

              <div className="fare-summary">
                <span>Estimated fare</span>
                <strong>₹{fares[rideType]}</strong>
              </div>

              <button type="submit" className="find-driver-button">
                Find My Driver <ArrowRight size={19} />
              </button>

              {bookingMessage && (
                <div className="booking-message">
                  {bookingMessage}
                </div>
              )}
              {rideStatus && (
  <div className="ride-status-card">
    <h3>Your Ride Status</h3>

    {['Requested', 'Driver Assigned', 'Driver Arriving', 'Ride Ongoing', 'Completed'].map((status, index) => (
      <div
        key={status}
        className={`status-step ${
          ['Requested', 'Driver Assigned', 'Driver Arriving', 'Ride Ongoing', 'Completed']
            .indexOf(rideStatus) >= index ? 'active' : ''
        }`}
      >
        <span className="status-dot"></span>
        <span>{status}</span>
      </div>
    ))}
  </div>
)}
    {rideStatus === 'Requested' && (
  <button
    type="button"
    onClick={() => setRideStatus('Completed')}
  >
    Simulate Ride Completed
  </button>
)}
{rideStatus === 'Completed' && (
  <div className="review-card">
    <h3>Rate Your Driver</h3>
    <p>How was your ride experience?</p>

    {!reviewSubmitted ? (
      <>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={rating >= star ? 'star active' : 'star'}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          placeholder="Write your experience..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />

        <button
          type="button"
          onClick={() => {
            if (rating === 0) {
              alert('Please select a star rating.')
              return
            }
            setReviewSubmitted(true)
          }}
        >
          Submit Review
        </button>
      </>
    ) : (
      <p>Thank you! Your review has been submitted.</p>
    )}
  </div>
)}

            </form>
          </section>

          <section className="map-panel">
            <div className="map-heading">
              <div>
                <span>YOUR JOURNEY</span>
                <h2>Ride overview</h2>
              </div>
              <LocateFixed size={22} />
            </div>

            <div className="map-placeholder">
              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-road road-three"></div>

              <div className="map-location pickup-pin">
                <MapPin size={30} />
                <span>Pickup</span>
              </div>

              <div className="map-location destination-pin">
                <Navigation size={28} />
                <span>Destination</span>
              </div>

              <div className="map-center-car">
                <CarFront size={26} />
              </div>
            </div>

            <div className="map-note">
              <Clock size={18} />
              <span>Driver ETA will appear after matching.</span>
            </div>
          </section>

        </div>

        <footer className="passenger-footer">
          RideSync AI · Intelligent mobility for a smarter tomorrow.
        </footer>

      </main>
    </div>
  )
}

export default PassengerDashboard
