import React, { useState } from 'react';
import { endRide } from '../../services/api';

function EndRide() {
  const [rideId, setRideId] = useState('');
  const [endX, setEndX] = useState('');
  const [endY, setEndY] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await endRide(parseInt(rideId), { x: parseInt(endX), y: parseInt(endY) });
      setSuccess(`Ride ${rideId} ended successfully`);
      setRideId('');
      setEndX('');
      setEndY('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>End Ride</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Ride ID"
          value={rideId}
          onChange={(e) => setRideId(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="End X Coordinate"
          value={endX}
          onChange={(e) => setEndX(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="End Y Coordinate"
          value={endY}
          onChange={(e) => setEndY(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Ending...' : 'End Ride'}
        </button>
      </form>
    </div>
  );
}

export default EndRide;