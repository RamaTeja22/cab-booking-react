// src/components/UpdateLocation.jsx

import React, { useState } from 'react';
import { updateDriverLocation } from '../../services/api';

function UpdateLocation() {
  const [driverId, setDriverId] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await updateDriverLocation(parseInt(driverId), { x: parseInt(x), y: parseInt(y) });
      setSuccess('Driver location updated successfully!');
      setDriverId('');
      setX('');
      setY('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Update Cab Location</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Driver ID"
          value={driverId}
          onChange={(e) => setDriverId(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="X Coordinate"
          value={x}
          onChange={(e) => setX(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Y Coordinate"
          value={y}
          onChange={(e) => setY(e.target.value)}
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Location'}
        </button>
      </form>
    </div>
  );
}

export default UpdateLocation;