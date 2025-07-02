import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your Ride, On-Demand</h1>
          <p className="hero-subtitle">
            Fast, reliable, and just a few clicks away. Get where you need to go
            with Cab App.
          </p>
          <div className="hero-cta-buttons">
            <Link to="/book-cab" className="cta-button primary">Book a Cab</Link>
            <Link to="/register-driver" className="cta-button secondary">Become a Driver</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
