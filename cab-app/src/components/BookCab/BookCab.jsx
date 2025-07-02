// src/components/BookCab.jsx

import React, { useState } from 'react';
import { bookRide } from '../../services/api';

function BookCab() {
  const [riderId, setRiderId] = useState('');
  const [pickupX, setPickupX] = useState('');
  const [pickupY, setPickupY] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const result = await bookRide(parseInt(riderId), parseInt(pickupX), parseInt(pickupY));
      setSuccess(`Ride booked successfully! Assigned to driver ${result.driver.name}`);
      setRiderId('');
      setPickupX('');
      setPickupY('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Book a Cab</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Rider ID"
          value={riderId}
          onChange={(e) => setRiderId(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Pickup X Coordinate"
          value={pickupX}
          onChange={(e) => setPickupX(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Pickup Y Coordinate"
          value={pickupY}
          onChange={(e) => setPickupY(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Booking...' : 'Book Cab'}
        </button>
      </form>
    </div>
  );
}

export default BookCab;